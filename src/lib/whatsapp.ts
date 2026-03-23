import { Language, OrderFormData, isOrderableProduct } from '@/types';
import { products, deliverySlots, siteConfig } from './data';
import { translateText, uiCopy } from './i18n-config';

export function buildWhatsAppUrl(data: OrderFormData, language: Language): string {
  const selectedProduct = products.find((product) => product.id === data.productId);
  const product = selectedProduct && isOrderableProduct(selectedProduct) ? selectedProduct : null;
  const slot = deliverySlots.find((s) => s.id === data.slotId);
  const copy = uiCopy[language];
  const categoryLabel =
    product?.category === 'core'
      ? copy.whatsapp.categories.core
      : product?.category === 'drop'
        ? copy.whatsapp.categories.drop
        : copy.whatsapp.categories.special;

  if (!product || !slot) {
    throw new Error(copy.whatsapp.errors.productOrSlot);
  }

  let message = `🍪 *${copy.whatsapp.labels.title}*

*${copy.whatsapp.labels.name}:* ${data.name.trim()}
*${copy.whatsapp.labels.phone}:* ${data.phone.trim()}
*${copy.whatsapp.labels.bloco}:* ${data.bloco.trim()}

*${copy.whatsapp.labels.order}:* ${translateText(product.name, language)} (${product.cookieCount} cookies) — R$ ${product.price}
*${copy.whatsapp.labels.category}:* ${categoryLabel}
*${copy.whatsapp.labels.delivery}:* ${translateText(slot.label, language)} (${translateText(slot.dateLabel, language)})`;

  if (product.limitedNote) {
    message += `
*${copy.whatsapp.labels.offerNote}:* ${translateText(product.limitedNote, language)}`;
  }

  if (data.flavourNote.trim()) {
    message += `
*${copy.whatsapp.labels.flavour}:* ${data.flavourNote.trim()}`;
  }

  if (data.allergyNote.trim()) {
    message += `
*${copy.whatsapp.labels.allergies}:* ${data.allergyNote.trim()}`;
  }

  if (data.isGift) {
    message += `

🎁 *${copy.whatsapp.labels.giftTitle}*
*${copy.whatsapp.labels.giftFor}:* ${data.giftRecipient.trim()}
*${copy.whatsapp.labels.giftMessage}:* ${data.giftMessage.trim()}`;
  }

  message += `

---
${copy.whatsapp.labels.closing}`;

  return buildWhatsAppPrefillUrl(message);
}

export function buildWhatsAppPrefillUrl(message: string): string {
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodedMessage}`;
}
