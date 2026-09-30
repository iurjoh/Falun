// Inlines assets/css/style.css into index.html and recomputes the CSP style hash.
// Run after any CSS edit: `node qa/inline-css.js`
const fs = require('fs');
const crypto = require('crypto');
let css = fs.readFileSync('assets/css/style.css', 'utf8');
// inline context: URLs resolve against the document, not assets/css/
css = css.replace(/\.\.\/images\//g, 'assets/images/').replace(/\.\.\/fonts\//g, 'assets/fonts/');
const styleBlock = '\n' + css + '\n    ';
let html = fs.readFileSync('index.html', 'utf8');
html = html.replace(/<style>[\s\S]*?<\/style>/, '<style>' + styleBlock + '</style>');
const hash = crypto.createHash('sha256').update(styleBlock).digest('base64');
html = html.replace(/style-src 'self'[^;]*/, `style-src 'self' 'sha256-${hash}'`);
fs.writeFileSync('index.html', html);
console.log('inlined, CSP style hash sha256-' + hash.slice(0, 12) + '...');
