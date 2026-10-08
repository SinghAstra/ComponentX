import { CliError } from './errors';

export type ShadcnFile = {
  path: string;
  type: string;
  content?: string;
};

export type ShadcnItem = {
  name: string;
  type?: string;
  dependencies?: string[];
  registryDependencies?: string[];
  files?: ShadcnFile[];
};

const SHADCN_STYLES_BASE = 'https://ui.shadcn.com/r/styles';
const TIMEOUT_MS = 10_000;

async function get(url: string): Promise<Response> {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), TIMEOUT_MS);

  try {
    return await fetch(url, { signal: controller.signal });
  } catch (error) {
    if (error instanceof Error && error.name === 'AbortError') {
      throw new CliError(`shadcn request timed out after ${TIMEOUT_MS}ms (${url})`);
    }
    const reason = error instanceof Error ? error.message : String(error);
    throw new CliError(`Cannot reach the shadcn registry: ${reason}`);
  } finally {
    clearTimeout(timeout);
  }
}

export async function fetchShadcnItem(style: string, name: string): Promise<ShadcnItem> {
  const url = `${SHADCN_STYLES_BASE}/${style}/${name}.json`;
  const response = await get(url);

  if (!response.ok) {
    if (response.status === 404) {
      throw new CliError(`shadcn has no "${name}" for style "${style}" (${url})`);
    }
    throw new CliError(
      `failed to fetch shadcn item "${name}": ${response.status} ${response.statusText} (${url})`
    );
  }

  const item = (await response.json()) as ShadcnItem;

  if (typeof item?.name !== 'string' || !Array.isArray(item.files)) {
    throw new CliError(`invalid shadcn item returned from ${url}`);
  }

  return item;
}

export async function collectShadcnItems(
  style: string,
  rootNames: string[],
  visited: Set<string>
): Promise<ShadcnItem[]> {
  const items: ShadcnItem[] = [];
  const queue = [...rootNames];

  while (queue.length > 0) {
    const name = queue.shift() as string;

    if (visited.has(name)) continue;
    visited.add(name);

    const item = await fetchShadcnItem(style, name);
    items.push(item);

    for (const nested of item.registryDependencies ?? []) {
      if (!visited.has(nested)) queue.push(nested);
    }
  }

  return items;
}
