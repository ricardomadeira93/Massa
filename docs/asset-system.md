# Asset System

## Categories

### 1. Brand-Core Assets

These are permanent Massa identity assets.

Assets:
- `CookieMark`
- `BakerHero`
- `ProductIllustration:*`
- `Heart1`, `Heart2`
- `Chunk1`, `Chunk2`, `Chunk3`
- `Crumb1`, `Crumb2`, `Crumb3`, `Crumb4`

Use:
- Navbar, hero identity, permanent product cards, gifting states, footer details, and light site-wide atmosphere.

Do not use:
- As campaign-only art direction.
- As replacements for featured seasonal drop illustrations.

Permanence:
- Permanent.

### 2. Theme-Specific Drop Assets

These are campaign assets for the single active theme.

Assets:
- `public/assets/themes/autumn/featured-drop/autumn-main.svg`
- `public/assets/themes/autumn/featured-drop/autumn-flavor-cinnamon.svg`
- `public/assets/themes/autumn/featured-drop/autumn-flavor-leaf.svg`
- `public/assets/themes/autumn/featured-drop/autumn-flavor-nut.svg`
- `public/assets/themes/autumn/featured-drop/autumn-flavor-chocolate.svg`
- `public/assets/themes/autumn/featured-drop/autumn-motif-seed.svg`
- `public/assets/themes/autumn/featured-drop/autumn-motif-sprig.svg`
- `public/assets/themes/autumn/featured-drop/autumn-motif-spark.svg`

Use:
- Featured drop sections, seasonal banners, campaign callouts, and themed drop previews.

Do not use:
- Permanent menu sections, FAQ, footer, order form, or non-campaign navigation.

Permanence:
- Campaign-specific.

### 3. UI-Support Assets

These assets clarify actions and states.

Assets:
- `Arrow1`, `Arrow2`, `Arrow3`
- `Scribble1`, `Scribble2`
- `DividerDoodle`

Use:
- CTA emphasis, hover/focus reinforcement, accordion affordances, separators, and action-linked cues.

Do not use:
- As large decorative wallpaper or campaign hero art.

Permanence:
- Permanent.

### 4. Transition / Storytelling Assets

These assets guide the eye and connect sections.

Assets:
- `Trail1`, `Trail2`, `Trail3`
- `Swirl1`, `Swirl2`, `Swirl3`
- `Sparkle1`, `Sparkle2`, `Sparkle3`

Use:
- Section transitions, heading accents, atmospheric storytelling, and visual continuity.

Do not use:
- Directly over body copy or in ways that compete with primary CTAs.

Permanence:
- Permanent, but theme tinting can change.

## Folder Structure

Static theme assets:
- `public/assets/themes/<theme>/featured-drop/`

Source sheets:
- `public/assets/source-sheets/`

Code registry:
- `src/lib/asset-system.ts`

Guideline:
- Only one strong active theme should be marked active in the registry at a time.
- Core brand assets remain available globally.
- Theme assets should stay scoped to campaign surfaces.
