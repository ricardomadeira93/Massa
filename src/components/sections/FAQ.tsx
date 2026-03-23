'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FAQAccordion } from '@/components/ui/FAQAccordion';
import { Crumb4, DividerDoodle, Sparkle1, Trail3 } from '@/components/decorative';
import { siteConfig } from '@/lib/data';
import { useI18n } from '@/lib/i18n';
import { drawIn, revealScale, revealUp, storyViewport } from '@/lib/storytelling';

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { copy } = useI18n();
  const faqs = copy.faq.items;

  const handleSupportClick = () => {
    window.open(`https://wa.me/${siteConfig.whatsappNumber}`, '_blank');
  };

  return (
    <section id="faq" className="relative scroll-mt-44 bg-butter px-5 py-16 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-2xl">
        <motion.div initial="hidden" whileInView="visible" viewport={storyViewport} className="group/faq-heading mb-10 text-left sm:mb-12 sm:text-center">
          <div className="relative inline-block">
            <motion.h2 variants={revealUp(0)} className="mb-2 font-display text-4xl font-bold tracking-tight text-ink">
              {copy.faq.title}
            </motion.h2>
            <motion.div
              variants={revealScale(0.14, 0.84)}
              className="pointer-events-none absolute -right-8 -top-1 hidden transition-transform duration-300 group-hover/faq-heading:-translate-y-1 group-hover/faq-heading:rotate-6 md:block"
            >
              <Sparkle1 className="h-8 w-8" fillColor="var(--cream)" strokeColor="var(--terracotta)" />
            </motion.div>
          </div>
          <motion.p variants={revealUp(0.08, 16)} className="font-body text-sm leading-relaxed text-ink-muted sm:text-base">
            {copy.faq.description}
          </motion.p>
        </motion.div>

        <div className="space-y-2 sm:space-y-3">
          {faqs.map((faq, idx) => (
            <FAQAccordion
              key={faq.q}
              question={faq.q}
              answer={faq.a}
              isOpen={openIndex === idx}
              onToggle={() => setOpenIndex(openIndex === idx ? null : idx)}
              index={idx}
            />
          ))}

          <FAQAccordion
            question={copy.faq.contactCta}
            isOpen={false}
            onToggle={handleSupportClick}
            isAction
            index={faqs.length}
          />
        </div>
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={storyViewport}
        variants={drawIn(0.24)}
        className="pointer-events-none absolute bottom-0 left-0 right-0 z-20 flex h-[60px] w-full translate-y-[45%] justify-center overflow-hidden opacity-90"
      >
        <div className="relative flex h-16 w-[150%] max-w-none items-center justify-center md:h-24">
          <DividerDoodle strokeColor="var(--ink)" strokeWidth={4} className="h-16 w-full md:h-24" preserveAspectRatio="none" />
          <div className="absolute left-[24%] top-2 opacity-75">
            <Crumb4 className="h-3 w-3" fillColor="var(--cream)" strokeColor="var(--terracotta)" />
          </div>
          <div className="absolute right-[22%] top-5 opacity-75">
            <Trail3 className="h-5 w-24" strokeColor="var(--terracotta)" strokeWidth={2.5} />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
