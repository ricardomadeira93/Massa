'use client';

import { motion } from 'framer-motion';
import { OrderableProduct } from '@/types';
import { Button } from '@/components/ui/Button';
import { FlavourPill } from '@/components/ui/FlavourPill';
import { ProductIllustration } from '@/components/ui/ProductIllustration';
import { Arrow2, Crumb2, Sparkle3 } from '@/components/decorative';
import { useI18n } from '@/lib/i18n';
import { startOrderFlow } from '@/lib/order';
import { revealScale, revealUp, storyViewport } from '@/lib/storytelling';

interface OfferCardProps {
  product: OrderableProduct;
  index?: number;
}

const surfaceByCategory = {
  drop: {
    card: 'bg-[var(--season-card)] border-[var(--season-line)] shadow-[4px_4px_0_var(--season-shadow)]',
    media: 'bg-white/55',
    badge: 'bg-[var(--season-accent)] text-cream',
  },
  special: {
    card: 'bg-[var(--season-card-strong)] border-[var(--season-line)] shadow-[4px_4px_0_var(--season-shadow)]',
    media: 'bg-[var(--season-paper)]',
    badge: 'bg-[var(--season-accent-deep)] text-cream',
  },
} as const;

export function OfferCard({ product, index = 0 }: OfferCardProps) {
  const { copy, t } = useI18n();

  const handleOrderClick = () => {
    startOrderFlow(product.id);
  };

  const surfaceClass = surfaceByCategory[product.category as 'drop' | 'special'] ?? surfaceByCategory.drop;

  return (
    <motion.article
      initial="hidden"
      whileInView="visible"
      viewport={storyViewport}
      variants={revealUp(index * 0.08, 18)}
      className={`group seasonal-grain relative overflow-hidden rounded-drawn border-[3px] transition-all duration-300 hover:-translate-y-1 hover:shadow-[6px_6px_0_var(--season-shadow)] ${surfaceClass.card}`}
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.5),transparent_72%)] opacity-70" />
      <div className="grid md:grid-cols-[220px_minmax(0,1fr)]">
        <div
          className={`relative flex min-h-[180px] items-center justify-center overflow-hidden border-b-[3px] border-[var(--season-line)] p-5 md:min-h-[200px] md:border-b-0 md:border-r-[3px] md:p-6 ${surfaceClass.media}`}
        >
          <motion.div variants={revealScale(index * 0.08 + 0.08, 0.88)} className="w-full max-w-[150px] transition-transform duration-500 group-hover:-translate-y-1 group-hover:rotate-2 md:max-w-[180px]">
            <ProductIllustration illustration={product.illustration} className="h-full w-full text-ink" />
          </motion.div>

          <div className="pointer-events-none absolute left-5 top-5 hidden opacity-75 transition-transform duration-300 group-hover:-translate-y-1 group-hover:rotate-6 sm:block">
            <Sparkle3 className="h-7 w-7" fillColor="var(--season-accent-soft)" strokeColor="var(--season-accent-deep)" />
          </div>
          <div className="pointer-events-none absolute bottom-5 right-6 hidden opacity-75 transition-transform duration-300 group-hover:-translate-x-1 group-hover:-translate-y-1 sm:block">
            <Crumb2 className="h-3 w-3" fillColor="var(--season-accent-soft)" strokeColor="var(--season-accent-deep)" />
          </div>
        </div>

        <div className="flex flex-col gap-4 p-5 sm:gap-5 sm:p-6">
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-pill border-[2px] border-[var(--season-line)] bg-white/70 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--season-accent-deep)]">
              {product.sectionLabel ? t(product.sectionLabel) : null}
            </span>
            {product.badge && (
              <span className={`rounded-pill border-[2px] border-ink px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] ${surfaceClass.badge}`}>
                {t(product.badge)}
              </span>
            )}
          </div>

          <div className="space-y-2">
            <h3 className="font-display text-[2rem] font-bold leading-none text-ink">{t(product.name)}</h3>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-ink-muted">{t(product.subtitle)}</p>
          </div>

          <p className="max-w-xl text-sm leading-relaxed text-ink-muted">{t(product.description)}</p>

          <div className="rounded-drawn border-[2px] border-dashed border-[var(--season-line)] bg-white/45 p-3">
            <div className="flex flex-wrap gap-2">
              {product.flavours.map((flavour) => (
                <FlavourPill key={t(flavour)} label={t(flavour)} />
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4 border-t-[3px] border-dashed border-[var(--season-line)] pt-4 md:flex-row md:items-end md:justify-between">
            <div className="rounded-drawn border-[2px] border-[var(--season-line)] bg-white/65 px-4 py-3">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--season-accent-deep)]">{copy.products.pricePrefix}</p>
              <p className="font-display text-3xl font-bold text-orange">R$ {product.price}</p>
              {product.limitedNote && (
                <p className="mt-1 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--season-accent-deep)]">{t(product.limitedNote)}</p>
              )}
            </div>

            <div className="group/offer-cta relative w-full md:w-auto">
              <Button onClick={handleOrderClick} variant="solid-dark" className="w-full px-6 text-base md:w-auto">
                {t(product.ctaLabel)}
                <span aria-hidden="true">&rarr;</span>
              </Button>
              <div className="pointer-events-none absolute -right-7 top-1/2 hidden -translate-y-1/2 opacity-0 transition-all duration-300 group-hover/offer-cta:translate-x-2 group-hover/offer-cta:opacity-100 group-focus-within/offer-cta:translate-x-2 group-focus-within/offer-cta:opacity-100 md:block">
                <Arrow2 className="h-9 w-9" strokeColor="var(--season-accent-deep)" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
