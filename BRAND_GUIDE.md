# Massa Brand & Visual Identity Guide

This document outlines the core visual system, design tokens, and frontend implementation strategies for the Massa web application.

---

## 1. Core Aesthetic
**Concept:** "Handmade Cookie World"
**Keywords:** Chunky, Hand-drawn, Asymmetric, Playful, Premium, Warm, Cutout.
**Vibe:** Off-center and imperfect, but feeling highly polished and artisanal (not childish, generic, or sterile).

---

## 2. Color Palette
The brand relies on a warm, baked-goods-inspired color palette to evoke comfort and artisan craft.

| Token | Hex | Usage |
| :--- | :--- | :--- |
| `cream` | `#FFF8F0` | Main backgrounds, negative space. |
| `butter` | `#FFF1DF` | Secondary backgrounds, subtle contrasts, card fills. |
| `sand` | `#EAD2B8` | Soft borders, inactive states, faint shadows. |
| `honey` | `#F5C084` | Warm highlights. |
| `orange` | `#DF6B3A` | Primary brand color, primary CTAs, active highlights. |
| `terracotta` | `#E8723A` | Secondary accents, badges, aggressive highlights. |
| `caramel` | `#D07D54` | Cookie crumbs, dark shadows, rich decorative fills. |
| `brown` | `#95684B` | Wood/baked tones, tertiary UI elements. |
| `ink` | `#2A1B14` | Primary text, thick doodle borders, main UI outlines. |
| `ink-muted` | `#4A352D` | Secondary body text, descriptions, soft borders. |
| `ink-faint` | `#836A60` | Footnotes, placeholders, subtle UI rules. |

---

## 3. Typography
We pair a bold, expressive display font with a clean, readable sans-serif for body copy.

*   **Display Font:** `Caveat`
    *   **Usage:** Headings (`h1`, `h2`, `h3`), massive numbers, primary CTA text.
    *   **Styling:** Bold weights, tight line-height (`leading-none` or `leading-tight`), tracking adjustment where necessary.
*   **Body Font:** `DM Sans`
    *   **Usage:** Paragraphs, labels, structural information, forms.
    *   **Styling:** Regular/Light weights, relaxed line-height (`leading-relaxed`), tracking wide for small caps.

---

## 4. UI Primitives & Shapes
We avoid classic "startup" geometry (e.g., perfect circles, sharp squares) in favor of organic shapes.

*   **Borders:** Thick marker-style borders (`border-[3px] border-ink`).
*   **Corner Radii:** Irregular border radiuses applied via the `.rounded-drawn` utility class to simulate hand-drawn boxes.
*   **Shadows:** Hard, offset drop shadows without blur (e.g., `shadow-[4px_4px_0_var(--ink)]`) mimicking cutout paper or stickers.
*   **Fills:** Offset fills (translating the background color slightly outside the border) using distinct SVG layers to emphasize the "messy coloring book" feel.

---

## 5. Decorative Asset System
A bespoke, lightweight SVG system is scattered across the UI to breathe life into the negative space. All assets live in `<DecorativeAssets />` and `<DoodleIcons />`.

*   **Motifs:** Sparkles, asymmetry Hearts, Dotted Trails, Scribble Arrows, Swirls, Cookie Crumbs, Doodle Marks, Wavy Dividers.
*   **Application Rule:** Maximum of 1–3 accents per section to preserve readability and whitespace.
*   **Integration:** 
    *   **Hero:** Scattered pieces (sparkles, arrows) floating dynamically.
    *   **Cards:** Cookie crumbs and sparkles acting as tiny accents inside product boxes.
    *   **Connectors:** Dotted trails bridging the "How it Works" section.
    *   **Dividers:** Wavy doodle lines replacing sterile `<hr>` tags.

---

## 6. Motion & Animation Principles
Motion should feel alive but incredibly subtle, so it never distracts from the core content or purchasing flow.

*   **CSS Transitions:** Used for fast snappy UI interactions (buttons lifting, links fading).
*   **Framer Motion Keyframes:** Used for slow, continuous life loops.
    *   *Float:* Gentle `y: [-5, 5, -5]` over 4-7 seconds.
    *   *Wobble:* Extremely subtle rotation `rotate: [-3, 3, -3]` over long periods.
    *   *Blobbing:* Animating the string of `border-radius` to simulate a breathing organic shape (used on the Hero). 

---

## 7. Development Guidelines
*   **Icons:** Never use generic libraries (Lucide/Heroicons). Use exclusively hand-traced custom SVGs residing in `DoodleIcons.tsx`.
*   **Performance:** Animation logic must be strictly cordoned off behind `"use client"` boundaries to maintain Server Component hydration speed.
*   **Spacings:** Generous padding (`py-20`, `gap-16`) to respect the premium bakery market positioning while maintaining quirkiness.
