import { OrderFormData } from '@/types';
import { products, deliverySlots, siteConfig } from './data';

export function buildWhatsAppUrl(data: OrderFormData): string {
  const product = products.find((p) => p.id === data.productId);
  const slot = deliverySlots.find((s) => s.id === data.slotId);

  if (!product || !slot) {
    throw new Error('Produto ou slot não encontrado.');
  }

  let message = `🍪 *Novo Pedido — Massa*

*Nome:* ${data.name.trim()}
*WhatsApp:* ${data.phone.trim()}
*Bloco/Apt:* ${data.bloco.trim()}

*Pedido:* ${product.name} (${product.cookieCount} cookies) — R$ ${product.price}
*Entrega:* ${slot.label} (${slot.dateLabel})`;

  if (data.flavourNote.trim()) {
    message += `\n*Sabor:* ${data.flavourNote.trim()}`;
  }

  if (data.allergyNote.trim()) {
    message += `\n*Alergias:* ${data.allergyNote.trim()}`;
  }

  if (data.isGift) {
    message += `\n\n🎁 *É um presente*
*Para:* ${data.giftRecipient.trim()}
*Mensagem:* ${data.giftMessage.trim()}`;
  }

  message += `\n\n---\nAguardo confirmação e chave Pix! 🙏`;

  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodedMessage}`;
}
