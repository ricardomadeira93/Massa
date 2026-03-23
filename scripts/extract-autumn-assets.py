#!/usr/bin/env python3
from __future__ import annotations

import copy
import json
import re
import xml.etree.ElementTree as ET
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / 'public' / 'assets' / 'source-sheets' / 'assets-autumn.svg'
OUTPUT_DIR = ROOT / 'public' / 'assets' / 'themes' / 'autumn' / 'featured-drop'
MANIFEST = OUTPUT_DIR / 'manifest.json'

SVG_NS = 'http://www.w3.org/2000/svg'
ET.register_namespace('', SVG_NS)

ASSETS = {
    'autumn-main': {
        'label': 'Main default drop illustration',
        'source': 'assets-autumn.svg',
        'viewBox': [430, 175, 360, 350],
        'description': 'Primary autumn campaign illustration extracted from the top-center cluster.',
    },
    'autumn-flavor-cinnamon': {
        'label': 'Flavor preview illustration - cinnamon',
        'source': 'assets-autumn.svg',
        'viewBox': [550, 610, 170, 190],
        'description': 'Warm spice-shaped autumn illustration from the lower-middle-right cluster.',
    },
    'autumn-flavor-chocolate': {
        'label': 'Flavor preview illustration - chocolate',
        'source': 'assets-autumn.svg',
        'viewBox': [315, 600, 190, 210],
        'description': 'Rounded chocolate-style autumn illustration from the lower-middle-left cluster.',
    },
    'autumn-flavor-leaf': {
        'label': 'Flavor preview illustration - leaf',
        'source': 'assets-autumn.svg',
        'viewBox': [65, 635, 190, 170],
        'description': 'Leaf-like autumn illustration from the lower-left cluster.',
    },
    'autumn-flavor-nut': {
        'label': 'Flavor preview illustration - nut',
        'source': 'assets-autumn.svg',
        'viewBox': [790, 635, 180, 160],
        'description': 'Nut-like autumn illustration from the lower-right cluster.',
    },
    'autumn-motif-seed': {
        'label': 'Supporting motif - seed',
        'source': 'assets-autumn.svg',
        'viewBox': [450, 80, 150, 150],
        'description': 'Small reusable seed-like motif from the upper-middle cluster.',
    },
    'autumn-motif-sprig': {
        'label': 'Supporting motif - sprig',
        'source': 'assets-autumn.svg',
        'viewBox': [360, 150, 120, 110],
        'description': 'Small reusable sprig motif from the upper-left cluster.',
    },
    'autumn-motif-spark': {
        'label': 'Supporting motif - spark',
        'source': 'assets-autumn.svg',
        'viewBox': [660, 110, 150, 100],
        'description': 'Small reusable spark/callout motif from the upper-right cluster.',
    },
}

NUMBER_RE = re.compile(r'[-+]?(?:\d*\.\d+|\d+)')


def get_bbox(path_node: ET.Element) -> tuple[float, float, float, float] | None:
    numbers = [float(value) for value in NUMBER_RE.findall(path_node.attrib.get('d', ''))]
    if len(numbers) < 4:
        return None

    xs = numbers[0::2]
    ys = numbers[1::2]
    if not xs or not ys:
        return None
    return min(xs), min(ys), max(xs), max(ys)


def should_include(bbox: tuple[float, float, float, float], view_box: list[int]) -> bool:
    x, y, width, height = view_box
    x2 = x + width
    y2 = y + height
    bx1, by1, bx2, by2 = bbox

    if bx2 < x or x2 < bx1 or by2 < y or y2 < by1:
        return False

    overlap_x = max(0.0, min(bx2, x2) - max(bx1, x))
    overlap_y = max(0.0, min(by2, y2) - max(by1, y))
    overlap_area = overlap_x * overlap_y
    bbox_area = max((bx2 - bx1) * (by2 - by1), 1.0)
    cx = (bx1 + bx2) / 2
    cy = (by1 + by2) / 2

    return overlap_area / bbox_area > 0.15 or (x <= cx <= x2 and y <= cy <= y2)


def main() -> None:
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    tree = ET.parse(SOURCE)
    root = tree.getroot()
    all_paths = []

    for index, node in enumerate(root):
        if not node.tag.endswith('path'):
            continue
        if index == 0:
            continue
        bbox = get_bbox(node)
        if bbox is None:
            continue
        all_paths.append((index, node, bbox))

    manifest = {}
    for name, config in ASSETS.items():
        x, y, width, height = config['viewBox']
        svg = ET.Element(
            f'{{{SVG_NS}}}svg',
            {
                'width': str(width),
                'height': str(height),
                'viewBox': f'{x} {y} {width} {height}',
                'fill': 'none',
            },
        )

        included = 0
        for _, node, bbox in all_paths:
            if should_include(bbox, config['viewBox']):
                svg.append(copy.deepcopy(node))
                included += 1

        output_path = OUTPUT_DIR / f'{name}.svg'
        ET.ElementTree(svg).write(output_path, encoding='utf-8', xml_declaration=True)
        manifest[name] = {
            'label': config['label'],
            'source': config['source'],
            'viewBox': config['viewBox'],
            'pathCount': included,
            'file': str(output_path.relative_to(ROOT)),
            'description': config['description'],
        }

    MANIFEST.write_text(json.dumps(manifest, indent=2) + '\n', encoding='utf-8')


if __name__ == '__main__':
    main()
