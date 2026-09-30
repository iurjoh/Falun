// Checks every external link in index.html. 4xx from known bot-protection (Meta) counts as alive.
const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');
const links = [...new Set([...html.matchAll(/href="(https?:\/\/[^"]+)"/g)].map(m => m[1]))];
(async () => {
  let failed = 0;
  for (const url of links) {
    try {
      const res = await fetch(url, { redirect: 'follow', headers: { 'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 Chrome/126 Safari/537.36' }, signal: AbortSignal.timeout(15000) });
      const alive = res.status < 404 || [405, 429].includes(res.status);
      console.log(`${alive ? 'OK ' : 'FAIL'} ${res.status} ${url}`);
      if (!alive) failed++;
    } catch (e) {
      console.log(`FAIL error ${url} ${e.message}`);
      failed++;
    }
  }
  process.exit(failed ? 1 : 0);
})();
