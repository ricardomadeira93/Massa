'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { BakerHero } from '@/components/icons/DoodleIcons';
import { Arrow2, Crumb1, Chunk2, Sparkle1, Sparkle3, Swirl2, Trail3 } from '@/components/decorative';
import { SeasonalBanner } from '@/components/sections/SeasonalBanner';
import { siteConfig } from '@/lib/data';
import { showSeasonalDrop } from '@/lib/feature-flags';
import { useI18n } from '@/lib/i18n';
import { drawIn, revealScale, revealUp, storyViewport } from '@/lib/storytelling';

export function Hero() {
  const { copy, t } = useI18n();
  const heroTopPadding = showSeasonalDrop ? 'pt-[172px] md:pt-32' : 'pt-28 md:pt-24';

  return (
    <section className={`relative flex min-h-[calc(100svh-3rem)] flex-col justify-center overflow-hidden bg-cream md:min-h-screen ${heroTopPadding}`}>
      {showSeasonalDrop ? (
        <div className="relative z-20 mx-auto w-full max-w-7xl px-5 pt-4 sm:px-6">
          <SeasonalBanner />
        </div>
      ) : null}

      <div className="relative z-10 mx-auto grid w-full max-w-7xl flex-1 grid-cols-1 items-center gap-10 px-5 py-10 sm:px-6 md:grid-cols-2 md:gap-16 md:py-14">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={revealUp(0, 0)}
          className="group/story-copy flex flex-col items-start gap-5 pt-2 md:pt-0"
        >
          <motion.div
            variants={revealScale(0.05)}
            className="inline-flex rotate-2 items-center border-[3px] border-ink bg-butter px-4 py-1.5 font-display text-sm font-medium tracking-wide text-orange shadow-[3px_3px_0_var(--ink)]"
          >
            {copy.hero.badge}
          </motion.div>

          <div className="relative">
            <motion.h1
              variants={revealUp(0.12, 16)}
              className="font-display font-bold leading-[1.1] text-ink"
              style={{ fontSize: 'clamp(2.75rem, 11vw, 5.5rem)' }}
            >
              {copy.hero.titlePrefix}{' '}
              <span className="relative inline-block text-orange">
                {copy.hero.titleHighlight}
                <motion.span
                  variants={drawIn(0.35)}
                  className="absolute -bottom-5 left-0 block w-[120%] -translate-x-[10%] md:-bottom-6"
                >
                  <Swirl2 className="h-8 w-full" strokeColor="var(--caramel)" strokeWidth={3} />
                </motion.span>
              </span>
              <br />
              {copy.hero.titleSuffix}
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
            className="max-w-md font-body text-base leading-relaxed text-ink-muted sm:text-lg"
          >
            {t(siteConfig.subTagline)}
          </motion.p>

          <motion.div variants={revealUp(0.28, 18)} className="mt-2 flex w-full flex-col gap-3 sm:mt-4 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
            <div className="group/hero-cta relative w-full sm:w-auto">
              <Button href="#pedido" variant="solid-dark" className="w-full px-8 text-base sm:w-auto sm:text-lg">
                {copy.hero.primaryCta} &rarr;
              </Button>
              <div className="pointer-events-none absolute -right-10 top-1/2 hidden -translate-y-1/2 opacity-0 transition-all duration-300 group-hover/hero-cta:translate-x-2 group-hover/hero-cta:opacity-100 group-focus-within/hero-cta:translate-x-2 group-focus-within/hero-cta:opacity-100 md:block">
                <Arrow2 className="h-10 w-10" strokeColor="var(--terracotta)" />
              </div>
            </div>

            <Button href="#produtos" variant="ghost" className="w-full justify-center px-5 text-base sm:w-auto">
              {copy.hero.secondaryCta}
            </Button>
          </motion.div>

          <motion.p variants={revealUp(0.34, 14)} className="mt-4 text-xs leading-relaxed text-ink-faint sm:mt-6">
            {t(siteConfig.deliveryNote)}
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={revealScale(0.12, 0.96)}
          className="group/hero-illustration relative order-2 flex h-[34vh] min-h-[260px] max-h-[360px] items-center justify-center md:h-[65vh] md:max-h-none"
        >
          <div className="z-10 transition-transform duration-500 group-hover/hero-illustration:-translate-y-2 group-hover/hero-illustration:rotate-1">
            <BakerHero size={240} className="h-[220px] w-[220px] text-ink sm:h-[250px] sm:w-[250px] md:h-[320px] md:w-[320px]" />
          </div>

          <div className="pointer-events-none absolute inset-0 -z-10">
            <motion.div
              variants={revealScale(0.28, 0.8)}
              initial="hidden"
              animate="visible"
              className="absolute left-[8%] top-[12%] opacity-80 transition-transform duration-300 group-hover/hero-illustration:-translate-y-1 group-hover/hero-illustration:rotate-6 md:-left-[20%]"
            >
              <Sparkle1 className="h-8 w-8 sm:h-10 sm:w-10 md:h-16 md:w-16" fillColor="var(--butter)" strokeColor="var(--orange)" />
            </motion.div>

            <motion.div
              variants={revealUp(0.34, 18)}
              initial="hidden"
              animate="visible"
              className="absolute bottom-[18%] right-[12%] opacity-90 transition-transform duration-300 group-hover/hero-illustration:-translate-y-2 group-hover/hero-illustration:-rotate-6 md:-right-[5%]"
            >
              <Chunk2 className="h-8 w-8 sm:h-10 sm:w-10 md:h-14 md:w-14" fillColor="var(--honey)" />
            </motion.div>

            <motion.div
              variants={revealScale(0.4, 0.85)}
              initial="hidden"
              animate="visible"
              className="absolute right-[8%] top-[18%] hidden opacity-75 transition-transform duration-300 group-hover/hero-illustration:translate-x-2 group-hover/hero-illustration:-translate-y-1 md:block"
            >
              <Arrow2 className="h-14 w-14 rotate-[20deg]" strokeColor="var(--caramel)" />
            </motion.div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={storyViewport}
        variants={drawIn(0.2)}
        className="pointer-events-none absolute bottom-20 left-1/2 z-10 hidden w-[240px] -translate-x-1/2 md:block"
      >
        <Trail3 className="h-8 w-full opacity-70" strokeColor="var(--orange)" strokeWidth={2.5} />
        <div className="absolute left-[18%] top-0 opacity-80">
          <Crumb1 className="h-4 w-4 -rotate-6" fillColor="var(--honey)" />
        </div>
        <div className="absolute right-[14%] top-3 opacity-70">
          <Crumb1 className="h-3.5 w-3.5 rotate-12" fillColor="var(--butter)" />
        </div>
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 z-20 w-full overflow-hidden leading-[0]">
        <svg
          className="relative block h-[60px] w-full md:h-[100px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118,130.42,108.6,188.7,89.54,233.19,75,278.43,64.21,321.39,56.44Z"
            fill="var(--butter)"
          />
        </svg>
      </div>
    </section>
  );
}
