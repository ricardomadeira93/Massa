'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { BakerHero } from '@/components/icons/DoodleIcons';
import { Sparkle3, Swirl2 } from '@/components/decorative';
import { SeasonalBanner } from '@/components/sections/SeasonalBanner';
import { siteConfig } from '@/lib/data';
import { showSeasonalDrop } from '@/lib/feature-flags';
import { useI18n } from '@/lib/i18n';
import { drawIn, revealScale, revealUp } from '@/lib/storytelling';

export function Hero() {
  const { copy, t } = useI18n();
  const heroTopPadding = showSeasonalDrop ? 'pt-28 md:pt-24' : 'pt-20 md:pt-12';
  const heroHighlights = Object.values(copy.hero.highlights);

  return (
    <section className={`relative overflow-hidden bg-cream ${heroTopPadding}`}>
      {showSeasonalDrop ? (
        <div className="relative z-20 mx-auto w-full max-w-7xl px-5 pt-4 sm:px-6">
          <SeasonalBanner />
        </div>
      ) : null}

      <div className="relative z-10 border-b border-sand/80 bg-cream-dark/20">
        <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-3 px-5 py-4 sm:px-6 sm:py-6 md:grid-cols-2 md:items-center md:gap-6 md:py-20 lg:px-8">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={revealUp(0, 0)}
          className="group/story-copy flex flex-col items-start gap-4 py-1 md:gap-5 md:py-5 md:pr-4"
        >
          <motion.div
            variants={revealScale(0.05)}
            className="inline-flex items-center rounded-pill border-2 border-sand bg-butter/80 px-3 py-1 text-xs font-display font-medium tracking-wide text-orange sm:px-4 sm:py-1.5 sm:text-sm"
          >
            {copy.hero.badge}
          </motion.div>

          <div className="relative">
            <motion.h1
              variants={revealUp(0.12, 16)}
              className="max-w-sm font-display text-5xl font-bold leading-none text-ink sm:max-w-xl sm:text-6xl lg:text-7xl"
            >
              <span className="block">{copy.hero.titlePrefix}</span>
              <span className="relative inline-block text-orange">
                {copy.hero.titleHighlight}
                <motion.span
                  variants={drawIn(0.35)}
                  className="absolute -bottom-3 left-0 block w-full translate-x-1 sm:-bottom-4"
                >
                  <Swirl2 className="h-8 w-full" strokeColor="var(--caramel)" strokeWidth={3} />
                </motion.span>
              </span>
              <span className="mt-2 block text-4xl leading-tight text-ink sm:text-5xl lg:text-6xl">
                {copy.hero.titleSuffix}
              </span>
            </motion.h1>

            <motion.div
              variants={revealScale(0.42, 0.82)}
              className="pointer-events-none absolute -right-6 top-0 hidden transition-transform duration-300 group-hover/story-copy:-translate-y-1 group-hover/story-copy:rotate-6 md:block"
            >
              <Sparkle3 className="h-7 w-7" fillColor="var(--butter)" strokeColor="var(--terracotta)" />
            </motion.div>
          </div>

          <motion.p
            variants={revealUp(0.2, 18)}
            className="max-w-xl font-body text-base leading-relaxed text-ink-muted sm:max-w-2xl sm:text-lg"
          >
            {t(siteConfig.subTagline)}
          </motion.p>

          <motion.div variants={revealUp(0.24, 18)} className="flex flex-wrap gap-x-3 gap-y-1.5 text-sm text-ink-muted">
            {heroHighlights.map((highlight) => (
              <span key={highlight} className="inline-flex items-center gap-2 leading-snug">
                <span className="h-1.5 w-1.5 rounded-full bg-orange/70" aria-hidden="true" />
                {highlight}
              </span>
            ))}
          </motion.div>

          <motion.div variants={revealUp(0.28, 18)} className="flex w-full flex-col gap-2 sm:mt-1 sm:flex-row sm:flex-wrap sm:items-center sm:gap-3">
            <Button href="#pedido" variant="solid-dark" className="w-full px-7 text-base sm:w-auto sm:text-lg">
              {copy.hero.primaryCta}
            </Button>

            <Button href="#produtos" variant="ghost" className="w-full justify-center px-5 text-base sm:w-auto">
              {copy.hero.secondaryCta}
            </Button>
          </motion.div>

          <motion.p variants={revealUp(0.34, 14)} className="max-w-xl text-sm leading-relaxed text-ink-muted">
            {copy.orderForm.helpers.product}
          </motion.p>

          <motion.div variants={revealUp(0.38, 12)} className="grid w-full gap-1.5 border-t border-sand/60 pt-3 text-sm text-ink-muted sm:flex sm:flex-wrap sm:items-center sm:gap-3 sm:border-t-0 sm:pt-0">
            <div className="inline-flex items-start gap-2 leading-relaxed">
              {t(siteConfig.deliveryNote)}
            </div>
            <div className="inline-flex items-start gap-2 leading-relaxed">
              {t(siteConfig.orderCutoffNote)}
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={revealScale(0.12, 0.96)}
          className="flex items-center justify-center pt-1 md:justify-self-center md:pt-0"
        >
          <div className="flex items-center justify-center px-2 py-1 sm:px-3">
            <BakerHero size={220} className="h-32 w-32 text-ink sm:h-44 sm:w-44 md:h-56 md:w-56 lg:h-64 lg:w-64" />
          </div>
        </motion.div>
        </div>
      </div>
    </section>
  );
}
