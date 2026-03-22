'use client';

import { motion } from 'framer-motion';
import { siteConfig } from '@/lib/data';
import { Crumb4, Scribble2, Trail2, Trail3 } from '@/components/decorative';
import { drawIn, revealScale, revealUp, storyViewport } from '@/lib/storytelling';

const steps = [
  {
    num: '1',
    title: 'Escolha sua caixa',
    desc: 'Veja o cardápio e escolha os sabores da sua caixa.',
  },
  {
    num: '2',
    title: 'Envie via WhatsApp',
    desc: 'Preencha o formulário e envie seu pedido por WhatsApp.',
  },
  {
    num: '3',
    title: 'Pague no Pix',
    desc: 'Nós confirmamos os detalhes e enviamos a chave Pix.',
  },
  {
    num: '4',
    title: 'Receba na porta',
    desc: 'Entregamos na sua porta no horário marcado.',
  },
];

export function HowItWorks() {
  return (
    <section id="como-funciona" className="relative overflow-hidden border-y border-sand bg-white px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <motion.div initial="hidden" whileInView="visible" viewport={storyViewport} className="mb-16 text-center">
          <motion.h2 variants={revealUp(0)} className="mb-3 font-display text-4xl font-bold tracking-tight text-ink">
            Como funciona?
          </motion.h2>
          <motion.p variants={revealUp(0.08, 16)} className="font-body text-lg text-ink-muted">
            Tudo feito de forma simples pelo WhatsApp.
          </motion.p>
        </motion.div>

        <div className="relative z-10 mb-16 grid grid-cols-2 gap-8 md:grid-cols-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={storyViewport}
            variants={drawIn(0.16)}
            className="pointer-events-none absolute left-[5%] right-[-10%] top-[40%] -z-10 hidden opacity-40 md:block"
          >
            <Trail2 strokeColor="var(--caramel)" className="h-48 w-full rotate-6" preserveAspectRatio="none" />
            <div className="absolute left-[18%] top-6 opacity-80">
              <Crumb4 className="h-2.5 w-2.5" fillColor="var(--cream)" strokeColor="var(--terracotta)" />
            </div>
            <div className="absolute left-[58%] top-16 opacity-80">
              <Crumb4 className="h-3 w-3" fillColor="var(--butter)" strokeColor="var(--orange)" />
            </div>
          </motion.div>

          {steps.map((step, index) => (
            <motion.div
              key={step.num}
              initial="hidden"
              whileInView="visible"
              viewport={storyViewport}
              variants={revealUp(index * 0.08, 18)}
              className="group/step relative flex cursor-default flex-col items-center rounded-drawn border-[3px] border-ink bg-cream p-6 text-center shadow-[4px_4px_0_var(--ink)] transition-all hover:-translate-y-1 hover:-rotate-1 hover:shadow-[6px_6px_0_var(--orange)]"
            >
              <div className="pointer-events-none absolute right-4 top-4 opacity-50 transition-transform duration-300 group-hover/step:-translate-y-1 group-hover/step:rotate-6 group-hover/step:opacity-90">
                <Scribble2 className="h-6 w-6" strokeColor="var(--terracotta)" strokeWidth={3} />
              </div>

              <motion.div
                variants={revealScale(index * 0.08 + 0.04, 0.88)}
                className="mb-4 flex h-12 w-12 items-center justify-center rounded-drawn border-[3px] border-ink bg-butter font-display text-2xl font-bold text-ink shadow-[2px_2px_0_var(--ink)] transition-transform duration-300 group-hover/step:-translate-y-1"
              >
                {step.num}
              </motion.div>
              <h3 className="mb-2 font-display text-xl font-bold text-ink">{step.title}</h3>
              <p className="text-sm leading-relaxed text-ink-muted">{step.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={storyViewport}
          variants={revealUp(0.12, 14)}
          className="mx-auto max-w-sm text-center text-xs text-ink-faint"
        >
          {siteConfig.orderCutoffNote}
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
