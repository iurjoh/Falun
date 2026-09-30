const lighthouse = require('lighthouse').default || require('lighthouse');
const chromeLauncher = require('chrome-launcher');
(async () => {
  const chrome = await chromeLauncher.launch({ chromeFlags: ['--headless', '--no-sandbox'] });
  const r = await lighthouse('https://falun-revival-preview.pages.dev/', { logLevel: 'error', output: 'json', port: chrome.port, onlyCategories: ['seo'] });
  await chrome.kill();
  const audits = r.lhr.audits;
  for (const [k, a] of Object.entries(audits)) {
    if (a.score !== null && a.score < 1) console.log(k, '=>', a.score, '|', a.title, '|', (a.description||'').slice(0,120));
  }
})();
