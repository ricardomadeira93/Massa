export type Language = 'pt' | 'en' | 'es';
export type LocalizedText = Record<Language, string>;

export type ProductCategory = 'core' | 'drop' | 'special' | 'subscription';
export type ProductCtaMode = 'order' | 'interest';
export type ProductIllustration = 'classica' | 'presente' | 'mini' | 'festa';

interface BaseProduct {
  id: string;
  category: ProductCategory;
  illustration: ProductIllustration;
  name: LocalizedText;
  subtitle: LocalizedText;
  description: LocalizedText;
  flavours: LocalizedText[];
  allergens: string[];
  available: boolean;
  badge?: LocalizedText;
  sectionLabel?: LocalizedText;
  limitedNote?: LocalizedText;
  ctaLabel: LocalizedText;
}

export interface OrderableProduct extends BaseProduct {
  category: 'core' | 'drop' | 'special';
  ctaMode: 'order';
  price: number;
  cookieCount: number;
}

export interface SubscriptionProduct extends BaseProduct {
  category: 'subscription';
  ctaMode: 'interest';
  teaserBullets: LocalizedText[];
  interestMessage: LocalizedText;
}

export type Product = OrderableProduct | SubscriptionProduct;

export function isOrderableProduct(product: Product): product is OrderableProduct {
  return product.ctaMode === 'order';
}

export function isSubscriptionProduct(product: Product): product is SubscriptionProduct {
  return product.category === 'subscription';
}

export interface DeliverySlot {
  id: string;
  label: LocalizedText;
  dateLabel: LocalizedText;
  remaining: number;
  total: number;
}

export interface OrderFormData {
  name: string;
  phone: string;
  bloco: string;
  productId: string;
  flavourNote: string;
  slotId: string;
  isGift: boolean;
  giftRecipient: string;
  giftMessage: string;
  allergyNote: string;
}
