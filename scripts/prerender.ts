import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const clientDist = join(__dirname, '..', 'dist', 'client');
const serverDist = join(__dirname, '..', 'dist', 'server');

const routes = [
  '/',
  '/product',
  '/solutions',
  '/technology',
  '/security',
  '/privacy',
  '/terms',
  '/compliance',
  '/data-safety',
  '/about',
  '/contact',
];

async function prerender() {
  const template = readFileSync(join(clientDist, 'index.html'), 'utf-8');
  const { render } = await import(join(serverDist, 'entry-server.js'));

  for (const route of routes) {
    const appHtml = render(route);
    const html = template.replace('<!--ssr-outlet-->', appHtml);

    const routeDir = route === '/' ? clientDist : join(clientDist, route);
    if (!existsSync(routeDir)) {
      mkdirSync(routeDir, { recursive: true });
    }

    writeFileSync(join(routeDir, 'index.html'), html);
    console.log(`prerendered: ${route}`);
  }
}

prerender().catch(console.error);
