export interface Product {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  price: number;
  cookieCount: number;
  flavours: string[];
  allergens: string[];
  available: boolean;
  badge?: string;
}

export interface DeliverySlot {
  id: string;
  label: string;
  dateLabel: string;
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
