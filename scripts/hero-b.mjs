// Converte a imagem escolhida do hero B (PNG salvo pelo dono) em AVIF/WebP 1600 e 800 em public/hero/.
// Uso: node scripts/hero-b.mjs "<caminho do png>"
import sharp from 'sharp';
const [, , src] = process.argv;
for (const w of [1600, 800]) {
  const img = sharp(src).resize({ width: w, height: Math.round((w * 9) / 16), fit: 'cover' });
  await img.clone().webp({ quality: 80 }).toFile(`public/hero/hero-b-${w}.webp`);
  await img.clone().avif({ quality: 55 }).toFile(`public/hero/hero-b-${w}.avif`);
}
