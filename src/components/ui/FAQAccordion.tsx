'use client';

import { motion } from 'framer-motion';
import { IconMinus, IconPlus } from '@/components/icons/DoodleIcons';
import { Arrow2, DividerDoodle, Sparkle2 } from '@/components/decorative';
import { revealUp, storyViewport } from '@/lib/storytelling';

interface FAQAccordionProps {
  question: string;
  answer?: string;
  isOpen: boolean;
  onToggle: () => void;
  isAction?: boolean;
  index?: number;
}

export function FAQAccordion({ question, answer, isOpen, onToggle, isAction, index = 0 }: FAQAccordionProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={storyViewport}
      variants={revealUp(index * 0.05, 14)}
      className={`group/faq relative mb-4 overflow-hidden rounded-drawn border-l-[3px] border-r-[3px] border-t-[3px] sm:mb-6 ${
        isOpen ? 'border-orange bg-butter/25 shadow-[4px_4px_0_var(--orange)]' : 'border-ink bg-white shadow-[3px_3px_0_var(--butter)]'
      }`}
    >
      <div className="pointer-events-none absolute -bottom-[2px] left-0 z-10 h-[8px] w-full text-ink">
        <DividerDoodle strokeColor="var(--ink)" strokeWidth={3} className="absolute -bottom-1 left-0 h-8 w-full" preserveAspectRatio="none" />
      </div>

      <div className="pointer-events-none absolute right-12 top-4 hidden transition-all duration-300 md:block">
        {isAction ? (
          <div className="opacity-0 transition-all duration-300 group-hover/faq:translate-x-2 group-hover/faq:opacity-100 group-focus-within/faq:translate-x-2 group-focus-within/faq:opacity-100">
            <Arrow2 className="h-9 w-9" strokeColor="var(--terracotta)" />
          </div>
        ) : (
          <div
            className={`transition-all duration-300 ${
              isOpen
                ? 'translate-y-0 opacity-90'
                : 'opacity-50 group-hover/faq:-translate-y-1 group-hover/faq:rotate-6 group-hover/faq:opacity-90 group-focus-within/faq:-translate-y-1 group-focus-within/faq:rotate-6 group-focus-within/faq:opacity-90'
            }`}
          >
            <Sparkle2 className="h-7 w-7" strokeColor={isOpen ? 'var(--terracotta)' : 'var(--caramel)'} strokeWidth={2.5} />
          </div>
        )}
      </div>

      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className={`group flex min-h-[52px] w-full items-center justify-between gap-4 p-4 text-left outline-none transition-colors focus-visible:ring-2 focus-visible:ring-orange/50 focus-visible:ring-offset-2 focus-visible:ring-offset-cream sm:p-5 ${
          isOpen ? 'bg-butter/20' : 'hover:bg-butter/20'
        }`}
      >
        <span className={`text-ink ${isAction ? 'font-display text-lg font-bold tracking-wide text-orange group-hover:underline' : 'text-base font-semibold leading-snug'}`}>
          {question}
        </span>
        {!isAction && (
          <span
            className={`ml-4 inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-[2px] transition-all ${
              isOpen
                ? 'border-orange bg-orange text-cream shadow-[2px_2px_0_var(--ink)]'
                : 'border-sand bg-butter/60 text-ink group-hover:border-orange group-hover:text-orange'
            }`}
          >
            {isOpen ? <IconMinus size={24} className="text-current" /> : <IconPlus size={24} className="text-current" />}
          </span>
        )}
      </button>

      {!isAction && (
        <div
          className={`overflow-hidden px-4 transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[220px] pb-4 opacity-100' : 'max-h-0 opacity-0'}`}
          aria-hidden={!isOpen}
        >
          <div className="border-t border-sand/70 pt-3 text-sm leading-relaxed text-ink-muted">{answer}</div>
        </div>
      )}
    </motion.div>
  );
}
