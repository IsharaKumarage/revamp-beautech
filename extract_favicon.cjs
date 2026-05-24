const fs = require('fs');
const content = fs.readFileSync('./src/imports/logo.svg', 'utf8');

const lines = content.split('\n');

// The icon paths are lines 10 to 38 (0-indexed)
const paths = lines.slice(10, 39).join('\n');
const defs = lines.slice(39, 162).join('\n');

const newSvg = `<svg width="200" height="200" viewBox="9 5 30 32" fill="none" xmlns="http://www.w3.org/2000/svg">
  ${paths}
  ${defs}
</svg>`;

fs.writeFileSync('./public/favicon.svg', newSvg);
console.log('Favicon extracted successfully!');
