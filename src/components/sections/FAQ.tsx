'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FAQAccordion } from '@/components/ui/FAQAccordion';
import { Crumb4, DividerDoodle, Sparkle1, Trail3 } from '@/components/decorative';
import { siteConfig } from '@/lib/data';
import { drawIn, revealScale, revealUp, storyViewport } from '@/lib/storytelling';

const faqs = [
  {
    q: 'Até quando posso fazer um pedido?',
    a: 'Aceitos até sexta-feira às 18h.',
  },
  {
    q: 'Vocês entregam fora do condomínio?',
    a: 'Apenas dentro do condomínio, pessoalmente.',
  },
  {
    q: 'Como funciona o pagamento via Pix?',
    a: 'A chave será enviada pelo WhatsApp logo após a confirmação do seu pedido e disponibilidade.',
  },
  {
    q: 'Tem opção sem glúten ou vegana?',
    a: 'Não. Todos os nossos produtos contêm glúten, ovos e laticínios no momento.',
  },
  {
    q: 'Posso cancelar meu pedido?',
    a: 'Sim, até sábado às 8h enviando uma mensagem via WhatsApp.',
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleSupportClick = () => {
    window.open(`https://wa.me/${siteConfig.whatsappNumber}`, '_blank');
  };

  return (
    <section id="faq" className="relative bg-butter px-6 py-20">
      <div className="mx-auto max-w-2xl">
        <motion.div initial="hidden" whileInView="visible" viewport={storyViewport} className="group/faq-heading mb-12 text-center">
          <div className="relative inline-block">
            <motion.h2 variants={revealUp(0)} className="mb-2 font-display text-4xl font-bold tracking-tight text-ink">
              Dúvidas Frequentes
            </motion.h2>
            <motion.div
              variants={revealScale(0.14, 0.84)}
              className="pointer-events-none absolute -right-8 -top-1 hidden transition-transform duration-300 group-hover/faq-heading:-translate-y-1 group-hover/faq-heading:rotate-6 md:block"
            >
              <Sparkle1 className="h-8 w-8" fillColor="var(--cream)" strokeColor="var(--terracotta)" />
            </motion.div>
          </div>
          <motion.p variants={revealUp(0.08, 16)} className="font-body text-ink-muted">
            Prazo, pagamentos e entregas.
          </motion.p>
        </motion.div>

        <div className="space-y-3">
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
            question="Não encontrei minha dúvida"
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
