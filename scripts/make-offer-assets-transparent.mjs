import fs from "node:fs/promises";
import path from "node:path";

import sharp from "sharp";

const assetDir = path.resolve("public/images/novak/temerinska-143");

const assets = [
  ["../../../../Prodaja - Temerinska 143 za SAJT/Stanovi sa razdvojenim elementima/ST 1/St 1 (3).png", "stan-2-3d-transparent-v5.webp", "pattern-3d"],
  ["stan-2-floor.webp", "stan-2-floor-transparent-v5.webp", "alpha"],
  ["stan-2-position.webp", "stan-2-position-transparent-v5.webp", "checker-plan"],
  ["../../../../Prodaja - Temerinska 143 za SAJT/Stanovi sa razdvojenim elementima/ST 2/St 2 (4).png", "stan-6-3d-transparent-v5.webp", "pattern-3d"],
  ["stan-6-floor.webp", "stan-6-floor-transparent-v5.webp", "checker-plan"],
  ["stan-6-position.webp", "stan-6-position-transparent-v5.webp", "checker-plan"],
  ["../../../../Prodaja - Temerinska 143 za SAJT/Stanovi sa razdvojenim elementima/ST 3/ST 3 (2).png", "stan-8-3d-transparent-v5.webp", "pattern-3d"],
  ["stan-8-floor.webp", "stan-8-floor-transparent-v5.webp", "checker-plan"],
  ["stan-8-position.webp", "stan-8-position-transparent-v5.webp", "checker-plan"],
  ["stan-18-3d.webp", "stan-18-3d-transparent-v5.webp", "alpha"],
  ["stan-18-floor.webp", "stan-18-floor-transparent-v5.webp", "checker-plan"],
  ["stan-18-position.webp", "stan-18-position-transparent-v5.webp", "checker-plan"],
  ["stan-19-3d-v2.webp", "stan-19-3d-transparent-v5.webp", "alpha"],
  ["stan-19-floor.webp", "stan-19-floor-transparent-v5.webp", "solid-plan"],
  ["stan-19-position.webp", "stan-19-position-transparent-v5.webp", "solid-plan"],
  ["stan-20-3d-v2.webp", "stan-20-3d-transparent-v5.webp", "alpha"],
  ["stan-20-floor.webp", "stan-20-floor-transparent-v5.webp", "solid-plan"],
  ["stan-20-position.webp", "stan-20-position-transparent-v5.webp", "solid-plan"],
  ["stan-21-3d.webp", "stan-21-3d-transparent-v5.webp", "alpha"],
  ["stan-21-floor.webp", "stan-21-floor-transparent-v5.webp", "checker-plan"],
  ["stan-21-position.webp", "stan-21-position-transparent-v5.webp", "checker-plan"],
];

function median(values) {
  const sorted = values.toSorted((a, b) => a - b);
  return sorted[Math.floor(sorted.length / 2)];
}

function borderColor(data, width, height, channels) {
  const samples = [[], [], []];
  const thickness = Math.max(4, Math.round(Math.min(width, height) * 0.015));

  for (let y = 0; y < height; y += 1) {
    for (let x = 0; x < width; x += 1) {
      if (x >= thickness && y >= thickness && x < width - thickness && y < height - thickness) continue;
      const offset = (y * width + x) * channels;
      const r = data[offset];
      const g = data[offset + 1];
      const b = data[offset + 2];
      if (Math.max(r, g, b) - Math.min(r, g, b) < 45 && (r + g + b) / 3 > 150) {
        samples[0].push(r);
        samples[1].push(g);
        samples[2].push(b);
      }
    }
  }

  return samples.map(median);
}

function checkerTones(data, width, height) {
  const histogram = new Uint32Array(256);
  const thickness = Math.max(8, Math.round(Math.min(width, height) * 0.04));

  for (let y = 0; y < height; y += 1) {
    for (let x = 0; x < width; x += 1) {
      if (x >= thickness && y >= thickness && x < width - thickness && y < height - thickness) continue;
      const offset = (y * width + x) * 4;
      const r = data[offset];
      const g = data[offset + 1];
      const b = data[offset + 2];
      if (Math.max(r, g, b) - Math.min(r, g, b) <= 4) {
        histogram[Math.round((r + g + b) / 3)] += 1;
      }
    }
  }

  const light = histogram.findLastIndex((count, tone) => tone >= 248 && count > 0);
  let dark = 235;
  let darkCount = 0;
  for (let tone = 225; tone <= 249; tone += 1) {
    if (histogram[tone] > darkCount) {
      dark = tone;
      darkCount = histogram[tone];
    }
  }
  return [light, dark];
}

function makeCheckerPlanTransparent(data, pixelCount) {
  for (let pixel = 0; pixel < pixelCount; pixel += 1) {
    const offset = pixel * 4;
    const r = data[offset];
    const g = data[offset + 1];
    const b = data[offset + 2];
    const min = Math.min(r, g, b);
    const spread = Math.max(r, g, b) - min;

    if (min > 220 && spread < 15) data[offset + 3] = 0;
    else if (min > 205 && spread < 18) data[offset + 3] = Math.round(((220 - min) / 15) * 255);
  }
}

function boxMorph(mask, width, height, radius, dilate) {
  const stride = width + 1;
  const integral = new Uint32Array((width + 1) * (height + 1));
  for (let y = 0; y < height; y += 1) {
    let row = 0;
    for (let x = 0; x < width; x += 1) {
      row += mask[y * width + x];
      integral[(y + 1) * stride + x + 1] = integral[y * stride + x + 1] + row;
    }
  }
  const output = new Uint8Array(mask.length);
  for (let y = 0; y < height; y += 1) {
    const top = Math.max(0, y - radius);
    const bottom = Math.min(height - 1, y + radius);
    for (let x = 0; x < width; x += 1) {
      const left = Math.max(0, x - radius);
      const right = Math.min(width - 1, x + radius);
      const sum = integral[(bottom + 1) * stride + right + 1] - integral[top * stride + right + 1]
        - integral[(bottom + 1) * stride + left] + integral[top * stride + left];
      const area = (right - left + 1) * (bottom - top + 1);
      output[y * width + x] = dilate ? Number(sum > 0) : Number(sum === area);
    }
  }
  return output;
}

function removeSmallComponents(mask, width, height, minimumSize) {
  const visited = new Uint8Array(mask.length);
  const queue = new Uint32Array(mask.length);
  for (let start = 0; start < mask.length; start += 1) {
    if (!mask[start] || visited[start]) continue;
    let head = 0;
    let tail = 0;
    visited[start] = 1;
    queue[tail++] = start;
    while (head < tail) {
      const pixel = queue[head++];
      const x = pixel % width;
      const y = Math.floor(pixel / width);
      const add = (next) => {
        if (!mask[next] || visited[next]) return;
        visited[next] = 1;
        queue[tail++] = next;
      };
      if (x > 0) add(pixel - 1);
      if (x + 1 < width) add(pixel + 1);
      if (y > 0) add(pixel - width);
      if (y + 1 < height) add(pixel + width);
    }
    if (tail < minimumSize) {
      for (let index = 0; index < tail; index += 1) mask[queue[index]] = 0;
    }
  }
  return mask;
}

function fillSmallHoles(mask, width, height, maximumSize) {
  const visited = new Uint8Array(mask.length);
  const queue = new Uint32Array(mask.length);
  for (let start = 0; start < mask.length; start += 1) {
    if (mask[start] || visited[start]) continue;
    let head = 0;
    let tail = 0;
    let touchesEdge = false;
    visited[start] = 1;
    queue[tail++] = start;
    while (head < tail) {
      const pixel = queue[head++];
      const x = pixel % width;
      const y = Math.floor(pixel / width);
      if (x === 0 || y === 0 || x === width - 1 || y === height - 1) touchesEdge = true;
      const add = (next) => {
        if (mask[next] || visited[next]) return;
        visited[next] = 1;
        queue[tail++] = next;
      };
      if (x > 0) add(pixel - 1);
      if (x + 1 < width) add(pixel + 1);
      if (y > 0) add(pixel - width);
      if (y + 1 < height) add(pixel + width);
    }
    if (!touchesEdge && tail <= maximumSize) {
      for (let index = 0; index < tail; index += 1) mask[queue[index]] = 1;
    }
  }
  return mask;
}

function makePattern3dTransparent(data, width, height) {
  const [light, dark] = checkerTones(data, width, height);
  const midpoint = (light + dark) / 2;
  const xDark = new Uint8Array(width);
  const yDark = new Uint8Array(height);
  for (let x = 0; x < width; x += 1) {
    let sum = 0;
    for (let y = 0; y < 5; y += 1) {
      const offset = (y * width + x) * 4;
      sum += (data[offset] + data[offset + 1] + data[offset + 2]) / 3;
    }
    xDark[x] = Number(sum / 5 < midpoint);
  }
  for (let y = 0; y < height; y += 1) {
    let sum = 0;
    for (let x = 0; x < 5; x += 1) {
      const offset = (y * width + x) * 4;
      sum += (data[offset] + data[offset + 1] + data[offset + 2]) / 3;
    }
    yDark[y] = Number(sum / 5 < midpoint);
  }
  const baseDark = xDark[0];
  const foreground = new Uint8Array(width * height);
  for (let y = 0; y < height; y += 1) {
    for (let x = 0; x < width; x += 1) {
      const pixel = y * width + x;
      const offset = pixel * 4;
      const r = data[offset];
      const g = data[offset + 1];
      const b = data[offset + 2];
      const expectedDark = Boolean(xDark[x] ^ yDark[y] ^ baseDark);
      const expected = expectedDark ? dark : light;
      const luminance = (r + g + b) / 3;
      const spread = Math.max(r, g, b) - Math.min(r, g, b);
      foreground[pixel] = Number(Math.abs(luminance - expected) > 9 || spread > 9);
    }
  }

  removeSmallComponents(foreground, width, height, Math.round(width * height * 0.002));
  const radius = Math.max(8, Math.round(Math.min(width, height) * 0.009));
  const silhouette = boxMorph(boxMorph(foreground, width, height, radius, true), width, height, radius, false);
  fillSmallHoles(silhouette, width, height, Math.round(width * height * 0.006));
  const inner = boxMorph(silhouette, width, height, 1, false);
  for (let pixel = 0; pixel < silhouette.length; pixel += 1) {
    data[pixel * 4 + 3] = inner[pixel] ? 255 : silhouette[pixel] ? 150 : 0;
  }
}

function makeSolidPlanTransparent(data, width, height) {
  const [baseR, baseG, baseB] = borderColor(data, width, height, 4);

  for (let pixel = 0; pixel < width * height; pixel += 1) {
    const offset = pixel * 4;
    const dr = data[offset] - baseR;
    const dg = data[offset + 1] - baseG;
    const db = data[offset + 2] - baseB;
    const distance = Math.sqrt(dr * dr + dg * dg + db * db);

    if (distance < 16) data[offset + 3] = 0;
    else if (distance < 34) data[offset + 3] = Math.round(((distance - 16) / 18) * 255);
  }
}

await Promise.all(
  assets.map(async ([sourceName, outputName, mode]) => {
    const sourcePath = path.join(assetDir, sourceName);
    const outputPath = path.join(assetDir, outputName);
    const { data, info } = await sharp(sourcePath)
      .ensureAlpha()
      .raw()
      .toBuffer({ resolveWithObject: true });

    if (mode === "checker-plan") makeCheckerPlanTransparent(data, info.width * info.height);
    if (mode === "pattern-3d") makePattern3dTransparent(data, info.width, info.height);
    if (mode === "solid-plan") makeSolidPlanTransparent(data, info.width, info.height);

    await sharp(data, {
      raw: {
        width: info.width,
        height: info.height,
        channels: 4,
      },
    })
      .webp({ lossless: true, alphaQuality: 100 })
      .toFile(outputPath);
  }),
);

await fs.writeFile(
  path.join(assetDir, "transparent-assets.json"),
  `${JSON.stringify(assets.map(([source, output, mode]) => ({ source, output, mode })), null, 2)}\n`,
);

console.log(`Created ${assets.length} transparent assets.`);
