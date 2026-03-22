import { Product, DeliverySlot } from '@/types';

export const siteConfig = {
  name: 'Massa',
  tagline: 'Feito com amor,\nentregue na sua porta.',
  subTagline: 'Cookies artesanais no seu condomínio, todo fim de semana.',
  whatsappNumber: '5541999999999',
  instagramHandle: '@massacookies',
  instagramUrl: 'https://instagram.com/massacookies',
  pixKey: 'seu@email.com',
  allergenStatement: 'Todos os nossos produtos contêm: glúten, ovos e laticínios. Podem conter traços de amendoim e castanhas.',
  deliveryNote: 'Entrega feita pessoalmente no seu apartamento.',
  orderCutoffNote: 'Pedidos até sexta-feira às 18h para entrega no fim de semana.',
};

export const products: Product[] = [
  {
    id: 'caixinha',
    name: 'Caixinha',
    subtitle: '4 cookies',
    price: 25,
    available: true,
    description: 'Nossa caixinha perfeita para experimentar ou matar a vontade do fim de semana.',
    cookieCount: 4,
    flavours: ['Tradicional', 'Triplo Chocolate'],
    allergens: ['Glúten', 'Ovos', 'Laticínios', 'Amendoim'],
  },
  {
    id: 'classica',
    name: 'Caixa Clássica',
    subtitle: '8 cookies',
    price: 52,
    available: true,
    badge: 'Mais pedido',
    description: 'A favorita do condomínio. Diversidade de sabores para a família toda.',
    cookieCount: 8,
    flavours: ['Tradicional', 'Triplo Chocolate', 'Red Velvet'],
    allergens: ['Glúten', 'Ovos', 'Laticínios', 'Amendoim'],
  },
  {
    id: 'presente',
    name: 'Caixa Presente',
    subtitle: '12 cookies + cartão',
    price: 82,
    available: true,
    description: 'Embalagem especial com fita e cartão manuscrito para surpreender alguém especial.',
    cookieCount: 12,
    flavours: ['Tradicional', 'Triplo Chocolate', 'Red Velvet', 'Macadâmia'],
    allergens: ['Glúten', 'Ovos', 'Laticínios', 'Amendoim', 'Macadâmia'],
  }
];

export const deliverySlots: DeliverySlot[] = [
  {
    id: 'sat-morning',
    label: 'Sábado manhã',
    dateLabel: 'Sáb — 9h às 12h',
    remaining: 0,
    total: 3,
  },
  {
    id: 'sat-afternoon',
    label: 'Sábado tarde',
    dateLabel: 'Sáb — 14h às 17h',
    remaining: 2,
    total: 3,
  },
  {
    id: 'sun-morning',
    label: 'Domingo manhã',
    dateLabel: 'Dom — 9h às 12h',
    remaining: 4,
    total: 5,
  },
  {
    id: 'sun-afternoon',
    label: 'Domingo tarde',
    dateLabel: 'Dom — 14h às 17h',
    remaining: 5,
    total: 5,
  },
];
