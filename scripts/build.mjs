import esbuild from 'esbuild';
import { mkdir } from 'node:fs/promises';

await mkdir('build', { recursive: true });

await esbuild.build({
  entryPoints: ['src/index.jsx'],
  bundle: true,
  outfile: 'build/app.js',
  format: 'iife',
  target: ['es2018'],
  jsxFactory: 'React.createElement',
  jsxFragment: 'React.Fragment',
  minify: true
});
