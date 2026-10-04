export type RegistryItem = {
  name: string;
  externalDependencies: string[];
  internalDependencies: string[];
  registryDependencies: string[];
  file: {
    name: string;
    content: string;
  };
};

export type RegistryIndex = {
  components: string[];
};

export type RegistryClient = {
  baseUrl: string;
  timeoutMs: number;
};

export function createRegistryClient(
  baseUrl: string,
  timeoutMs = 10_000,
): RegistryClient {
  return { baseUrl: baseUrl.replace(/\/+$/, ''), timeoutMs };
}

export function registryUrl(
  client: RegistryClient,
  ...segments: string[]
): string {
  return [client.baseUrl, ...segments].join('/');
}

async function fetchWithTimeout(
  client: RegistryClient,
  url: string,
): Promise<Response> {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), client.timeoutMs);

  try {
    return await fetch(url, { signal: controller.signal });
  } finally {
    clearTimeout(timeout);
  }
}

function isRegistryItem(data: unknown): data is RegistryItem {
  if (!data || typeof data !== 'object') return false;
  const obj = data as Record<string, unknown>;

  const file = obj.file;
  if (!file || typeof file !== 'object' || file === null) return false;
  const fileObj = file as Record<string, unknown>;

  return (
    typeof obj.name === 'string' &&
    Array.isArray(obj.externalDependencies) &&
    Array.isArray(obj.internalDependencies) &&
    Array.isArray(obj.registryDependencies) &&
    typeof fileObj.name === 'string' &&
    typeof fileObj.content === 'string'
  );
}

function isRegistryIndex(data: unknown): data is RegistryIndex {
  if (!data || typeof data !== 'object') return false;
  const obj = data as Record<string, unknown>;
  return Array.isArray(obj.components) && obj.components.every((c) => typeof c === 'string');
}

export async function fetchIndex(
  client: RegistryClient,
): Promise<RegistryIndex> {
  const url = registryUrl(client, 'components', 'index.json');
  const response = await fetchWithTimeout(client, url);

  if (!response.ok) {
    throw new Error(`Failed to fetch index: ${response.status} ${response.statusText} (${url})`);
  }

  const data = await response.json();

  if (!isRegistryIndex(data)) {
    throw new Error(`Invalid index format from ${url}`);
  }

  return data;
}

export async function fetchComponent(
  client: RegistryClient,
  name: string,
): Promise<RegistryItem> {
  const url = registryUrl(client, 'components', `${name}.json`);
  const response = await fetchWithTimeout(client, url);

  if (!response.ok) {
    if (response.status === 404) {
      throw new Error(`Component "${name}" not found in registry`);
    }
    throw new Error(`Failed to fetch component: ${response.status} ${response.statusText} (${url})`);
  }

  const data = await response.json();

  if (!isRegistryItem(data)) {
    throw new Error(`Invalid component format from ${url}`);
  }

  if (data.name !== name) {
    throw new Error(`Component name mismatch: expected "${name}", got "${data.name}"`);
  }

  return data;
}

export async function fetchUtility(
  client: RegistryClient,
  name: string,
): Promise<RegistryItem> {
  const url = registryUrl(client, 'utilities', `${name}.json`);
  const response = await fetchWithTimeout(client, url);

  if (!response.ok) {
    if (response.status === 404) {
      throw new Error(`Utility "${name}" not found in registry`);
    }
    throw new Error(`Failed to fetch utility: ${response.status} ${response.statusText} (${url})`);
  }

  const data = await response.json();

  if (!isRegistryItem(data)) {
    throw new Error(`Invalid utility format from ${url}`);
  }

  return data;
}