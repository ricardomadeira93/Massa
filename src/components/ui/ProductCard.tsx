'use client';

import { motion } from 'framer-motion';
import { OrderableProduct } from '@/types';
import { Button } from '@/components/ui/Button';
import { FlavourPill } from '@/components/ui/FlavourPill';
import { ProductIllustration } from '@/components/ui/ProductIllustration';
import { Arrow3, Crumb3, Sparkle2 } from '@/components/decorative';
import { useI18n } from '@/lib/i18n';
import { startOrderFlow } from '@/lib/order';
import { revealUp, storyViewport } from '@/lib/storytelling';

interface ProductCardProps {
  product: OrderableProduct;
  index?: number;
}

export function ProductCard({ product, index = 0 }: ProductCardProps) {
  const isSoldOut = !product.available;
  const isFeatured = !!product.badge;
  const { copy, t } = useI18n();

  const handleOrderClick = () => {
    startOrderFlow(product.id);
  };

  return (
    <motion.article
      initial="hidden"
      whileInView="visible"
      viewport={storyViewport}
      variants={revealUp(index * 0.08, 18)}
      className={`group relative flex flex-col overflow-hidden rounded-drawn border-[3px] bg-white transition-all duration-300 ${
        isFeatured ? 'border-terracotta shadow-[4px_4px_0_var(--terracotta)]' : 'border-ink shadow-[4px_4px_0_var(--ink)]'
      } ${
        isSoldOut
          ? 'opacity-65 grayscale-[0.15]'
          : 'hover:-translate-y-1 hover:-rotate-1 hover:shadow-[6px_6px_0_var(--orange)] focus-within:-translate-y-1 focus-within:-rotate-1 focus-within:shadow-[6px_6px_0_var(--orange)]'
      }`}
    >
      {isFeatured && !isSoldOut && (
        <div className="absolute right-3 top-3 z-20 rotate-3 rounded-drawn border-[3px] border-ink bg-terracotta px-3 py-1.5 font-display text-[11px] font-bold text-cream shadow-[3px_3px_0_var(--ink)] sm:right-4 sm:top-4 sm:px-4">
          {product.badge ? t(product.badge) : null}
        </div>
      )}

      <div className="relative flex h-40 items-center justify-center overflow-hidden border-b-[3px] border-ink bg-butter/20 sm:h-44">
        <div className="h-full w-full p-3 transition-transform duration-500 ease-out group-hover:scale-110 group-hover:-rotate-2 group-focus-within:scale-110 group-focus-within:-rotate-2 sm:p-2">
          <ProductIllustration illustration={product.illustration} className="relative z-10 h-full w-full text-ink" />
        </div>

        <div className="pointer-events-none absolute left-6 top-4 hidden opacity-75 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:rotate-12 group-focus-within:-translate-y-1 group-focus-within:translate-x-1 group-focus-within:rotate-12 sm:block">
          <Sparkle2 strokeColor="var(--caramel)" className="h-8 w-8 rotate-12" />
        </div>

        <div className="pointer-events-none absolute bottom-4 right-8 hidden opacity-90 transition-transform duration-300 group-hover:-translate-x-2 group-hover:-translate-y-1 group-hover:-rotate-12 group-focus-within:-translate-x-2 group-focus-within:-translate-y-1 group-focus-within:-rotate-12 sm:block">
          <Crumb3 className="h-5 w-5" fillColor="var(--butter)" />
        </div>
      </div>

      <div className="relative flex flex-1 flex-col gap-4 p-5 sm:gap-5 sm:p-6">
        <div className="space-y-3">
          <div className="flex flex-wrap items-center gap-2">
            {product.sectionLabel && (
              <span className="rounded-pill border-[2px] border-sand bg-butter/60 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-ink-faint">
                {t(product.sectionLabel)}
              </span>
            )}
            {isSoldOut && (
              <span className="rounded-pill border-[2px] border-sand bg-sand px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-ink-muted">
                {copy.products.soldOut}
              </span>
            )}
          </div>

          <div>
            <h3 className="mb-1 font-display text-2xl font-bold leading-none text-ink">{t(product.name)}</h3>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-muted">{t(product.subtitle)}</p>
          </div>
        </div>

        <p className="flex-1 text-sm leading-relaxed text-ink-muted">{t(product.description)}</p>

        <div className="rounded-drawn border-[2px] border-dashed border-sand bg-cream/70 p-3">
          <div className="flex flex-wrap gap-2">
            {product.flavours.slice(0, 3).map((flavour) => (
              <FlavourPill key={t(flavour)} label={t(flavour)} />
            ))}
            {product.flavours.length > 3 && <FlavourPill label={copy.products.moreFlavours(product.flavours.length - 3)} />}
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t-[3px] border-dashed border-ink/40 pt-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-ink-faint">{copy.products.pricePrefix}</p>
            <div className="font-display text-3xl font-bold text-orange">R$ {product.price}</div>
          </div>

          {isSoldOut ? (
            <span className="inline-flex min-h-[44px] items-center justify-center rounded-pill border-[2px] border-sand bg-sand px-4 py-2 text-sm font-semibold text-ink-muted">
              {copy.products.soldOut}
            </span>
          ) : (
            <div className="group/order-cta relative w-full sm:w-auto">
              <Button onClick={handleOrderClick} variant="solid-dark" className="w-full flex-none px-6 text-base sm:w-auto sm:text-lg">
                {t(product.ctaLabel)}
                <span aria-hidden="true">&rarr;</span>
              </Button>
              <div className="pointer-events-none absolute -right-8 -top-4 hidden opacity-0 transition-all duration-300 group-hover/order-cta:translate-x-2 group-hover/order-cta:-translate-y-1 group-hover/order-cta:opacity-100 group-focus-within/order-cta:translate-x-2 group-focus-within/order-cta:-translate-y-1 group-focus-within/order-cta:opacity-100 md:block">
                <Arrow3 className="h-12 w-12" strokeColor="var(--terracotta)" strokeWidth={2.5} />
              </div>
            </div>
          )}
        </div>
      </div>
    </motion.article>
  );
}
