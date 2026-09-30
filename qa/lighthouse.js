// Runs Lighthouse 3x mobile + 3x desktop against the local QA server.
// Records every run; reports median and worst per category.
const lighthouse = require('lighthouse').default || require('lighthouse');
const chromeLauncher = require('chrome-launcher');

const URL = 'http://localhost:8123/index.html';
const RUNS = 3;

async function runSet(name, opts, runs = RUNS) {
  const results = [];
  for (let i = 0; i < runs; i++) {
    const chrome = await chromeLauncher.launch({ chromeFlags: ['--headless', '--no-sandbox'] });
    const r = await lighthouse(URL, { logLevel: 'error', output: 'json', port: chrome.port, onlyCategories: ['performance', 'accessibility', 'best-practices', 'seo'], ...opts });
    await chrome.kill();
    const c = r.lhr.categories;
    results.push({
      performance: Math.round(c.performance.score * 100),
      accessibility: Math.round(c.accessibility.score * 100),
      bestPractices: Math.round(c['best-practices'].score * 100),
      seo: Math.round(c.seo.score * 100),
    });
  }
  const med = {}, min = {};
  for (const k of Object.keys(results[0])) {
    const vals = results.map(r => r[k]).sort((a, b) => a - b);
    med[k] = vals[Math.floor(vals.length / 2)];
    min[k] = Math.min(...vals);
  }
  console.log(`=== ${name} ===`);
  console.log('runs:', JSON.stringify(results));
  console.log('median:', JSON.stringify(med));
  console.log('worst:', JSON.stringify(min));
}

(async () => {
  await runSet('mobile', { formFactor: 'mobile', screenEmulation: { mobile: true, width: 360, height: 640, deviceScaleFactor: 2, disabled: false } });
  await runSet('desktop', { formFactor: 'desktop', screenEmulation: { mobile: false, width: 1350, height: 940, deviceScaleFactor: 1, disabled: false }, throttlingMethod: 'simulate', throttling: { rttMs: 40, throughputKbps: 10240, cpuSlowdownMultiplier: 1 } });
})();
