export type AssetCategory = 'brand-core' | 'theme-specific-drop' | 'ui-support' | 'transition-storytelling';
export type AssetPermanence = 'permanent' | 'campaign-specific';
export type AssetImplementation = 'component' | 'static-file' | 'mixed';

export interface AssetUsageRule {
  id: string;
  category: AssetCategory;
  implementation: AssetImplementation;
  assets: string[];
  whereToUse: string;
  whereNotToUse: string;
  permanence: AssetPermanence;
}

export interface ThemeFlavorAsset {
  id: string;
  illustration: string;
}

export interface ThemeAssetSet {
  id: string;
  isActive: boolean;
  featuredDrop: {
    mainIllustration: string;
    flavors: ThemeFlavorAsset[];
    motifs: {
      seed: string;
      sprig: string;
      spark: string;
    };
  };
}

export const assetUsagePlan: AssetUsageRule[] = [
  {
    id: 'brand-marks-and-box-illustrations',
    category: 'brand-core',
    implementation: 'component',
    assets: ['CookieMark', 'BakerHero', 'ProductIllustration:*'],
    whereToUse: 'Site-wide identity moments: navbar logo, hero identity, permanent product cards, footer brand presence.',
    whereNotToUse: 'Do not treat these as seasonal campaign decoration or duplicate them inside featured-drop flavor previews.',
    permanence: 'permanent',
  },
  {
    id: 'core-cookie-doodle-vocabulary',
    category: 'brand-core',
    implementation: 'component',
    assets: ['Heart1', 'Heart2', 'Chunk1', 'Chunk2', 'Chunk3', 'Crumb1', 'Crumb2', 'Crumb3', 'Crumb4'],
    whereToUse: 'Light site-wide atmosphere, product surfaces, gifting moments, footer details, and supporting decoration that reinforces the handmade cookie world.',
    whereNotToUse: 'Do not stack too many of these inside one viewport or use them as the main campaign illustration.',
    permanence: 'permanent',
  },
  {
    id: 'active-theme-featured-drop-assets',
    category: 'theme-specific-drop',
    implementation: 'static-file',
    assets: [
      'themes/autumn/featured-drop/autumn-main.svg',
      'themes/autumn/featured-drop/autumn-flavor-cinnamon.svg',
      'themes/autumn/featured-drop/autumn-flavor-leaf.svg',
      'themes/autumn/featured-drop/autumn-flavor-nut.svg',
      'themes/autumn/featured-drop/autumn-flavor-chocolate.svg',
    ],
    whereToUse: 'Featured drop surfaces only: seasonal banner, drop preview, limited campaign callouts, and future drop storytelling modules.',
    whereNotToUse: 'Do not use these in permanent core product sections, FAQ, order form, or global navigation outside the current active campaign frame.',
    permanence: 'campaign-specific',
  },
  {
    id: 'active-theme-supporting-motifs',
    category: 'theme-specific-drop',
    implementation: 'static-file',
    assets: [
      'themes/autumn/featured-drop/autumn-motif-seed.svg',
      'themes/autumn/featured-drop/autumn-motif-sprig.svg',
      'themes/autumn/featured-drop/autumn-motif-spark.svg',
    ],
    whereToUse: 'Small accents around active campaign blocks where the theme needs reinforcement without adding a second illustration.',
    whereNotToUse: 'Do not scatter these across the whole site or mix them with another strong campaign at the same time.',
    permanence: 'campaign-specific',
  },
  {
    id: 'cta-and-interface-support-assets',
    category: 'ui-support',
    implementation: 'component',
    assets: ['Arrow1', 'Arrow2', 'Arrow3', 'Scribble1', 'Scribble2', 'DividerDoodle'],
    whereToUse: 'CTA emphasis, hover/focus responses, accordion toggles, underlines, separators, and form/action reinforcement.',
    whereNotToUse: 'Do not use these as large background texture or as standalone hero artwork.',
    permanence: 'permanent',
  },
  {
    id: 'storytelling-flow-assets',
    category: 'transition-storytelling',
    implementation: 'component',
    assets: ['Trail1', 'Trail2', 'Trail3', 'Swirl1', 'Swirl2', 'Swirl3', 'Sparkle1', 'Sparkle2', 'Sparkle3'],
    whereToUse: 'Section entry moments, eye guidance, heading accents, banner atmosphere, and transitions between hero, drops, subscription, FAQ, and footer.',
    whereNotToUse: 'Do not place these directly over body copy or let them compete with primary conversion controls.',
    permanence: 'permanent',
  },
];

export const themeAssetRegistry: Record<string, ThemeAssetSet> = {
  autumn: {
    id: 'autumn',
    isActive: true,
    featuredDrop: {
      mainIllustration: '/assets/themes/autumn/featured-drop/autumn-main.svg',
      flavors: [
        { id: 'cinnamon', illustration: '/assets/themes/autumn/featured-drop/autumn-flavor-cinnamon.svg' },
        { id: 'leaf', illustration: '/assets/themes/autumn/featured-drop/autumn-flavor-leaf.svg' },
        { id: 'nut', illustration: '/assets/themes/autumn/featured-drop/autumn-flavor-nut.svg' },
        { id: 'chocolate', illustration: '/assets/themes/autumn/featured-drop/autumn-flavor-chocolate.svg' },
      ],
      motifs: {
        seed: '/assets/themes/autumn/featured-drop/autumn-motif-seed.svg',
        sprig: '/assets/themes/autumn/featured-drop/autumn-motif-sprig.svg',
        spark: '/assets/themes/autumn/featured-drop/autumn-motif-spark.svg',
      },
    },
  },
};

export const activeThemeAssets = Object.values(themeAssetRegistry).find((theme) => theme.isActive) ?? themeAssetRegistry.autumn;
