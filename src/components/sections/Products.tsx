'use client';

import { motion } from 'framer-motion';
import { coreProducts } from '@/lib/data';
import { ProductCard } from '@/components/ui/ProductCard';
import { AllergenBanner } from '@/components/ui/AllergenBanner';
import { Sparkle3 } from '@/components/decorative';
import { useI18n } from '@/lib/i18n';
import { revealScale, revealUp, storyViewport } from '@/lib/storytelling';

export function Products() {
  const { copy } = useI18n();

  return (
    <section id="produtos" className="relative scroll-mt-44 border-y border-sand bg-butter/55 px-5 py-10 sm:px-6 sm:py-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-6 grid gap-3 lg:mb-10 lg:grid-cols-[minmax(0,1fr)_280px] lg:items-start lg:gap-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={storyViewport}
            className="group/menu-heading text-left"
          >
            <motion.p variants={revealUp(0)} className="mb-2 text-xs font-semibold uppercase tracking-widest text-ink-muted">
              {copy.products.eyebrow}
            </motion.p>
            <motion.div variants={revealUp(0.04, 10)} className="relative inline-block">
              <h2 className="mb-3 font-display text-4xl font-bold tracking-tight text-ink md:text-5xl">
                {copy.products.title}
              </h2>
              <motion.div
                variants={revealScale(0.18, 0.84)}
                className="pointer-events-none absolute -right-8 -top-2 hidden transition-transform duration-300 group-hover/menu-heading:-translate-y-1 group-hover/menu-heading:rotate-6 md:block"
              >
                <Sparkle3 className="h-7 w-7" fillColor="var(--cream)" strokeColor="var(--terracotta)" />
              </motion.div>
            </motion.div>

            <motion.p variants={revealUp(0.08, 16)} className="max-w-3xl font-body text-sm leading-relaxed text-ink-muted sm:text-lg">
              {copy.products.description}
            </motion.p>
          </motion.div>

          <motion.aside
            initial="hidden"
            whileInView="visible"
            viewport={storyViewport}
            variants={revealUp(0.12, 18)}
            className="border-0 bg-transparent p-0 text-sm text-ink-muted lg:rounded-drawn lg:border lg:border-sand/70 lg:bg-white/30 lg:p-5"
          >
            <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-ink-muted lg:mb-2">{copy.products.eyebrow}</p>
            <h3 className="mb-1 font-display text-base font-bold text-ink lg:mb-2 lg:text-xl">{copy.products.asideTitle}</h3>
            <p className="leading-relaxed text-ink-muted">{copy.products.asideBody}</p>
          </motion.aside>
        </div>

        <div className="mb-8 grid grid-cols-1 gap-3 md:mb-12 md:grid-cols-3 md:gap-6">
          {coreProducts.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={storyViewport}
          variants={revealUp(0.12, 18)}
          className="mx-auto max-w-3xl"
        >
          <AllergenBanner />
        </motion.div>
      </div>
    </section>
  );
}
