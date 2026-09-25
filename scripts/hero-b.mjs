// Converte a imagem do hero B (PNG salvo pelo dono) em AVIF/WebP 1600 e 800 em public/hero/.
// Uso: node scripts/hero-b.mjs "<caminho do png>" <nome>   ->  public/hero/hero-b-<nome>-{1600,800}.{avif,webp}
import sharp from 'sharp';
const [, , src, nome = 'hub'] = process.argv;
for (const w of [1600, 800]) {
  const img = sharp(src).resize({ width: w, height: Math.round((w * 9) / 16), fit: 'cover' });
  await img.clone().webp({ quality: 80 }).toFile(`public/hero/hero-b-${nome}-${w}.webp`);
  await img.clone().avif({ quality: 55 }).toFile(`public/hero/hero-b-${nome}-${w}.avif`);
}
