import { DeliverySlot, OrderableProduct, Product, SubscriptionProduct, isOrderableProduct, isSubscriptionProduct } from '@/types';
import { showSeasonalDrop, showSubscription } from '@/lib/feature-flags';

export const siteConfig = {
  name: 'Massa',
  tagline: {
    pt: 'Feito com amor,\nentregue na sua porta.',
    en: 'Made with care,\ndelivered to your door.',
    es: 'Hecho con cariño,\nentregado en tu puerta.',
    it: 'Fatto con cura,\nconsegnato alla tua porta.',
    ar: 'مصنوع بحب،\nويصل إلى بابك.',
  },
  subTagline: {
    pt: 'Cookies artesanais no seu condomínio, todo fim de semana.',
    en: 'Handmade cookies in your condominium, every weekend.',
    es: 'Cookies artesanales en tu condominio, cada fin de semana.',
    it: 'Cookie artigianali nel tuo condominio, ogni fine settimana.',
    ar: 'كوكيز حرفية في مجمعك السكني، كل عطلة نهاية أسبوع.',
  },
  whatsappNumber: '5541999733357',
  instagramHandle: '@massacookies',
  instagramUrl: 'https://instagram.com/massacookies',
  pixKey: 'seu@email.com',
  allergenStatement: {
    pt: 'Todos os nossos produtos contêm glúten, ovos e laticínios. Podem conter traços de amendoim e castanhas.',
    en: 'All our products contain gluten, eggs, and dairy. They may contain traces of peanuts and tree nuts.',
    es: 'Todos nuestros productos contienen gluten, huevos y lácteos. Pueden contener trazas de maní y frutos secos.',
    it: 'Tutti i nostri prodotti contengono glutine, uova e latticini. Possono contenere tracce di arachidi e frutta a guscio.',
    ar: 'جميع منتجاتنا تحتوي على الغلوتين والبيض ومنتجات الألبان. وقد تحتوي على آثار من الفول السوداني والمكسرات.',
  },
  deliveryNote: {
    pt: 'Entrega feita pessoalmente no seu apartamento.',
    en: 'Delivered in person right to your apartment.',
    es: 'Entrega hecha personalmente en tu apartamento.',
    it: 'Consegna fatta di persona direttamente al tuo appartamento.',
    ar: 'يتم التوصيل شخصياً إلى باب شقتك.',
  },
  orderCutoffNote: {
    pt: 'Pedidos até sexta-feira, às 18h, para entrega no fim de semana.',
    en: 'Orders close on Friday at 6:00 PM for weekend delivery.',
    es: 'Los pedidos cierran el viernes a las 18:00 para entrega el fin de semana.',
    it: 'Gli ordini chiudono venerdì alle 18:00 per la consegna nel fine settimana.',
    ar: 'تُغلق الطلبات يوم الجمعة الساعة 6:00 مساءً لتوصيل عطلة نهاية الأسبوع.',
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
      it: 'Linea permanente',
      ar: 'الخط الدائم',
    },
    ctaLabel: {
      pt: 'Pedir caixa',
      en: 'Order box',
      es: 'Pedir caja',
      it: 'Ordina la scatola',
      ar: 'اطلب الصندوق',
    },
    name: {
      pt: 'Caixinha',
      en: 'Little Box',
      es: 'Cajita',
      it: 'Scatolina',
      ar: 'الصندوق الصغير',
    },
    subtitle: {
      pt: '4 cookies',
      en: '4 cookies',
      es: '4 cookies',
      it: '4 cookie',
      ar: '4 كوكيز',
    },
    price: 25,
    available: true,
    description: {
      pt: 'Nossa porta de entrada: rápida de escolher, fácil de pedir e perfeita para matar a vontade do fim de semana.',
      en: 'Our entry box: quick to choose, easy to order, and perfect for a weekend craving.',
      es: 'Nuestra caja de entrada: rápida de elegir, fácil de pedir y perfecta para darte un gusto el fin de semana.',
      it: 'La nostra porta d’ingresso: veloce da scegliere, facile da ordinare e perfetta per uno sfizio del fine settimana.',
      ar: 'هذه هي البداية معنا: سهلة الاختيار، سهلة الطلب، ومثالية لرغبة عطلة نهاية الأسبوع.',
    },
    cookieCount: 4,
    flavours: [
      { pt: 'Tradicional', en: 'Classic', es: 'Tradicional', it: 'Classico', ar: 'كلاسيكي' },
      { pt: 'Triplo Chocolate', en: 'Triple Chocolate', es: 'Triple Chocolate', it: 'Triplo cioccolato', ar: 'شوكولاتة ثلاثية' },
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
      it: 'Linea permanente',
      ar: 'الخط الدائم',
    },
    ctaLabel: {
      pt: 'Pedir caixa',
      en: 'Order box',
      es: 'Pedir caja',
      it: 'Ordina la scatola',
      ar: 'اطلب الصندوق',
    },
    name: {
      pt: 'Caixa Clássica',
      en: 'Classic Box',
      es: 'Caja Clásica',
      it: 'Scatola Classica',
      ar: 'الصندوق الكلاسيكي',
    },
    subtitle: {
      pt: '8 cookies',
      en: '8 cookies',
      es: '8 cookies',
      it: '8 cookie',
      ar: '8 كوكيز',
    },
    price: 52,
    available: true,
    badge: {
      pt: 'Mais pedida',
      en: 'Most ordered',
      es: 'La más pedida',
      it: 'La più ordinata',
      ar: 'الأكثر طلباً',
    },
    description: {
      pt: 'A favorita do condomínio. Diversidade de sabores para a família toda, sem complicar a decisão.',
      en: 'The condominium favorite. A mix of flavours for the whole family, without making the choice harder.',
      es: 'La favorita del condominio. Una variedad de sabores para toda la familia, sin complicar la decisión.',
      it: 'La preferita del condominio. Un mix di gusti per tutta la famiglia, senza complicare la scelta.',
      ar: 'المفضلة في المجمع. تنوع نكهات يكفي للعائلة كلها من دون تعقيد في الاختيار.',
    },
    cookieCount: 8,
    flavours: [
      { pt: 'Tradicional', en: 'Classic', es: 'Tradicional', it: 'Classico', ar: 'كلاسيكي' },
      { pt: 'Triplo Chocolate', en: 'Triple Chocolate', es: 'Triple Chocolate', it: 'Triplo cioccolato', ar: 'شوكولاتة ثلاثية' },
      { pt: 'Red Velvet', en: 'Red Velvet', es: 'Red Velvet', it: 'Red Velvet', ar: 'ريد فيلفت' },
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
      it: 'Linea permanente',
      ar: 'الخط الدائم',
    },
    ctaLabel: {
      pt: 'Pedir caixa',
      en: 'Order box',
      es: 'Pedir caja',
      it: 'Ordina la scatola',
      ar: 'اطلب الصندوق',
    },
    name: {
      pt: 'Caixa Presente',
      en: 'Gift Box',
      es: 'Caja Regalo',
      it: 'Scatola Regalo',
      ar: 'صندوق الهدية',
    },
    subtitle: {
      pt: '12 cookies + cartão',
      en: '12 cookies + card',
      es: '12 cookies + tarjeta',
      it: '12 cookie + biglietto',
      ar: '12 كوكيز + بطاقة',
    },
    price: 82,
    available: true,
    description: {
      pt: 'Embalagem especial com fita e cartão manuscrito para surpreender alguém especial com um presente cheio de carinho.',
      en: 'Special packaging with ribbon and a handwritten card, made to surprise someone with a gift full of care.',
      es: 'Empaque especial con cinta y tarjeta manuscrita para sorprender a alguien con un regalo lleno de cariño.',
      it: 'Confezione speciale con nastro e biglietto scritto a mano per sorprendere qualcuno con un regalo pieno di affetto.',
      ar: 'تغليف خاص مع شريط وبطاقة مكتوبة بخط اليد لمفاجأة شخص مميز بهدية مليئة بالاهتمام.',
    },
    cookieCount: 12,
    flavours: [
      { pt: 'Tradicional', en: 'Classic', es: 'Tradicional', it: 'Classico', ar: 'كلاسيكي' },
      { pt: 'Triplo Chocolate', en: 'Triple Chocolate', es: 'Triple Chocolate', it: 'Triplo cioccolato', ar: 'شوكولاتة ثلاثية' },
      { pt: 'Red Velvet', en: 'Red Velvet', es: 'Red Velvet', it: 'Red Velvet', ar: 'ريد فيلفت' },
      { pt: 'Macadâmia', en: 'Macadamia', es: 'Macadamia', it: 'Macadamia', ar: 'مكاديميا' },
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

export const dropAndSpecialProducts: OrderableProduct[] = showSeasonalDrop
  ? products.filter(
      (product): product is OrderableProduct =>
        (product.category === 'drop' || product.category === 'special') && isOrderableProduct(product),
    )
  : [];

export const orderableProducts: OrderableProduct[] = products.filter(
  (product): product is OrderableProduct =>
    isOrderableProduct(product) && (product.category === 'core' || showSeasonalDrop),
);

export const subscriptionProducts: SubscriptionProduct[] = showSubscription ? products.filter(isSubscriptionProduct) : [];

export const deliverySlots: DeliverySlot[] = [
  {
    id: 'sat-morning',
    label: {
      pt: 'Sábado manhã',
      en: 'Saturday morning',
      es: 'Sábado por la mañana',
      it: 'Sabato mattina',
      ar: 'صباح السبت',
    },
    dateLabel: {
      pt: 'Sáb. — 9:00 às 12:00',
      en: 'Sat — 9 AM to 12 PM',
      es: 'Sáb. — 9:00 a 12:00',
      it: 'Sab — 9:00 alle 12:00',
      ar: 'السبت — 9:00 ص إلى 12:00 م',
    },
    remaining: 3,
    total: 3,
  },
  {
    id: 'sat-afternoon',
    label: {
      pt: 'Sábado tarde',
      en: 'Saturday afternoon',
      es: 'Sábado por la tarde',
      it: 'Sabato pomeriggio',
      ar: 'بعد ظهر السبت',
    },
    dateLabel: {
      pt: 'Sáb. — 13:00 às 15:30',
      en: 'Sat — 1 PM to 3:30 PM',
      es: 'Sáb. — 13:00 a 15:30',
      it: 'Sab — 13:00 alle 15:30',
      ar: 'السبت — 1:00 م إلى 3:30 م',
    },
    remaining: 3,
    total: 3,
  },
  {
    id: 'sun-unavailable',
    label: {
      pt: 'Domingo indisponível',
      en: 'Sunday unavailable',
      es: 'Domingo no disponible',
      it: 'Domenica non disponibile',
      ar: 'الأحد غير متاح',
    },
    dateLabel: {
      pt: 'Sem entregas no domingo',
      en: 'No deliveries on Sunday',
      es: 'Sin entregas el domingo',
      it: 'Nessuna consegna la domenica',
      ar: 'لا توجد توصيلات يوم الأحد',
    },
    remaining: 0,
    total: 0,
  },
];
