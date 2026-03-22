// eslint-disable-next-line @typescript-eslint/no-require-imports
const fs = require('fs');

const svg = fs.readFileSync('public/assets.svg', 'utf8');
const pathRegex = /<path fill="([^"]+)" d="([^"]+)"\/>/g;

let match;
const paths = [];

while ((match = pathRegex.exec(svg)) !== null) {
  paths.push({
    fill: match[1],
    d: match[2]
  });
}

function getBounds(d) {
  const coords = [...d.matchAll(/(-?\d+(\.\d+)?)/g)].map(m => parseFloat(m[0]));
  let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
  // This is a naive way to parse path numbers, but valid for most SVG paths which are just sequences of [cmd, x, y, ...]
  for (let i = 0; i < coords.length; i+=2) {
      if (typeof coords[i] === 'number' && typeof coords[i+1] === 'number') {
        minX = Math.min(minX, coords[i]);
        maxX = Math.max(maxX, coords[i]);
        minY = Math.min(minY, coords[i+1]);
        maxY = Math.max(maxY, coords[i+1]);
      }
  }
  return { minX, minY, maxX, maxY };
}

paths.forEach(p => {
  if (p.fill !== '#F4F4F4') { // Ignore background
    p.bounds = getBounds(p.d);
  }
});

// Group paths by overlap
const groups = [];
const threshold = 20;

paths.forEach(p => {
  if (!p.bounds) return;
  const b1 = p.bounds;
  if (!isFinite(b1.minX)) return;
  
  let foundGroup = null;
  for (const g of groups) {
    const gb = g.bounds;
    // Check if intersecting or near
    if (
      b1.minX <= gb.maxX + threshold &&
      b1.maxX >= gb.minX - threshold &&
      b1.minY <= gb.maxY + threshold &&
      b1.maxY >= gb.minY - threshold
    ) {
      foundGroup = g;
      break;
    }
  }
  
  if (foundGroup) {
    foundGroup.paths.push(p);
    foundGroup.bounds.minX = Math.min(foundGroup.bounds.minX, b1.minX);
    foundGroup.bounds.minY = Math.min(foundGroup.bounds.minY, b1.minY);
    foundGroup.bounds.maxX = Math.max(foundGroup.bounds.maxX, b1.maxX);
    foundGroup.bounds.maxY = Math.max(foundGroup.bounds.maxY, b1.maxY);
  } else {
    groups.push({
      paths: [p],
      bounds: { ...b1 }
    });
  }
});

console.log(`Found ${groups.length} distinct motifs.`);

const output = [];
groups.forEach((g, i) => {
  const b = g.bounds;
  const width = b.maxX - b.minX;
  const height = b.maxY - b.minY;
  // Normalize paths
  const normPaths = g.paths.map(p => {
    // Instead of complex svg parsing to normalize, we can just use viewBox!
    return `<path fill="${p.fill}" d="${p.d}" />`;
  });
  
  output.push(`export const Asset${i} = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="${b.minX} ${b.minY} ${width} ${height}" width="${width}" height="${height}" {...props}>
    ${normPaths.join('\n    ')}
  </svg>
);`);
});

fs.writeFileSync('src/components/icons/ExtractedAssets.tsx', `import React from 'react';\n\n${output.join('\n\n')}`);
console.log('Written to src/components/icons/ExtractedAssets.tsx');
