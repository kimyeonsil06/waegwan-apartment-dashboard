import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { extname, join } from 'node:path';

const root = join(import.meta.dirname, 'dist');
const types = { '.html':'text/html; charset=utf-8', '.css':'text/css; charset=utf-8', '.js':'text/javascript; charset=utf-8', '.svg':'image/svg+xml' };
createServer(async (req,res) => {
  try {
    let path = join(root, decodeURIComponent(new URL(req.url, 'http://localhost').pathname));
    if ((await stat(path)).isDirectory()) path = join(path, 'index.html');
    const body = await readFile(path);
    res.writeHead(200, {'content-type': types[extname(path)] || 'application/octet-stream'});
    res.end(body);
  } catch { res.writeHead(404); res.end('Not found'); }
}).listen(4173, '0.0.0.0', () => console.log('Local: http://127.0.0.1:4173'));
