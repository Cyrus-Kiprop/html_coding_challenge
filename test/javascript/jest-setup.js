const fs = require('fs');
const path = require('path');
// eslint-disable-next-line no-unused-vars
const resolveCwd = require('resolve-cwd');

const shim = fs.readFileSync(
  path.resolve(
    'node_modules',
    'mutationobserver-shim',
    'dist',
    'mutationobserver.min.js',
  ),
  { encoding: 'utf-8' },
);
const script = window.document.createElement('script');
script.textContent = shim;

window.document.body.appendChild(script);
