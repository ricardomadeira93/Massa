'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { BakerHero } from '@/components/icons/DoodleIcons';
import { Arrow2, Crumb1, Chunk2, Sparkle1, Sparkle3, Swirl2, Trail3 } from '@/components/decorative';
import { siteConfig } from '@/lib/data';
import { drawIn, revealScale, revealUp, storyViewport } from '@/lib/storytelling';

export function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-cream pt-20">
      <div className="relative z-10 mx-auto grid w-full max-w-7xl flex-1 grid-cols-1 items-center gap-16 px-6 py-16 md:grid-cols-2">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={revealUp(0, 0)}
          className="group/story-copy flex flex-col items-start gap-6 order-2 pt-8 md:order-1 md:pt-0"
        >
          <motion.div
            variants={revealScale(0.05)}
            className="inline-flex rotate-2 items-center border-[3px] border-ink bg-butter px-4 py-1.5 font-display text-sm font-medium tracking-wide text-orange shadow-[3px_3px_0_var(--ink)]"
          >
            Cookies artesanais · Fim de semana
          </motion.div>

          <div className="relative">
            <motion.h1
              variants={revealUp(0.12, 16)}
              className="font-display font-bold leading-[1.1] text-ink"
              style={{ fontSize: 'clamp(3rem, 6vw, 5.5rem)' }}
            >
              Feito com{' '}
              <span className="relative inline-block text-orange">
                amor,
                <motion.span
                  variants={drawIn(0.35)}
                  className="absolute -bottom-6 left-0 block w-[120%] -translate-x-[10%]"
                >
                  <Swirl2 className="h-8 w-full" strokeColor="var(--caramel)" strokeWidth={3} />
                </motion.span>
              </span>
              <br />
              entregue na sua porta.
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
            className="max-w-sm font-body text-lg font-light leading-relaxed text-ink-muted"
          >
            {siteConfig.subTagline}
          </motion.p>

          <motion.div variants={revealUp(0.28, 18)} className="mt-4 flex flex-wrap items-center gap-6">
            <div className="group/hero-cta relative">
              <Button href="#pedido" variant="solid-dark" className="px-8 text-lg">
                Fazer pedido &rarr;
              </Button>
              <div className="pointer-events-none absolute -right-10 top-1/2 hidden -translate-y-1/2 opacity-0 transition-all duration-300 group-hover/hero-cta:translate-x-2 group-hover/hero-cta:opacity-100 group-focus-within/hero-cta:translate-x-2 group-focus-within/hero-cta:opacity-100 md:block">
                <Arrow2 className="h-10 w-10" strokeColor="var(--terracotta)" />
              </div>
            </div>

            <Button href="#produtos" variant="ghost" className="px-0 text-base">
              Ver cardápio
            </Button>
          </motion.div>

          <motion.p variants={revealUp(0.34, 14)} className="mt-8 text-xs text-ink-faint">
            {siteConfig.deliveryNote}
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={revealScale(0.12, 0.96)}
          className="group/hero-illustration relative order-1 flex h-[45vh] items-center justify-center md:order-2 md:h-[65vh]"
        >
          <div className="z-10 transition-transform duration-500 group-hover/hero-illustration:-translate-y-2 group-hover/hero-illustration:rotate-1">
            <BakerHero size={260} className="h-[260px] w-[260px] text-ink md:h-[320px] md:w-[320px]" />
          </div>

          <div className="pointer-events-none absolute inset-0 -z-10">
            <motion.div
              variants={revealScale(0.28, 0.8)}
              initial="hidden"
              animate="visible"
              className="absolute left-[5%] top-[10%] opacity-80 transition-transform duration-300 group-hover/hero-illustration:-translate-y-1 group-hover/hero-illustration:rotate-6 md:-left-[20%]"
            >
              <Sparkle1 className="h-10 w-10 md:h-16 md:w-16" fillColor="var(--butter)" strokeColor="var(--orange)" />
            </motion.div>

            <motion.div
              variants={revealUp(0.34, 18)}
              initial="hidden"
              animate="visible"
              className="absolute bottom-[20%] right-[10%] opacity-90 transition-transform duration-300 group-hover/hero-illustration:-translate-y-2 group-hover/hero-illustration:-rotate-6 md:-right-[5%]"
            >
              <Chunk2 className="h-10 w-10 md:h-14 md:w-14" fillColor="var(--honey)" />
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
