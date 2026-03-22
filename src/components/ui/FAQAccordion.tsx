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
      className="group/faq relative mb-6 overflow-hidden rounded-drawn border-l-[3px] border-r-[3px] border-t-[3px] border-ink bg-white"
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
        className="group flex min-h-[44px] w-full items-center justify-between p-4 text-left font-medium outline-none transition-colors hover:bg-butter/20 focus-visible:ring-2 focus-visible:ring-orange/50"
      >
        <span className={`text-ink ${isAction ? 'font-display text-lg font-bold tracking-wide text-orange group-hover:underline' : ''}`}>
          {question}
        </span>
        {!isAction && (
          <span className="ml-4 shrink-0 transition-colors">
            {isOpen ? <IconMinus size={28} className="text-orange" /> : <IconPlus size={28} className="text-ink group-hover:text-orange" />}
          </span>
        )}
      </button>

      {!isAction && (
        <div
          className={`px-4 text-sm leading-relaxed text-ink-muted transition-all duration-300 ease-in-out ${
            isOpen ? 'max-h-[200px] pb-4 opacity-100' : 'max-h-0 overflow-hidden opacity-0'
          }`}
          aria-hidden={!isOpen}
        >
          {answer}
        </div>
      )}
    </motion.div>
  );
}
