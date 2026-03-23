'use client';

import { motion } from 'framer-motion';
import { dropAndSpecialProducts } from '@/lib/data';
import { activeSeasonalOverlay } from '@/lib/seasonal';
import { Button } from '@/components/ui/Button';
import { Arrow2, Crumb1, Sparkle1, Swirl1, Trail2 } from '@/components/decorative';
import { useI18n } from '@/lib/i18n';
import { drawIn, revealScale, revealUp } from '@/lib/storytelling';

export function SeasonalBanner() {
  const overlay = activeSeasonalOverlay;
  const currentDrop = dropAndSpecialProducts.find((product) => product.category === 'drop') ?? dropAndSpecialProducts[0];
  const { t } = useI18n();

  if (!currentDrop) {
    return null;
  }

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={revealUp(0, 10)}
      style={overlay.style}
      className="seasonal-overlay seasonal-campaign-bg group/banner relative overflow-hidden rounded-drawn border-[3px] border-[var(--season-line)] shadow-[4px_4px_0_var(--season-shadow)]"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div variants={revealScale(0.08, 0.86)} className="absolute -right-2 top-2 hidden opacity-50 md:block lg:right-28 lg:top-3">
          <Swirl1 className="h-8 w-8 rotate-[8deg] md:h-10 md:w-10" strokeColor="var(--season-accent-deep)" strokeWidth={3} />
        </motion.div>
        <motion.div variants={drawIn(0.14)} className="absolute bottom-3 right-4 hidden opacity-55 xl:block">
          <Trail2 className="h-6 w-28 rotate-[6deg]" strokeColor="var(--season-accent)" strokeWidth={2.5} />
        </motion.div>
        <div className="animate-seasonal-drift absolute right-6 top-5 hidden opacity-55 lg:block">
          <Crumb1 className="h-3 w-3" fillColor="var(--season-accent-soft)" strokeColor="var(--season-accent-deep)" />
        </div>
        <div className="animate-seasonal-sway absolute bottom-5 right-24 hidden opacity-55 xl:block">
          <Sparkle1 className="h-7 w-7" fillColor="var(--season-accent-soft)" strokeColor="var(--season-accent-deep)" />
        </div>
      </div>

      <div className="relative z-10 flex flex-col gap-4 px-4 py-4 sm:px-6 md:flex-row md:items-center md:justify-between md:gap-8 md:px-8 md:py-6">
        <div className="max-w-3xl md:pr-6">
          <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--season-accent-deep)]">
            {t(overlay.bannerEyebrow)}
          </p>
          <div className="flex flex-col gap-2 md:flex-row md:flex-wrap md:items-center md:gap-3">
            <h2 className="font-display text-[1.65rem] font-bold tracking-tight text-ink md:text-[2rem]">
              {t(overlay.bannerTitle)}
            </h2>
            <span className="w-fit rounded-pill border-[2px] border-[var(--season-line)] bg-white/75 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--season-accent-deep)]">
              {currentDrop.badge ? t(currentDrop.badge) : currentDrop.sectionLabel ? t(currentDrop.sectionLabel) : null}
            </span>
          </div>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink-muted md:text-base">
            {t(overlay.bannerBody)}
          </p>
          <p className="mt-3 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--season-accent-deep)]">
            {t(currentDrop.name)} · {currentDrop.limitedNote ? t(currentDrop.limitedNote) : t(overlay.bannerTitle)}
          </p>
        </div>

        <div className="flex shrink-0 flex-col gap-3 sm:flex-row sm:items-center md:justify-end">
          <div className="group/banner-cta relative w-full sm:w-auto">
            <Button href="#drops-especiais" variant="solid-dark" className="w-full px-6 text-base sm:w-auto">
              {t(overlay.bannerCtaLabel)} &rarr;
            </Button>
            <div className="pointer-events-none absolute -right-7 top-1/2 hidden -translate-y-1/2 opacity-0 transition-all duration-300 group-hover/banner-cta:translate-x-2 group-hover/banner-cta:opacity-100 group-focus-within/banner-cta:translate-x-2 group-focus-within/banner-cta:opacity-100 md:block">
              <Arrow2 className="h-8 w-8" strokeColor="var(--season-accent-deep)" />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
