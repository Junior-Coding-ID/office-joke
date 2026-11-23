import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const TEXT = 'The fastest Wi-Fi in the office is the rumour mill — zero latency, full coverage, never down.';

const outDir = (() => {
  const i = process.argv.indexOf('--output');
  if (i !== -1 && process.argv[i + 1]) return process.argv[i + 1];
  return process.env.MAKEFUN_OUTPUT_DIR ?? './output';
})();
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'entry.txt'), TEXT, 'utf8');
