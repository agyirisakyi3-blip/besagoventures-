const fs = require("fs");
const path = require("path");
const zlib = require("zlib");

function crc32(buf) {
  let crc = 0xFFFFFFFF;
  const t = new Int32Array(256);
  for (let i = 0; i < 256; i++) {
    let c = i;
    for (let j = 0; j < 8; j++) c = (c & 1) ? (0xEDB88320 ^ (c >>> 1)) : (c >>> 1);
    t[i] = c;
  }
  for (let i = 0; i < buf.length; i++) crc = t[(crc ^ buf[i]) & 0xFF] ^ (crc >>> 8);
  return (crc ^ 0xFFFFFFFF) >>> 0;
}

function makeChunk(type, data) {
  const t = Buffer.from(type);
  const len = Buffer.alloc(4); len.writeUInt32BE(data.length);
  const body = Buffer.concat([t, data]);
  const c = Buffer.alloc(4); c.writeUInt32BE(crc32(body));
  return Buffer.concat([len, body, c]);
}

function createIcon(size) {
  const sig = Buffer.from([137,80,78,71,13,10,26,10]);

  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(size, 0);
  ihdr.writeUInt32BE(size, 4);
  ihdr[8] = 8; ihdr[9] = 6; // 8-bit RGBA

  // Build raw RGBA rows
  const raw = [];
  const cx = size / 2, cy = size / 2;
  const rx = size * 0.38, ry = size * 0.38;
  const cornerR = size * 0.12;

  for (let y = 0; y < size; y++) {
    raw.push(0); // filter none
    for (let x = 0; x < size; x++) {
      const dx = x - cx, dy = y - cy;

      // Rounded rect check
      let inRect = false;
      const ax = Math.abs(dx) - (rx - cornerR);
      const ay = Math.abs(dy) - (ry - cornerR);
      if (ax <= 0 && Math.abs(dy) <= ry) inRect = true;
      else if (ay <= 0 && Math.abs(dx) <= rx) inRect = true;
      else if (ax > 0 && ay > 0 && ax*ax + ay*ay <= cornerR*cornerR) inRect = true;

      // "B" letter
      let inB = false;
      const nx = (dx + rx) / (2 * rx); // 0..1
      const ny = (dy + ry) / (2 * ry); // 0..1

      // Left vertical bar
      if (nx >= 0.08 && nx <= 0.22 && ny >= 0.1 && ny <= 0.9) inB = true;
      // Top horizontal bar
      if (ny >= 0.08 && ny <= 0.18 && nx >= 0.08 && nx <= 0.7) inB = true;
      // Middle horizontal bar
      if (ny >= 0.44 && ny <= 0.56 && nx >= 0.08 && nx <= 0.75) inB = true;
      // Bottom horizontal bar
      if (ny >= 0.82 && ny <= 0.92 && nx >= 0.08 && nx <= 0.7) inB = true;
      // Top right bump (ellipse)
      const te = Math.pow((nx - 0.55) / 0.22, 2) + Math.pow((ny - 0.28) / 0.2, 2);
      if (te <= 1 && nx >= 0.22 && ny >= 0.08 && ny <= 0.5) inB = true;
      // Bottom right bump (slightly larger ellipse)
      const be = Math.pow((nx - 0.52) / 0.25, 2) + Math.pow((ny - 0.68) / 0.2, 2);
      if (be <= 1 && nx >= 0.22 && ny >= 0.5 && ny <= 0.92) inB = true;

      if (inRect && inB) {
        // Gold #d4af37
        raw.push(212, 175, 55, 255);
      } else if (inRect) {
        // Green #065f46
        raw.push(6, 95, 70, 255);
      } else {
        // Transparent
        raw.push(0, 0, 0, 0);
      }
    }
  }

  const compressed = zlib.deflateSync(Buffer.from(raw));

  return Buffer.concat([
    sig,
    makeChunk("IHDR", ihdr),
    makeChunk("IDAT", compressed),
    makeChunk("IEND", Buffer.alloc(0)),
  ]);
}

const iconsDir = path.join(__dirname, "..", "public", "icons");
if (!fs.existsSync(iconsDir)) fs.mkdirSync(iconsDir, { recursive: true });

[
  { name: "apple-touch-icon.png", size: 180 },
  { name: "icon-192x192.png", size: 192 },
  { name: "icon-512x512.png", size: 512 },
].forEach(({ name, size }) => {
  fs.writeFileSync(path.join(iconsDir, name), createIcon(size));
  console.log(`Created ${name} (${size}x${size})`);
});

console.log("Done!");
