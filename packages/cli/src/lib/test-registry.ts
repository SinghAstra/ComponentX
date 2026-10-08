import { createRegistryClient, fetchComponent, fetchIndex, fetchUtility } from './registry';

const client = createRegistryClient('https://componentx.vercel.app/registry/', 15_000);

const index = await fetchIndex(client);
console.log('index:', index.components.length, 'components');
console.log('first:', index.components[0]);

const dialog = await fetchComponent(client, 'dialog');
console.log(
  'dialog:',
  dialog.file.name,
  '| external:',
  dialog.externalDependencies.join(',') || 'none',
  '| registry:',
  dialog.registryDependencies.join(',') || 'none'
);

try {
  await fetchComponent(client, 'does-not-exist');
  console.log('FAIL: missing component did not throw');
} catch (error) {
  console.log('missing component ->', (error as Error).message);
}

try {
  const broken = createRegistryClient('https://componentx.vercel.app/not-a-registry', 5_000);
  await fetchIndex(broken);
  console.log('FAIL: bad base url did not throw');
} catch (error) {
  console.log('bad base url ->', (error as Error).message);
}

try {
  await fetchUtility(client, 'variants');
  console.log('utility: fetched');
} catch (error) {
  console.log('utility ->', (error as Error).message);
}
