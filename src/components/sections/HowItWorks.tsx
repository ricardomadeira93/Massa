'use client';

import { motion } from 'framer-motion';
import { siteConfig } from '@/lib/data';
import { Scribble2, Trail3 } from '@/components/decorative';
import { useI18n } from '@/lib/i18n';
import { drawIn, revealScale, revealUp, storyViewport } from '@/lib/storytelling';

export function HowItWorks() {
  const { copy, t } = useI18n();
  const steps = copy.howItWorks.steps;

  return (
    <section id="como-funciona" className="relative scroll-mt-44 overflow-hidden border-y border-sand bg-cream px-5 py-12 sm:px-6 sm:py-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 max-w-3xl text-left lg:mb-10">
          <motion.div initial="hidden" whileInView="visible" viewport={storyViewport} className="text-left">
            <motion.p variants={revealUp(0)} className="mb-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-ink-faint">
              {copy.howItWorks.eyebrow}
            </motion.p>
            <motion.h2 variants={revealUp(0.04, 12)} className="mb-3 font-display text-4xl font-bold tracking-tight text-ink md:text-5xl">
              {copy.howItWorks.title}
            </motion.h2>
            <motion.p variants={revealUp(0.08, 16)} className="max-w-3xl font-body text-base leading-relaxed text-ink-muted sm:text-lg">
              {copy.howItWorks.description}
            </motion.p>
          </motion.div>
        </div>

        <div className="relative z-10 mb-10 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-2 lg:gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={step.num}
              initial="hidden"
              whileInView="visible"
              viewport={storyViewport}
              variants={revealUp(index * 0.08, 18)}
              className="group/step relative flex min-h-[168px] cursor-default flex-col items-start rounded-drawn border-[3px] border-ink bg-white/90 px-4 py-5 text-left shadow-[4px_4px_0_var(--ink)] transition-all hover:-translate-y-0.5 hover:shadow-[5px_5px_0_var(--caramel)] sm:px-5 sm:py-6 lg:min-h-[198px]"
            >
              <div className="pointer-events-none absolute right-4 top-4 opacity-35 transition-transform duration-300 group-hover/step:-translate-y-1 group-hover/step:rotate-6 group-hover/step:opacity-70">
                <Scribble2 className="h-6 w-6" strokeColor="var(--terracotta)" strokeWidth={3} />
              </div>

              <motion.div
                variants={revealScale(index * 0.08 + 0.04, 0.88)}
                className="mb-3 flex h-11 w-11 items-center justify-center rounded-drawn border-[3px] border-ink bg-butter font-display text-lg font-bold text-ink shadow-[2px_2px_0_var(--ink)] transition-transform duration-300 group-hover/step:-translate-y-1 sm:mb-4 sm:h-12 sm:w-12 sm:text-xl"
              >
                {step.num}
              </motion.div>
              <h3 className="mb-2 font-display text-xl font-bold text-ink sm:text-[1.4rem]">{step.title}</h3>
              <p className="max-w-[30ch] text-[15px] leading-relaxed text-ink-muted">{step.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={storyViewport}
          variants={revealUp(0.12, 14)}
          className="mx-auto max-w-md text-left text-xs leading-relaxed text-ink-faint sm:text-center"
        >
          {t(siteConfig.orderCutoffNote)}
        </motion.p>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={storyViewport}
          variants={drawIn(0.24)}
          className="pointer-events-none mt-12 flex justify-center"
        >
          <Trail3 className="h-6 w-44 opacity-70" strokeColor="var(--terracotta)" strokeWidth={2.5} />
        </motion.div>
      </div>
    </section>
  );
}
