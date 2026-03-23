export const storefrontFlags = {
  seasonalDrop: false,
  subscription: false,
} as const;

export const showSeasonalDrop = storefrontFlags.seasonalDrop;
export const showSubscription = storefrontFlags.subscription;
