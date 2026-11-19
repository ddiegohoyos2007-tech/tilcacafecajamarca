// Inyecta el HTML renderizado en dist/index.html para SEO, LCP y lectura sin JS.
import { readFile, writeFile, rm } from 'node:fs/promises';
import { pathToFileURL } from 'node:url';
import { resolve } from 'node:path';

const dist = resolve('dist');
const { render } = await import(pathToFileURL(resolve('dist-ssr/entry-server.js')).href);
const html = await readFile(resolve(dist, 'index.html'), 'utf8');
if (!html.includes('<!--app-->')) throw new Error('Falta el marcador <!--app--> en dist/index.html');
await writeFile(resolve(dist, 'index.html'), html.replace('<!--app-->', render()));
await rm(resolve('dist-ssr'), { recursive: true, force: true });
console.log('prerender: dist/index.html listo');
