'use client';

import { motion } from 'framer-motion';
import { CookieMark, IconInstagram, IconPhone } from '@/components/icons/DoodleIcons';
import { Chunk1, Crumb2, Heart1, Sparkle1, Trail1 } from '@/components/decorative';
import { siteConfig } from '@/lib/data';
import { drawIn, revealScale, revealUp, storyViewport } from '@/lib/storytelling';

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink text-cream">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={storyViewport}
        variants={drawIn(0.16)}
        className="pointer-events-none absolute left-1/2 top-0 hidden w-64 -translate-x-1/2 -translate-y-1/2 md:block"
      >
        <Trail1 className="h-8 w-full opacity-50" strokeColor="var(--butter)" strokeWidth={2.5} />
        <div className="absolute left-[20%] top-1 opacity-75">
          <Crumb2 className="h-3 w-3" fillColor="var(--honey)" strokeColor="var(--butter)" />
        </div>
      </motion.div>

      <div className="pointer-events-none absolute inset-0 opacity-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={storyViewport}
          variants={revealScale(0.18, 0.82)}
          className="absolute left-[20%] top-10"
        >
          <Heart1 fillColor="var(--terracotta)" strokeColor="var(--butter)" className="h-16 w-16" />
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={storyViewport}
          variants={revealScale(0.28, 0.84)}
          className="absolute bottom-20 right-[15%]"
        >
          <Chunk1 fillColor="var(--caramel)" strokeColor="var(--ink)" className="h-12 w-12 rotate-45" strokeWidth={3} />
        </motion.div>
      </div>

      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 gap-10 border-b border-ink-muted/20 px-6 py-16 md:grid-cols-3">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={storyViewport}
          variants={revealUp(0, 16)}
          className="group/footer-brand relative flex flex-col items-start"
        >
          <div className="mb-4 flex items-center gap-2">
            <CookieMark size={36} color="var(--cream)" />
            <span className="mt-1 font-display text-3xl font-bold">Massa</span>
          </div>
          <p className="max-w-[200px] whitespace-pre-line text-sm leading-relaxed text-ink-faint">
            {siteConfig.tagline}
          </p>
          <div className="pointer-events-none absolute -right-2 top-0 hidden opacity-70 transition-transform duration-300 group-hover/footer-brand:-translate-y-1 group-hover/footer-brand:rotate-6 md:block">
            <Sparkle1 className="h-7 w-7" fillColor="var(--honey)" strokeColor="var(--butter)" />
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={storyViewport}
          variants={revealUp(0.08, 16)}
          className="group/footer-nav relative flex flex-col gap-3 pt-2 md:pt-4"
        >
          <h4 className="mb-2 font-display text-xl font-bold tracking-wide text-orange">Navegue</h4>
          <div className="pointer-events-none absolute -left-2 top-8 hidden opacity-60 md:block">
            <Trail1 className="h-6 w-24" strokeColor="var(--honey)" strokeWidth={2} />
          </div>
          <a href="#produtos" className="flex min-h-[44px] w-fit items-center rounded-sm py-1 text-ink-faint outline-none transition-colors hover:text-cream focus-visible:ring-2 focus-visible:ring-orange">
            Cardápio
          </a>
          <a href="#como-funciona" className="flex min-h-[44px] w-fit items-center rounded-sm py-1 text-ink-faint outline-none transition-colors hover:text-cream focus-visible:ring-2 focus-visible:ring-orange">
            Como funciona
          </a>
          <a href="#faq" className="flex min-h-[44px] w-fit items-center rounded-sm py-1 text-ink-faint outline-none transition-colors hover:text-cream focus-visible:ring-2 focus-visible:ring-orange">
            Dúvidas Frequentes
          </a>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={storyViewport}
          variants={revealUp(0.16, 16)}
          className="group/footer-contact relative flex flex-col gap-3 pt-2 md:pt-4"
        >
          <h4 className="mb-2 font-display text-xl font-bold tracking-wide text-orange">Fale com a gente</h4>
          <div className="pointer-events-none absolute right-4 top-8 hidden opacity-70 transition-transform duration-300 group-hover/footer-contact:-translate-y-1 group-hover/footer-contact:translate-x-1 md:block">
            <Crumb2 className="h-3 w-3" fillColor="var(--honey)" strokeColor="var(--butter)" />
          </div>
          <a
            href={siteConfig.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex min-h-[44px] w-fit items-center gap-3 rounded-sm pr-4 text-ink-faint outline-none transition-colors hover:text-cream focus-visible:ring-2 focus-visible:ring-orange"
          >
            <IconInstagram size={28} className="shrink-0 text-orange transition-transform group-hover:-rotate-6" />
            <span className="group-hover:underline">Instagram</span>
          </a>
          <a
            href={`https://wa.me/${siteConfig.whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex min-h-[44px] w-fit items-center gap-3 rounded-sm pr-4 text-ink-faint outline-none transition-colors hover:text-cream focus-visible:ring-2 focus-visible:ring-orange"
          >
            <IconPhone size={28} className="shrink-0 text-orange transition-transform group-hover:rotate-6" />
            <span className="group-hover:underline">WhatsApp</span>
          </a>
        </motion.div>
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={storyViewport}
        variants={revealUp(0.22, 12)}
        className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 text-center"
      >
        <p className="mb-2 w-full text-xs text-ink-faint/60">{siteConfig.allergenStatement}</p>
        <p className="text-xs text-ink-faint">© {new Date().getFullYear()} Massa Cookies. Todos os direitos reservados.</p>
      </motion.div>
    </footer>
  );
}
