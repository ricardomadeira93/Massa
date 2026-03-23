'use client';

import { motion } from 'framer-motion';
import { coreProducts } from '@/lib/data';
import { ProductCard } from '@/components/ui/ProductCard';
import { AllergenBanner } from '@/components/ui/AllergenBanner';
import { Arrow1, Crumb2, Sparkle3, Trail1 } from '@/components/decorative';
import { useI18n } from '@/lib/i18n';
import { drawIn, revealScale, revealUp, storyViewport } from '@/lib/storytelling';

export function Products() {
  const { copy } = useI18n();

  return (
    <section id="produtos" className="relative scroll-mt-44 bg-butter px-5 py-16 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={storyViewport}
          className="group/menu-heading mb-10 text-left sm:mb-12 sm:text-center"
        >
          <motion.div variants={revealUp(0)} className="relative inline-block">
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

          <motion.p variants={revealUp(0.08, 16)} className="mx-auto max-w-2xl font-body text-base leading-relaxed text-ink-muted sm:text-lg">
            {copy.products.description}
          </motion.p>
        </motion.div>

        <div className="mb-10 grid grid-cols-1 gap-5 md:mb-12 md:grid-cols-3 md:gap-6">
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

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={storyViewport}
          variants={drawIn(0.2)}
          className="pointer-events-none relative z-20 mt-12 hidden justify-center md:flex"
        >
          <div className="relative flex items-center gap-4">
            <Trail1 className="h-10 w-28 opacity-70" strokeColor="var(--caramel)" strokeWidth={2.5} />
            <Arrow1 strokeColor="var(--caramel)" className="h-20 w-20 rotate-90 opacity-90" />
            <div className="absolute left-10 top-0 opacity-80">
              <Crumb2 className="h-3 w-3 -rotate-12" fillColor="var(--honey)" />
            </div>
            <div className="absolute left-20 top-6 opacity-70">
              <Crumb2 className="h-2.5 w-2.5 rotate-12" fillColor="var(--cream)" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
