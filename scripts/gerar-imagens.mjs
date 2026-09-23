// Gera as versões AVIF/WebP das capturas aprovadas e a OG image (1200x630). Os PNG de public/capturas/ são os originais
// aprovados (folha §7) e não são alterados. Uso: node scripts/gerar-imagens.mjs
import sharp from 'sharp';
import { readdir } from 'node:fs/promises';
import { join } from 'node:path';

const dir = 'public/capturas';
for (const f of (await readdir(dir)).filter((n) => n.endsWith('.png'))) {
  const base = join(dir, f.replace(/\.png$/, ''));
  await sharp(join(dir, f)).webp({ quality: 88 }).toFile(`${base}.webp`);
  await sharp(join(dir, f)).avif({ quality: 60 }).toFile(`${base}.avif`);
}

const W = 1200, H = 630;
const tela = await sharp(join(dir, 'dcl-kanban-atraso_desfocado.png'))
  .extract({ left: 540, top: 195, width: 650, height: 358 })
  .resize({ width: 600 })
  .toBuffer();
const { height: th } = await sharp(tela).metadata();
const cantos = Buffer.from(`<svg width="600" height="${th}"><rect width="600" height="${th}" rx="16" ry="16"/></svg>`);
const telaRedonda = await sharp(tela).composite([{ input: cantos, blend: 'dest-in' }]).png().toBuffer();

const grade = Array.from({ length: 30 }, (_, i) => `<path d="M${i * 44} 0V${H}M0 ${i * 44}H${W}" />`).join('');
const fundo = Buffer.from(`<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
  <defs><radialGradient id="g" cx="78%" cy="55%" r="70%"><stop offset="0" stop-color="#0B3B4F"/><stop offset="1" stop-color="#060E1C"/></radialGradient></defs>
  <rect width="${W}" height="${H}" fill="url(#g)"/>
  <g stroke="#93C5FD" stroke-opacity="0.06" stroke-width="1" fill="none">${grade}</g>
  <g font-family="Segoe UI, Arial, sans-serif">
    <circle cx="86" cy="86" r="22" fill="none" stroke="#93C5FD" stroke-width="7" stroke-dasharray="105 34" transform="rotate(35 86 86)"/>
    <circle cx="122" cy="86" r="5" fill="#22D3EE"/>
    <text x="140" y="96" font-size="34" font-weight="700" fill="#EAF3FF">Clearix</text>
    <text x="64" y="230" font-size="46" font-weight="800" fill="#EAF3FF">De orçamento</text>
    <text x="64" y="288" font-size="46" font-weight="800" fill="#EAF3FF">a entrega,</text>
    <text x="64" y="346" font-size="46" font-weight="800" font-style="italic" fill="#22D3EE">sem perder ninguém</text>
    <text x="64" y="404" font-size="46" font-weight="800" font-style="italic" fill="#22D3EE">no caminho.</text>
    <text x="64" y="480" font-size="22" fill="#C2D4EA">Sistema para óticas, feito dentro de uma ótica.</text>
    <rect x="64" y="540" width="56" height="3" fill="#22D3EE"/>
    <text x="64" y="580" font-size="22" font-weight="700" fill="#EAF3FF">clearix.app.br</text>
    <text x="222" y="580" font-size="22" font-weight="600" fill="#7E97B8">· por DIGIAI</text>
  </g>
  <rect x="546" y="131" width="608" height="${th + 8}" rx="20" fill="none" stroke="#93C5FD" stroke-opacity="0.25" stroke-width="2"/>
</svg>`);

await sharp(fundo).composite([{ input: telaRedonda, left: 550, top: 135 }]).png({ compressionLevel: 9 }).toFile('public/og-clearix.png');
console.log('ok');
