import { CliError } from './errors';

export type AliasValues = Record<string, string>;

export function renderTemplate(content: string, values: AliasValues): string {
  let rendered = content;

  for (const [key, value] of Object.entries(values)) {
    rendered = rendered.replaceAll(`<%= it.aliases.${key} %>`, value);
  }

  const leftover = rendered.match(/<%[^%]*%>/g);

  if (leftover) {
    const unique = [...new Set(leftover)];
    throw new CliError(`unmapped placeholder in component content: ${unique.join(', ')}`);
  }

  return rendered.replace(/\r\n/g, '\n');
}
