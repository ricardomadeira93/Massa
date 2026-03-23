'use client';

import { motion } from 'framer-motion';
import { dropAndSpecialProducts } from '@/lib/data';
import { activeSeasonalOverlay } from '@/lib/seasonal';
import { Button } from '@/components/ui/Button';
import { Crumb1, Swirl1, Trail2 } from '@/components/decorative';
import { useI18n } from '@/lib/i18n';
import { drawIn, revealUp } from '@/lib/storytelling';

export function TopOfferHeader() {
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
      variants={revealUp(0, 8)}
      style={overlay.style}
      className="seasonal-overlay seasonal-campaign-bg fixed inset-x-0 top-0 z-[110] border-b border-[var(--season-line)]"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-3 top-1/2 hidden -translate-y-1/2 opacity-35 lg:block">
          <Swirl1 className="h-7 w-7 rotate-[-10deg]" strokeColor="var(--season-accent-deep)" strokeWidth={2.5} />
        </div>
        <motion.div variants={drawIn(0.12)} className="absolute right-3 top-1/2 hidden -translate-y-1/2 opacity-35 xl:block">
          <Trail2 className="h-4 w-20 rotate-[4deg]" strokeColor="var(--season-accent)" strokeWidth={2.25} />
        </motion.div>
        <div className="absolute right-24 top-1/2 hidden -translate-y-1/2 opacity-35 xl:block">
          <Crumb1 className="h-3 w-3" fillColor="var(--season-accent-soft)" strokeColor="var(--season-accent-deep)" />
        </div>
      </div>

      <div className="relative z-10 mx-auto flex min-h-[48px] max-w-7xl items-center gap-3 px-4 py-2 sm:justify-between sm:px-6">
        <div className="min-w-0 flex-1">
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--season-accent-deep)] sm:text-[11px]">
            {t(overlay.bannerEyebrow)}
          </p>
          <p className="mt-0.5 text-xs leading-tight text-ink sm:text-sm md:text-[15px]">
            <span className="font-semibold">{t(currentDrop.name)}</span>
            <span className="text-ink-muted"> · {currentDrop.limitedNote ? t(currentDrop.limitedNote) : t(overlay.bannerTitle)}</span>
          </p>
        </div>

        <div className="flex shrink-0 items-center border-l border-[var(--season-line)] pl-3">
          <Button
            href="#drops-especiais"
            variant="ghost"
            className="min-h-[40px] border-[var(--season-line)] bg-white/80 px-3 py-1.5 text-xs font-semibold whitespace-nowrap text-[var(--season-accent-deep)] shadow-[2px_2px_0_var(--season-shadow)] hover:border-[var(--season-accent)] hover:bg-white sm:px-4 sm:text-sm"
          >
            {t(overlay.bannerCtaLabel)}
            <span aria-hidden="true">&rarr;</span>
          </Button>
        </div>
      </div>
    </motion.div>
  );
}
