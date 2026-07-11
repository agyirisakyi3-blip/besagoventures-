const fs = require("fs");
const path = require("path");

const sizes = [72, 96, 128, 144, 152, 192, 384, 512];
const iconsDir = path.join(__dirname, "..", "public", "icons");

if (!fs.existsSync(iconsDir)) {
  fs.mkdirSync(iconsDir, { recursive: true });
}

const svg = (size) => `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#047857"/>
      <stop offset="100%" style="stop-color:#065f46"/>
    </linearGradient>
  </defs>
  <rect width="${size}" height="${size}" rx="${Math.round(size * 0.18)}" fill="url(#bg)"/>
  <text x="50%" y="53%" dominant-baseline="middle" text-anchor="middle" fill="#d4af37" font-family="Georgia, serif" font-weight="bold" font-size="${Math.round(size * 0.5)}" letter-spacing="${Math.round(size * 0.02)}">B</text>
</svg>`;

sizes.forEach((size) => {
  const filePath = path.join(iconsDir, `icon-${size}x${size}.svg`);
  fs.writeFileSync(filePath, svg(size));
  console.log(`Created icon-${size}x${size}.svg`);
});

// Also create apple-touch-icon (180x180)
const appleSvg = svg(180);
fs.writeFileSync(path.join(iconsDir, "apple-touch-icon.svg"), appleSvg);
console.log("Created apple-touch-icon.svg");

console.log("\nAll PWA icons generated!");
