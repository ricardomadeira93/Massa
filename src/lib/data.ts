import { DeliverySlot, OrderableProduct, Product, SubscriptionProduct, isOrderableProduct, isSubscriptionProduct } from '@/types';

export const siteConfig = {
  name: 'Massa',
  tagline: {
    pt: 'Feito com amor,\nentregue na sua porta.',
    en: 'Made with care,\ndelivered to your door.',
    es: 'Hecho con cariño,\nentregado en tu puerta.',
  },
  subTagline: {
    pt: 'Cookies artesanais no seu condomínio, todo fim de semana.',
    en: 'Handmade cookies in your condominium, every weekend.',
    es: 'Cookies artesanales en tu condominio, cada fin de semana.',
  },
  whatsappNumber: '5541999999999',
  instagramHandle: '@massacookies',
  instagramUrl: 'https://instagram.com/massacookies',
  pixKey: 'seu@email.com',
  allergenStatement: {
    pt: 'Todos os nossos produtos contêm glúten, ovos e laticínios. Podem conter traços de amendoim e castanhas.',
    en: 'All our products contain gluten, eggs, and dairy. They may contain traces of peanuts and tree nuts.',
    es: 'Todos nuestros productos contienen gluten, huevos y lácteos. Pueden contener trazas de maní y frutos secos.',
  },
  deliveryNote: {
    pt: 'Entrega feita pessoalmente no seu apartamento.',
    en: 'Delivered in person right to your apartment.',
    es: 'Entrega hecha personalmente en tu apartamento.',
  },
  orderCutoffNote: {
    pt: 'Pedidos até sexta-feira, às 18h, para entrega no fim de semana.',
    en: 'Orders close on Friday at 6:00 PM for weekend delivery.',
    es: 'Los pedidos cierran el viernes a las 18:00 para entrega el fin de semana.',
  },
};

export const products: Product[] = [
  {
    id: 'caixinha',
    category: 'core',
    ctaMode: 'order',
    illustration: 'mini',
    sectionLabel: {
      pt: 'Linha permanente',
      en: 'Permanent line',
      es: 'Línea permanente',
    },
    ctaLabel: {
      pt: 'Pedir caixa',
      en: 'Order box',
      es: 'Pedir caja',
    },
    name: {
      pt: 'Caixinha',
      en: 'Little Box',
      es: 'Cajita',
    },
    subtitle: {
      pt: '4 cookies',
      en: '4 cookies',
      es: '4 cookies',
    },
    price: 25,
    available: true,
    description: {
      pt: 'Nossa porta de entrada: rápida de escolher, fácil de pedir e perfeita para matar a vontade do fim de semana.',
      en: 'Our entry box: quick to choose, easy to order, and perfect for a weekend craving.',
      es: 'Nuestra caja de entrada: rápida de elegir, fácil de pedir y perfecta para darte un gusto el fin de semana.',
    },
    cookieCount: 4,
    flavours: [
      { pt: 'Tradicional', en: 'Classic', es: 'Tradicional' },
      { pt: 'Triplo Chocolate', en: 'Triple Chocolate', es: 'Triple Chocolate' },
    ],
    allergens: ['Glúten', 'Ovos', 'Laticínios', 'Amendoim'],
  },
  {
    id: 'classica',
    category: 'core',
    ctaMode: 'order',
    illustration: 'classica',
    sectionLabel: {
      pt: 'Linha permanente',
      en: 'Permanent line',
      es: 'Línea permanente',
    },
    ctaLabel: {
      pt: 'Pedir caixa',
      en: 'Order box',
      es: 'Pedir caja',
    },
    name: {
      pt: 'Caixa Clássica',
      en: 'Classic Box',
      es: 'Caja Clásica',
    },
    subtitle: {
      pt: '8 cookies',
      en: '8 cookies',
      es: '8 cookies',
    },
    price: 52,
    available: true,
    badge: {
      pt: 'Mais pedida',
      en: 'Most ordered',
      es: 'La más pedida',
    },
    description: {
      pt: 'A favorita do condomínio. Diversidade de sabores para a família toda, sem complicar a decisão.',
      en: 'The condominium favorite. A mix of flavours for the whole family, without making the choice harder.',
      es: 'La favorita del condominio. Una variedad de sabores para toda la familia, sin complicar la decisión.',
    },
    cookieCount: 8,
    flavours: [
      { pt: 'Tradicional', en: 'Classic', es: 'Tradicional' },
      { pt: 'Triplo Chocolate', en: 'Triple Chocolate', es: 'Triple Chocolate' },
      { pt: 'Red Velvet', en: 'Red Velvet', es: 'Red Velvet' },
    ],
    allergens: ['Glúten', 'Ovos', 'Laticínios', 'Amendoim'],
  },
  {
    id: 'presente',
    category: 'core',
    ctaMode: 'order',
    illustration: 'presente',
    sectionLabel: {
      pt: 'Linha permanente',
      en: 'Permanent line',
      es: 'Línea permanente',
    },
    ctaLabel: {
      pt: 'Pedir caixa',
      en: 'Order box',
      es: 'Pedir caja',
    },
    name: {
      pt: 'Caixa Presente',
      en: 'Gift Box',
      es: 'Caja Regalo',
    },
    subtitle: {
      pt: '12 cookies + cartão',
      en: '12 cookies + card',
      es: '12 cookies + tarjeta',
    },
    price: 82,
    available: true,
    description: {
      pt: 'Embalagem especial com fita e cartão manuscrito para surpreender alguém especial com um presente cheio de carinho.',
      en: 'Special packaging with ribbon and a handwritten card, made to surprise someone with a gift full of care.',
      es: 'Empaque especial con cinta y tarjeta manuscrita para sorprender a alguien con un regalo lleno de cariño.',
    },
    cookieCount: 12,
    flavours: [
      { pt: 'Tradicional', en: 'Classic', es: 'Tradicional' },
      { pt: 'Triplo Chocolate', en: 'Triple Chocolate', es: 'Triple Chocolate' },
      { pt: 'Red Velvet', en: 'Red Velvet', es: 'Red Velvet' },
      { pt: 'Macadâmia', en: 'Macadamia', es: 'Macadamia' },
    ],
    allergens: ['Glúten', 'Ovos', 'Laticínios', 'Amendoim', 'Macadâmia'],
  },
  {
    id: 'drop-outono',
    category: 'drop',
    ctaMode: 'order',
    illustration: 'mini',
    sectionLabel: {
      pt: 'Edição da estação',
      en: 'Seasonal edition',
      es: 'Edición de temporada',
    },
    ctaLabel: {
      pt: 'Reservar drop',
      en: 'Reserve drop',
      es: 'Reservar drop',
    },
    badge: {
      pt: 'Drop da semana',
      en: 'Drop of the week',
      es: 'Drop de la semana',
    },
    limitedNote: {
      pt: 'Lote curto · enquanto durar',
      en: 'Short batch · while it lasts',
      es: 'Lote corto · hasta agotar',
    },
    name: {
      pt: 'Drop de Outono',
      en: 'Autumn Drop',
      es: 'Drop de Otoño',
    },
    subtitle: {
      pt: '6 cookies sazonais',
      en: '6 seasonal cookies',
      es: '6 cookies de temporada',
    },
    price: 39,
    available: true,
    description: {
      pt: 'Uma edição de temporada com sabores do momento, feita para quem gosta de experimentar novidades da Massa.',
      en: 'A seasonal edition with flavours of the moment, made for anyone who loves trying Massa’s newest ideas.',
      es: 'Una edición de temporada con sabores del momento, pensada para quienes disfrutan probar las novedades de Massa.',
    },
    cookieCount: 6,
    flavours: [
      { pt: 'Maçã com canela', en: 'Apple cinnamon', es: 'Manzana con canela' },
      { pt: 'Caramelo tostado', en: 'Toasted caramel', es: 'Caramelo tostado' },
      { pt: 'Chai chocolate', en: 'Chai chocolate', es: 'Chocolate chai' },
    ],
    allergens: ['Glúten', 'Ovos', 'Laticínios', 'Amendoim'],
  },
  {
    id: 'especial-cinema',
    category: 'special',
    ctaMode: 'order',
    illustration: 'presente',
    sectionLabel: {
      pt: 'Edição temática',
      en: 'Themed edition',
      es: 'Edición temática',
    },
    ctaLabel: {
      pt: 'Reservar edição',
      en: 'Reserve edition',
      es: 'Reservar edición',
    },
    badge: {
      pt: 'Tema do mês',
      en: 'Theme of the month',
      es: 'Tema del mes',
    },
    limitedNote: {
      pt: 'Especial por tempo limitado',
      en: 'Special for a limited time',
      es: 'Especial por tiempo limitado',
    },
    name: {
      pt: 'Especial Cinema em Casa',
      en: 'Movie Night Special',
      es: 'Especial Cine en Casa',
    },
    subtitle: {
      pt: '8 cookies temáticos',
      en: '8 themed cookies',
      es: '8 cookies temáticos',
    },
    price: 58,
    available: true,
    description: {
      pt: 'Uma edição temática para momentos específicos, com narrativa própria e o mesmo checkout simples do resto da casa.',
      en: 'A themed edition for specific moments, with its own story and the same simple checkout as the rest of the house.',
      es: 'Una edición temática para momentos específicos, con narrativa propia y el mismo checkout simple del resto de la casa.',
    },
    cookieCount: 8,
    flavours: [
      { pt: 'Pipoca caramelizada', en: 'Caramel popcorn', es: 'Palomitas caramelizadas' },
      { pt: 'Triplo chocolate', en: 'Triple chocolate', es: 'Triple chocolate' },
      { pt: 'Baunilha tostada', en: 'Toasted vanilla', es: 'Vainilla tostada' },
    ],
    allergens: ['Glúten', 'Ovos', 'Laticínios', 'Amendoim'],
  },
  {
    id: 'assinatura-fim-de-semana',
    category: 'subscription',
    ctaMode: 'interest',
    illustration: 'classica',
    sectionLabel: {
      pt: 'Em breve',
      en: 'Coming soon',
      es: 'Próximamente',
    },
    ctaLabel: {
      pt: 'Entrar na lista',
      en: 'Join the list',
      es: 'Entrar en la lista',
    },
    badge: {
      pt: 'Assinatura',
      en: 'Subscription',
      es: 'Suscripción',
    },
    name: {
      pt: 'Assinatura de fim de semana',
      en: 'Weekend subscription',
      es: 'Suscripción de fin de semana',
    },
    subtitle: {
      pt: 'em breve',
      en: 'coming soon',
      es: 'próximamente',
    },
    description: {
      pt: 'Receba cookies da Massa em datas combinadas, com sabores escolhidos para deixar o mês mais gostoso.',
      en: 'Receive Massa cookies on selected dates, with flavours chosen to make the month sweeter.',
      es: 'Recibe cookies de Massa en fechas combinadas, con sabores elegidos para hacer el mes más rico.',
    },
    flavours: [
      { pt: 'Sabores do mês', en: 'Flavours of the month', es: 'Sabores del mes' },
      { pt: 'Vagas antecipadas', en: 'Early access spots', es: 'Cupos anticipados' },
      { pt: 'Combinações exclusivas', en: 'Exclusive combinations', es: 'Combinaciones exclusivas' },
    ],
    allergens: ['Glúten', 'Ovos', 'Laticínios', 'Amendoim'],
    available: true,
    teaserBullets: [
      {
        pt: 'vagas antecipadas para edições especiais',
        en: 'early spots for special editions',
        es: 'cupos anticipados para ediciones especiales',
      },
      {
        pt: 'seleção pensada para o mês',
        en: 'a monthly selection designed for the season',
        es: 'una selección pensada para el mes',
      },
      {
        pt: 'combinações exclusivas da casa',
        en: 'exclusive house combinations',
        es: 'combinaciones exclusivas de la casa',
      },
    ],
    interestMessage: {
      pt: 'Oi! Quero saber primeiro quando a assinatura Massa abrir.',
      en: 'Hi! I would love to hear first when the Massa subscription opens.',
      es: '¡Hola! Me gustaría enterarme primero cuando abra la suscripción de Massa.',
    },
  },
];

export const coreProducts: OrderableProduct[] = products.filter(
  (product): product is OrderableProduct => product.category === 'core' && isOrderableProduct(product),
);

export const dropAndSpecialProducts: OrderableProduct[] = products.filter(
  (product): product is OrderableProduct =>
    (product.category === 'drop' || product.category === 'special') && isOrderableProduct(product),
);

export const orderableProducts: OrderableProduct[] = products.filter(isOrderableProduct);

export const subscriptionProducts: SubscriptionProduct[] = products.filter(isSubscriptionProduct);

export const deliverySlots: DeliverySlot[] = [
  {
    id: 'sat-morning',
    label: {
      pt: 'Sábado manhã',
      en: 'Saturday morning',
      es: 'Sábado por la mañana',
    },
    dateLabel: {
      pt: 'Sáb. — 9h às 12h',
      en: 'Sat — 9 AM to 12 PM',
      es: 'Sáb. — 9:00 a 12:00',
    },
    remaining: 0,
    total: 3,
  },
  {
    id: 'sat-afternoon',
    label: {
      pt: 'Sábado tarde',
      en: 'Saturday afternoon',
      es: 'Sábado por la tarde',
    },
    dateLabel: {
      pt: 'Sáb. — 14h às 17h',
      en: 'Sat — 2 PM to 5 PM',
      es: 'Sáb. — 14:00 a 17:00',
    },
    remaining: 2,
    total: 3,
  },
  {
    id: 'sun-morning',
    label: {
      pt: 'Domingo manhã',
      en: 'Sunday morning',
      es: 'Domingo por la mañana',
    },
    dateLabel: {
      pt: 'Dom. — 9h às 12h',
      en: 'Sun — 9 AM to 12 PM',
      es: 'Dom. — 9:00 a 12:00',
    },
    remaining: 4,
    total: 5,
  },
  {
    id: 'sun-afternoon',
    label: {
      pt: 'Domingo tarde',
      en: 'Sunday afternoon',
      es: 'Domingo por la tarde',
    },
    dateLabel: {
      pt: 'Dom. — 14h às 17h',
      en: 'Sun — 2 PM to 5 PM',
      es: 'Dom. — 14:00 a 17:00',
    },
    remaining: 5,
    total: 5,
  },
];
