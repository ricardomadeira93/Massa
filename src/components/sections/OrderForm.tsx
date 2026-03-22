'use client';

import { FormEvent, Suspense, useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { products, deliverySlots } from '@/lib/data';
import { buildWhatsAppUrl } from '@/lib/whatsapp';
import { SlotSelector } from '@/components/ui/SlotSelector';
import { AllergenBanner } from '@/components/ui/AllergenBanner';
import { Button } from '@/components/ui/Button';
import { Arrow3, Heart2, Scribble1, Sparkle1, Swirl2, Trail1 } from '@/components/decorative';
import { drawIn, revealScale, revealUp, storyViewport } from '@/lib/storytelling';

function OrderFormContent() {
  const searchParams = useSearchParams();

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    bloco: '',
    productId: '',
    slotId: '',
    flavourNote: '',
    allergyNote: '',
    isGift: false,
    giftRecipient: '',
    giftMessage: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    const produto = searchParams.get('produto');
    if (produto && products.some((p) => p.id === produto && p.available)) {
      setFormData((prev) => ({ ...prev, productId: produto }));
    }
  }, [searchParams]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSlotSelect = (id: string) => {
    setFormData((prev) => ({ ...prev, slotId: id }));
    if (errors.slotId) setErrors((prev) => ({ ...prev, slotId: '' }));
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Nome é obrigatório.';
    if (!formData.phone.trim()) newErrors.phone = 'WhatsApp é obrigatório.';
    if (!formData.bloco.trim()) newErrors.bloco = 'Bloco/Apt é obrigatório.';
    if (!formData.productId) newErrors.productId = 'Selecione uma caixa.';
    if (!formData.slotId) newErrors.slotId = 'Selecione um horário.';
    if (formData.isGift && !formData.giftRecipient.trim()) {
      newErrors.giftRecipient = 'Nome do presenteado é obrigatório.';
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      const firstErrorField = Object.keys(newErrors)[0];
      const element = document.getElementById(`field-${firstErrorField}`);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        element.focus();
      }
      return false;
    }
    return true;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (validate()) {
      try {
        const url = buildWhatsAppUrl(formData);
        window.open(url, '_blank', 'noopener,noreferrer');
        window.location.href = '/obrigado';
      } catch (err) {
        console.error(err);
      }
    }
  };

  const getInputStyles = (errName: string) => `
    w-full bg-white border-[3px] rounded-drawn px-4 py-3 text-base text-ink min-h-[50px]
    transition-all outline-none placeholder:text-ink-faint shadow-[3px_3px_0_var(--ink)]
    focus:-translate-y-1
    ${errors[errName] ? 'border-terracotta ring-2 ring-terracotta focus:shadow-[4px_4px_0_var(--terracotta)]' : 'border-ink focus:border-orange focus:shadow-[4px_4px_0_var(--orange)]'}
  `;

  return (
    <section id="pedido" className="relative overflow-hidden border-y border-sand bg-cream px-6 py-20">
      <div className="relative mx-auto max-w-3xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={storyViewport}
          variants={drawIn(0.08, '100% 0% 0% 0%')}
          className="pointer-events-none absolute -left-16 -top-12 hidden opacity-60 md:block"
        >
          <Swirl2 strokeColor="var(--caramel)" strokeWidth={3} className="h-24 w-24" />
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={storyViewport} className="mb-12 text-center">
          <div className="relative inline-block">
            <motion.h2 variants={revealUp(0)} className="mb-3 font-display text-4xl font-bold tracking-tight text-ink">
              Fazer <span className="relative inline-block">pedido</span>
            </motion.h2>
            <motion.div variants={drawIn(0.18)} className="pointer-events-none absolute -bottom-3 left-1/2 w-32 -translate-x-1/2">
              <Trail1 className="h-6 w-full" strokeColor="var(--terracotta)" strokeWidth={2.5} />
            </motion.div>
          </div>
          <motion.p variants={revealUp(0.08, 16)} className="font-body text-lg text-ink-muted">
            Preencha os dados e confirme pelo WhatsApp.
          </motion.p>
        </motion.div>

        <motion.form
          initial="hidden"
          whileInView="visible"
          viewport={storyViewport}
          variants={revealUp(0.12, 18)}
          onSubmit={handleSubmit}
          className="space-y-8"
          noValidate
        >
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="space-y-1">
              <label htmlFor="name" className="ml-1 text-sm font-medium text-ink-muted">
                Seu nome
              </label>
              <input
                id="field-name"
                name="name"
                type="text"
                placeholder="Ex: Mariana"
                value={formData.name}
                onChange={handleChange}
                required
                className={getInputStyles('name')}
              />
              {errors.name && <p className="ml-1 mt-1 text-xs font-medium text-red-500">{errors.name}</p>}
            </div>

            <div className="space-y-1">
              <label htmlFor="phone" className="ml-1 text-sm font-medium text-ink-muted">
                WhatsApp
              </label>
              <input
                id="field-phone"
                name="phone"
                type="tel"
                placeholder="(41) 9 ..."
                value={formData.phone}
                onChange={handleChange}
                required
                className={getInputStyles('phone')}
              />
              {errors.phone && <p className="ml-1 mt-1 text-xs font-medium text-red-500">{errors.phone}</p>}
            </div>

            <div className="space-y-1 md:col-span-2">
              <label htmlFor="bloco" className="ml-1 text-sm font-medium text-ink-muted">
                Bloco e Apartamento
              </label>
              <input
                id="field-bloco"
                name="bloco"
                type="text"
                placeholder="Ex: Bloco B, Apt 302"
                value={formData.bloco}
                onChange={handleChange}
                required
                className={getInputStyles('bloco')}
              />
              {errors.bloco && <p className="ml-1 mt-1 text-xs font-medium text-red-500">{errors.bloco}</p>}
            </div>

            <div className="space-y-1 md:col-span-2">
              <label htmlFor="productId" className="ml-1 text-sm font-medium text-ink-muted">
                Qual caixa deseja?
              </label>
              <select
                id="field-productId"
                name="productId"
                value={formData.productId}
                onChange={handleChange}
                required
                className={getInputStyles('productId')}
              >
                <option value="" disabled>
                  Selecione uma opção...
                </option>
                {products
                  .filter((p) => p.available)
                  .map((p) => (
                    <option key={p.id} value={p.id}>
                      {p.name} — R$ {p.price}
                    </option>
                  ))}
              </select>
              {errors.productId && <p className="ml-1 mt-1 text-xs font-medium text-red-500">{errors.productId}</p>}
            </div>

            <div className="space-y-2 md:col-span-2" id="field-slotId">
              <label className="ml-1 mb-1 block text-sm font-medium text-ink-muted">Horário de entrega</label>
              <SlotSelector
                slots={deliverySlots}
                selectedId={formData.slotId}
                onSelect={handleSlotSelect}
                error={!!errors.slotId}
              />
              {errors.slotId && <p className="ml-1 text-xs font-medium text-red-500">{errors.slotId}</p>}
            </div>

            <div className="space-y-1 md:col-span-2">
              <label htmlFor="flavourNote" className="ml-1 text-sm font-medium text-ink-muted">
                Sabores desejados <span className="font-normal opacity-70">(Opcional)</span>
              </label>
              <textarea
                id="field-flavourNote"
                name="flavourNote"
                rows={2}
                placeholder="Ex: sem amendoim, mais chocolate"
                value={formData.flavourNote}
                onChange={handleChange}
                className={getInputStyles('flavourNote')}
              />
            </div>

            <div className="space-y-1 md:col-span-2">
              <label htmlFor="allergyNote" className="ml-1 text-sm font-medium text-ink-muted">
                Observações sobre alergias <span className="font-normal opacity-70">(Opcional)</span>
              </label>
              <input
                id="field-allergyNote"
                name="allergyNote"
                type="text"
                placeholder="Ex: Intolerância à lactose"
                value={formData.allergyNote}
                onChange={handleChange}
                className={getInputStyles('allergyNote')}
              />
            </div>

            <div className="relative mt-4 space-y-4 rounded-drawn border-[3px] border-ink bg-butter/50 p-6 shadow-[4px_4px_0_var(--ink)] md:col-span-2">
              <motion.div
                animate={{
                  opacity: formData.isGift ? 1 : 0.45,
                  scale: formData.isGift ? 1.05 : 0.92,
                  rotate: formData.isGift ? 0 : -12,
                  y: formData.isGift ? -2 : 0,
                }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                className="pointer-events-none absolute right-5 top-4 hidden md:block"
              >
                <Heart2 className="h-8 w-8" fillColor="var(--terracotta)" strokeColor="var(--ink)" />
              </motion.div>

              <label className="group flex cursor-pointer items-center gap-3">
                <div className="relative flex min-h-[44px] min-w-[44px] items-center justify-center">
                  <input
                    type="checkbox"
                    name="isGift"
                    checked={formData.isGift}
                    onChange={handleChange}
                    className="h-6 w-6 cursor-pointer rounded-drawn border-[3px] border-ink text-orange shadow-[2px_2px_0_var(--ink)] accent-orange focus:ring-2 focus:ring-orange/50 focus:ring-offset-2 focus:ring-offset-cream"
                  />
                </div>
                <span className="mt-1 font-display text-xl font-bold leading-none text-ink transition-colors group-hover:text-orange">
                  É um presente?
                </span>
              </label>

              {formData.isGift && (
                <div className="animate-in slide-in-from-top-2 fade-in mt-4 grid gap-6 border-t border-sand/50 pt-4 duration-300">
                  <div className="space-y-1">
                    <label htmlFor="giftRecipient" className="ml-1 text-sm font-medium text-ink-muted">
                      Para quem é?
                    </label>
                    <input
                      id="field-giftRecipient"
                      name="giftRecipient"
                      type="text"
                      placeholder="Nome do presenteado"
                      value={formData.giftRecipient}
                      onChange={handleChange}
                      required
                      className={getInputStyles('giftRecipient')}
                    />
                    {errors.giftRecipient && (
                      <p className="ml-1 mt-1 text-xs font-medium text-red-500">{errors.giftRecipient}</p>
                    )}
                  </div>

                  <div className="space-y-1">
                    <div className="mb-1 flex items-baseline justify-between">
                      <label htmlFor="giftMessage" className="ml-1 text-sm font-medium text-ink-muted">
                        Mensagem do cartão impresso
                      </label>
                      <span className={`text-xs ${formData.giftMessage.length > 120 ? 'text-red-500' : 'text-ink-faint'}`}>
                        {formData.giftMessage.length}/120
                      </span>
                    </div>
                    <textarea
                      id="field-giftMessage"
                      name="giftMessage"
                      rows={3}
                      maxLength={120}
                      placeholder="Escreva uma mensagem carinhosa..."
                      value={formData.giftMessage}
                      onChange={handleChange}
                      className={getInputStyles('giftMessage')}
                    />
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="space-y-6 pt-4">
            <AllergenBanner />

            <div className="group/submit relative">
              <Button type="submit" variant="solid-orange" className="w-full py-4 text-lg leading-none">
                Enviar pedido via WhatsApp
              </Button>

              <motion.div
                variants={revealScale(0.24, 0.8)}
                initial="hidden"
                whileInView="visible"
                viewport={storyViewport}
                className="pointer-events-none absolute -left-5 top-3 hidden opacity-75 transition-transform duration-300 group-hover/submit:-translate-y-1 group-hover/submit:-rotate-6 group-focus-within/submit:-translate-y-1 group-focus-within/submit:-rotate-6 md:block"
              >
                <Sparkle1 className="h-8 w-8" fillColor="var(--butter)" strokeColor="var(--terracotta)" />
              </motion.div>

              <div className="pointer-events-none absolute -right-8 bottom-3 hidden opacity-0 transition-all duration-300 group-hover/submit:translate-x-2 group-hover/submit:-translate-y-1 group-hover/submit:opacity-100 group-focus-within/submit:translate-x-2 group-focus-within/submit:-translate-y-1 group-focus-within/submit:opacity-100 md:block">
                <Arrow3 className="h-12 w-12" strokeColor="var(--terracotta)" strokeWidth={2.5} />
              </div>

              <motion.div
                variants={revealScale(0.28, 0.78)}
                initial="hidden"
                whileInView="visible"
                viewport={storyViewport}
                className="pointer-events-none absolute -right-7 bottom-5 hidden opacity-80 transition-transform duration-300 group-hover/submit:scale-110 group-hover/submit:-translate-y-2 group-hover/submit:-rotate-12 md:block"
              >
                <Scribble1 strokeColor="var(--terracotta)" strokeWidth={4} className="h-10 w-10" />
              </motion.div>
            </div>
          </div>
        </motion.form>
      </div>
    </section>
  );
}

export function OrderForm() {
  return (
    <Suspense
      fallback={
        <section id="pedido" className="flex min-h-[500px] items-center justify-center border-y border-sand bg-cream px-6 py-20">
          <div className="font-display text-2xl text-ink-muted animate-pulse">Carregando formulário...</div>
        </section>
      }
    >
      <OrderFormContent />
    </Suspense>
  );
}
