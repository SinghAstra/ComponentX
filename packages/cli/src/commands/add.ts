import path from 'node:path';

import { Command } from 'commander';

import { CliError } from '../lib/errors';
import { writeGeneratedFile, writePrimitiveFile } from '../lib/files';
import { buildInstallCommand, runInstall } from '../lib/install';
import { logger } from '../lib/logger';
import { preflight } from '../lib/preflight';
import {
  createRegistryClient,
  fetchComponent,
  fetchIndex,
  RegistryError,
  resolveRegistryUrl,
} from '../lib/registry';
import { renderTemplate } from '../lib/render';
import { collectShadcnItems } from '../lib/shadcn';

const BROKEN_TOAST_IMPORT = '@/components/providers/toast';

type AddOptions = {
  registry?: string;
  yes?: boolean;
  dryRun?: boolean;
  install?: boolean;
};

function suggestNames(query: string, candidates: string[]): string[] {
  const scored = candidates.map((candidate) => {
    let prefix = 0;
    while (
      prefix < query.length &&
      prefix < candidate.length &&
      query[prefix] === candidate[prefix]
    ) {
      prefix += 1;
    }
    const contains = candidate.includes(query) || query.includes(candidate);
    return { candidate, score: prefix + (contains ? 10 : 0) };
  });

  return scored
    .filter((entry) => entry.score >= 2)
    .sort((a, b) => b.score - a.score)
    .slice(0, 3)
    .map((entry) => entry.candidate);
}

function shadcnTarget(uiDir: string, filePath: string): string {
  const segments = filePath.split('/');
  const uiIndex = segments.indexOf('ui');
  const relative = uiIndex >= 0 ? segments.slice(uiIndex + 1) : [segments[segments.length - 1]];
  return path.join(uiDir, ...relative);
}

export function createAddCommand(): Command {
  return new Command('add')
    .description('install a ComponentX component into your project')
    .argument('<component...>', 'component name(s) to install')
    .action(async (requested: string[], options: AddOptions) => {
      const info = await preflight();
      const client = createRegistryClient(resolveRegistryUrl(options.registry));
      const index = await fetchIndex(client);
      const writeOptions = {
        dryRun: Boolean(options.dryRun),
        yes: Boolean(options.yes),
      };

      const componentDir = path.join(info.componentsDir, 'component-x');
      const npmDependencies = new Set<string>();
      const visitedComponents = new Set<string>();
      const visitedShadcn = new Set<string>();
      const queue = [...new Set(requested)];
      const aliasValues: Record<string, string> = { ...info.aliases };

      if (!aliasValues.variants) {
        aliasValues.variants = `${info.aliases.lib ?? '@/lib'}/variants`;
      }

      let written = 0;

      while (queue.length > 0) {
        const name = queue.shift() as string;

        if (visitedComponents.has(name)) continue;
        visitedComponents.add(name);

        let item;
        try {
          item = await fetchComponent(client, name);
        } catch (error) {
          if (error instanceof RegistryError && error.status === 404 && requested.includes(name)) {
            const near = suggestNames(name, index.components);
            const hint = near.length > 0 ? ` Did you mean: ${near.join(', ')}?` : '';
            throw new CliError(`Unknown component "${name}".${hint}`);
          }
          throw error;
        }

        const content = renderTemplate(item.file.content, aliasValues);
        const target = path.join(componentDir, item.file.name);
        const result = await writeGeneratedFile(target, content, writeOptions);

        if (result !== 'kept') written += 1;

        if (content.includes(BROKEN_TOAST_IMPORT)) {
          logger.warn(
            `${item.name} still imports "${BROKEN_TOAST_IMPORT}", a file that only exists in the ComponentX repo. It will fail to compile in your project until that import is removed.`
          );
        }

        for (const internal of item.internalDependencies ?? []) {
          if (!visitedComponents.has(internal)) queue.push(internal);
        }
        for (const external of item.externalDependencies ?? []) {
          npmDependencies.add(external);
        }

        if ((item.registryDependencies ?? []).length > 0) {
          const items = await collectShadcnItems(
            info.style,
            item.registryDependencies ?? [],
            visitedShadcn
          );

          for (const primitive of items) {
            for (const dependency of primitive.dependencies ?? []) {
              npmDependencies.add(dependency);
            }
            for (const file of primitive.files ?? []) {
              if (typeof file.content !== 'string') {
                throw new CliError(`shadcn item "${primitive.name}" returned no file content`);
              }
              const result = await writePrimitiveFile(
                shadcnTarget(info.uiDir, file.path),
                file.content,
                writeOptions
              );
              if (result !== 'kept') written += 1;
            }
          }
        }
      }

      if (writeOptions.dryRun) {
        logger.info(`${written} file(s) would change`);
      } else {
        logger.success(`${written} file(s) written`);
      }

      const dependencies = [...npmDependencies]
        .filter((name) => !info.installedDeps.has(name))
        .sort();

      if (dependencies.length > 0) {
        if (writeOptions.dryRun) {
          logger.info(`packages required: ${dependencies.join(', ')}`);
        } else if (!options.install) {
          logger.info(
            `install them with: ${buildInstallCommand(info.packageManager, dependencies)}`
          );
        } else {
          logger.info(`installing ${dependencies.join(', ')}...`);
          await runInstall(info.packageManager, dependencies);
          logger.success('packages installed');
        }
      }
    });
}
