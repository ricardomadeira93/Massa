'use client';

import { motion } from 'framer-motion';
import { dropAndSpecialProducts } from '@/lib/data';
import { activeSeasonalOverlay } from '@/lib/seasonal';
import { OfferCard } from '@/components/ui/OfferCard';
import { DropFlavorPreview } from '@/components/ui/DropFlavorPreview';
import { Chunk3, Crumb1, Sparkle1, Swirl1, Swirl2, Trail2 } from '@/components/decorative';
import { useI18n } from '@/lib/i18n';
import { drawIn, revealScale, revealUp, storyViewport } from '@/lib/storytelling';

export function DropsSpecials() {
  const { t } = useI18n();

  if (dropAndSpecialProducts.length === 0) {
    return null;
  }

  const overlay = activeSeasonalOverlay;

  return (
    <section
      id="drops-especiais"
      style={overlay.style}
      className="seasonal-overlay seasonal-campaign-bg relative scroll-mt-44 overflow-hidden border-y border-sand px-5 py-16 sm:px-6 sm:py-20"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={storyViewport}
          variants={revealScale(0.06, 0.86)}
          className="absolute -left-2 top-8 hidden opacity-60 md:left-[3%] md:block"
        >
          <Swirl1 className="h-16 w-16 rotate-[-14deg] text-[var(--season-accent-deep)]" strokeColor="var(--season-accent-deep)" />
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={storyViewport}
          variants={drawIn(0.14)}
          className="absolute right-[6%] top-10 hidden opacity-60 lg:block"
        >
          <Trail2 className="h-20 w-48 rotate-[8deg]" strokeColor="var(--season-accent)" strokeWidth={2.5} />
        </motion.div>
        <div className="animate-seasonal-sway absolute right-[20%] top-12 hidden opacity-70 xl:block">
          <Chunk3 className="h-10 w-10 rotate-[18deg]" fillColor="var(--season-accent-soft)" />
        </div>
        <div className="animate-seasonal-drift absolute bottom-16 left-[8%] hidden opacity-65 lg:block">
          <Crumb1 className="h-4 w-4" fillColor="var(--season-accent-soft)" strokeColor="var(--season-accent-deep)" />
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-10 grid gap-6 lg:mb-12 lg:grid-cols-[minmax(0,1fr)_280px] lg:items-start lg:gap-8">
          <motion.div initial="hidden" whileInView="visible" viewport={storyViewport} className="max-w-3xl">
            <motion.p variants={revealUp(0)} className="mb-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--season-accent-deep)]">
              {t(overlay.dropsEyebrow)}
            </motion.p>
            <motion.h2 variants={revealUp(0.06, 16)} className="mb-4 font-display text-4xl font-bold tracking-tight text-ink md:text-5xl">
              {t(overlay.dropsTitle)}
            </motion.h2>
            <motion.p variants={revealUp(0.12, 18)} className="mb-5 max-w-2xl text-base leading-relaxed text-ink-muted sm:mb-6 sm:text-lg">
              {t(overlay.dropsDescription)}
            </motion.p>
            <motion.div variants={revealUp(0.18, 18)} className="flex flex-wrap gap-3">
              {overlay.dropsPills.map((pill) => (
                <span
                  key={t(pill)}
                  className="rounded-pill border-[2px] border-[var(--season-line)] bg-white/75 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--season-accent-deep)]"
                >
                  {t(pill)}
                </span>
              ))}
            </motion.div>
          </motion.div>

          <motion.aside
            initial="hidden"
            whileInView="visible"
            viewport={storyViewport}
            variants={revealUp(0.16, 18)}
            className="seasonal-grain relative overflow-hidden rounded-drawn border-[3px] border-[var(--season-line)] bg-white/70 p-5 shadow-[5px_5px_0_var(--season-shadow)] sm:p-6"
          >
            <div className="pointer-events-none absolute right-5 top-5 opacity-80">
              <Sparkle1 className="h-8 w-8" fillColor="var(--season-accent-soft)" strokeColor="var(--season-accent-deep)" />
            </div>
            <div className="pointer-events-none absolute bottom-5 left-5 opacity-70">
              <Swirl2 className="h-10 w-10 rotate-[12deg]" strokeColor="var(--season-accent)" strokeWidth={3} />
            </div>
            <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--season-accent-deep)]">
              {t(overlay.seasonLabel)}
            </p>
            <h3 className="mb-3 font-display text-2xl font-bold text-ink">{t(overlay.dropsAsideTitle)}</h3>
            <p className="text-sm leading-relaxed text-ink-muted">{t(overlay.dropsAsideBody)}</p>
          </motion.aside>
        </div>

        <DropFlavorPreview preview={overlay.featuredDropPreview} />

        <div className="grid grid-cols-1 gap-5 xl:grid-cols-2 xl:gap-6">
          {dropAndSpecialProducts.map((product, index) => (
            <OfferCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
