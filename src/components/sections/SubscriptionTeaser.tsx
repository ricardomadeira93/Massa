'use client';

import { motion } from 'framer-motion';
import { subscriptionProducts } from '@/lib/data';
import { activeSeasonalOverlay } from '@/lib/seasonal';
import { Button } from '@/components/ui/Button';
import { ProductIllustration } from '@/components/ui/ProductIllustration';
import { Crumb2, Heart2, Sparkle1, Swirl2, Trail3 } from '@/components/decorative';
import { useI18n } from '@/lib/i18n';
import { buildWhatsAppPrefillUrl } from '@/lib/whatsapp';
import { drawIn, revealScale, revealUp, storyViewport } from '@/lib/storytelling';

export function SubscriptionTeaser() {
  const subscription = subscriptionProducts[0];
  const { t } = useI18n();

  if (!subscription) {
    return null;
  }

  const overlay = activeSeasonalOverlay;

  return (
    <section id="assinatura" style={overlay.style} className="relative bg-cream px-5 py-16 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={storyViewport}
          variants={revealUp(0, 16)}
          className="seasonal-overlay seasonal-club-bg relative overflow-hidden rounded-drawn border-[3px] border-ink shadow-[5px_5px_0_var(--season-shadow)]"
        >
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={storyViewport}
              variants={drawIn(0.12)}
              className="absolute right-10 top-8 hidden opacity-65 md:block"
            >
              <Trail3 className="h-8 w-36" strokeColor="var(--season-accent)" strokeWidth={2.5} />
            </motion.div>
            <div className="animate-seasonal-drift absolute right-[18%] top-16 hidden opacity-70 md:block">
              <Crumb2 className="h-3 w-3" fillColor="var(--season-accent-soft)" strokeColor="var(--season-accent-deep)" />
            </div>
          </div>

          <div className="grid items-center gap-0 md:grid-cols-[300px_minmax(0,1fr)]">
            <div className="seasonal-grain relative flex min-h-[220px] items-center justify-center overflow-hidden border-b-[3px] border-[var(--season-line)] bg-white/55 p-6 md:min-h-[280px] md:border-b-0 md:border-r-[3px] md:p-8">
              <div className="absolute left-6 top-6 rounded-pill border-[2px] border-[var(--season-line)] bg-white/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--season-accent-deep)]">
                {t(overlay.subscriptionEyebrow)}
              </div>
              <motion.div variants={revealScale(0.08, 0.88)} className="w-full max-w-[180px] md:max-w-[210px]">
                <ProductIllustration illustration={subscription.illustration} className="h-full w-full text-ink" />
              </motion.div>
              <div className="pointer-events-none absolute bottom-6 left-6 hidden opacity-75 sm:block">
                <Swirl2 className="h-10 w-10 rotate-[-10deg]" strokeColor="var(--season-accent)" strokeWidth={3} />
              </div>
              <div className="pointer-events-none absolute bottom-6 right-6 hidden opacity-80 sm:block">
                <Heart2 className="h-7 w-7" fillColor="var(--season-accent)" strokeColor="var(--ink)" />
              </div>
            </div>

            <div className="relative flex flex-col gap-5 p-5 sm:p-6 md:gap-6 md:p-10">
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-pill border-[2px] border-[var(--season-line)] bg-white/75 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--season-accent-deep)]">
                  {subscription.sectionLabel ? t(subscription.sectionLabel) : null}
                </span>
                {subscription.badge && (
                  <span className="rounded-pill border-[2px] border-ink bg-[var(--season-accent-deep)] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-cream">
                    {t(subscription.badge)}
                  </span>
                )}
              </div>

              <div>
                <h2 className="mb-3 font-display text-4xl font-bold tracking-tight text-ink md:text-5xl">
                  {t(overlay.subscriptionTitle)}
                </h2>
                <p className="max-w-2xl text-base leading-relaxed text-ink-muted sm:text-lg">{t(overlay.subscriptionDescription)}</p>
              </div>

              <div className="grid gap-3 md:grid-cols-3">
                {overlay.ritualSteps.map((step, index) => (
                  <div key={t(step)} className="rounded-drawn border-[2px] border-[var(--season-line)] bg-white/65 px-4 py-4">
                    <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--season-accent-deep)]">0{index + 1}</p>
                    <p className="text-sm font-medium text-ink">{t(step)}</p>
                  </div>
                ))}
              </div>

              <p className="max-w-xl text-sm leading-relaxed text-ink-muted">{t(overlay.clubNote)}</p>

              <div className="flex flex-col gap-3 sm:gap-4">
                <div className="group/club-cta relative w-full sm:w-auto">
                  <Button
                    href={buildWhatsAppPrefillUrl(t(subscription.interestMessage))}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="solid-dark"
                    className="w-full px-8 text-base sm:w-auto sm:text-lg"
                  >
                    {t(subscription.ctaLabel)} &rarr;
                  </Button>
                  <div className="pointer-events-none absolute -right-7 top-1/2 hidden -translate-y-1/2 opacity-0 transition-all duration-300 group-hover/club-cta:translate-x-2 group-hover/club-cta:opacity-100 group-focus-within/club-cta:translate-x-2 group-focus-within/club-cta:opacity-100 md:block">
                    <Sparkle1 className="h-8 w-8" fillColor="var(--season-accent-soft)" strokeColor="var(--season-accent-deep)" />
                  </div>
                </div>
                <Button href="#drops-especiais" variant="ghost" className="w-full justify-center px-5 text-base sm:w-auto">
                  {t(overlay.bannerCtaLabel)}
                </Button>
              </div>

              <motion.div variants={drawIn(0.18)} className="pointer-events-none absolute bottom-6 right-8 hidden md:block">
                <Trail3 className="h-6 w-28 opacity-70" strokeColor="var(--season-accent)" strokeWidth={2.5} />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
