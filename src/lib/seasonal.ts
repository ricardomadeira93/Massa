import type { CSSProperties } from 'react';
import { LocalizedText } from '@/types';
import { activeThemeAssets } from '@/lib/asset-system';

export type SeasonalMode = 'autumn';

export interface SeasonalDropFlavor {
  id: string;
  label: LocalizedText;
  description: LocalizedText;
  assetPath: string;
  assetAlt: LocalizedText;
}

export interface SeasonalDropPreview {
  previewEyebrow: LocalizedText;
  title: LocalizedText;
  subtitle: LocalizedText;
  defaultTitle: LocalizedText;
  defaultDescription: LocalizedText;
  interactionCue: LocalizedText;
  selectorTitle: LocalizedText;
  defaultStateLabel: LocalizedText;
  selectedStateLabel: LocalizedText;
  inactiveActionLabel: LocalizedText;
  activeActionLabel: LocalizedText;
  mainIllustrationPath: string;
  mainIllustrationAlt: LocalizedText;
  stageMotifs?: {
    seed?: string;
    sprig?: string;
    spark?: string;
  };
  flavors: SeasonalDropFlavor[];
}

export interface SeasonalOverlay {
  mode: SeasonalMode;
  seasonLabel: LocalizedText;
  bannerEyebrow: LocalizedText;
  bannerTitle: LocalizedText;
  bannerBody: LocalizedText;
  bannerCtaLabel: LocalizedText;
  dropsEyebrow: LocalizedText;
  dropsTitle: LocalizedText;
  dropsDescription: LocalizedText;
  dropsPills: LocalizedText[];
  dropsAsideTitle: LocalizedText;
  dropsAsideBody: LocalizedText;
  subscriptionEyebrow: LocalizedText;
  subscriptionTitle: LocalizedText;
  subscriptionDescription: LocalizedText;
  ritualSteps: LocalizedText[];
  clubNote: LocalizedText;
  featuredDropPreview: SeasonalDropPreview;
  style: CSSProperties;
}

const activeFeaturedDropAssets = activeThemeAssets.featuredDrop;
const cinnamonIllustration = activeFeaturedDropAssets.flavors.find((flavor) => flavor.id === 'cinnamon')?.illustration ?? '';
const leafIllustration = activeFeaturedDropAssets.flavors.find((flavor) => flavor.id === 'leaf')?.illustration ?? '';
const nutIllustration = activeFeaturedDropAssets.flavors.find((flavor) => flavor.id === 'nut')?.illustration ?? '';
const chocolateIllustration = activeFeaturedDropAssets.flavors.find((flavor) => flavor.id === 'chocolate')?.illustration ?? '';

export const activeSeasonalOverlay: SeasonalOverlay = {
  mode: 'autumn',
  seasonLabel: {
    pt: 'Outono Massa',
    en: 'Massa Autumn',
    es: 'Otoño Massa',
  },
  bannerEyebrow: {
    pt: 'Drop da estação',
    en: 'Seasonal drop',
    es: 'Drop de temporada',
  },
  bannerTitle: {
    pt: 'Uma fornada curta para os dias mais lentos.',
    en: 'A short batch for slower days.',
    es: 'Una hornada corta para los días más lentos.',
  },
  bannerBody: {
    pt: 'Cookies de outono com clima de casa aquecida, especiarias suaves e aquele toque de caramelo tostado.',
    en: 'Autumn cookies with the feeling of a warm home, soft spices, and that touch of toasted caramel.',
    es: 'Cookies de otoño con clima de casa tibia, especias suaves y ese toque de caramelo tostado.',
  },
  bannerCtaLabel: {
    pt: 'Ver drop de outono',
    en: 'See autumn drop',
    es: 'Ver drop de otoño',
  },
  dropsEyebrow: {
    pt: 'Coleção limitada de outono',
    en: 'Limited autumn collection',
    es: 'Colección limitada de otoño',
  },
  dropsTitle: {
    pt: 'Uma edição curta para os dias que pedem forno aceso.',
    en: 'A short edition for the days that call for a warm oven.',
    es: 'Una edición corta para los días que piden horno encendido.',
  },
  dropsDescription: {
    pt: 'Sabores amanteigados, tostados e quentinhos, pensados para o ritmo mais lento da estação. Entra por pouco tempo, sai em pequenos lotes e deixa o cardápio da casa com clima de novidade.',
    en: 'Buttery, toasted, and warm flavours made for the slower rhythm of the season. It arrives for a short time, in small batches, and gives the house menu a fresh seasonal glow.',
    es: 'Sabores mantecosos, tostados y cálidos, pensados para el ritmo más lento de la temporada. Llega por poco tiempo, en lotes pequeños, y deja el menú de la casa con aire de novedad.',
  },
  dropsPills: [
    { pt: 'caramelo tostado', en: 'toasted caramel', es: 'caramelo tostado' },
    { pt: 'especiarias suaves', en: 'soft spices', es: 'especias suaves' },
    { pt: 'fornadas curtas', en: 'short batches', es: 'hornadas cortas' },
  ],
  dropsAsideTitle: {
    pt: 'Feita em lotes pequenos',
    en: 'Made in small batches',
    es: 'Hecha en lotes pequeños',
  },
  dropsAsideBody: {
    pt: 'O Drop de Outono aparece por algumas fornadas, em quantidade curta, para manter a experiência leve e fazer cada caixa parecer uma descoberta da estação.',
    en: 'The Autumn Drop shows up for only a few bakes, in short quantity, keeping the experience light and making each box feel like a seasonal find.',
    es: 'El Drop de Otoño aparece por pocas hornadas, en cantidad corta, para mantener la experiencia liviana y hacer que cada caja se sienta como un hallazgo de la temporada.',
  },
  subscriptionEyebrow: {
    pt: 'Clube da Massa',
    en: 'Massa Club',
    es: 'Club Massa',
  },
  subscriptionTitle: {
    pt: 'Um ritual doce para voltar todo mês.',
    en: 'A sweet ritual to come back to every month.',
    es: 'Un ritual dulce para volver cada mes.',
  },
  subscriptionDescription: {
    pt: 'A assinatura foi pensada como um jeito gostoso de pertencer: entrar na lista, receber primeiro o aviso e garantir lugar nas próximas seleções da casa.',
    en: 'The subscription was designed as a warm way to belong: join the list, hear about it first, and secure your place in the house’s next selections.',
    es: 'La suscripción fue pensada como una forma rica de pertenecer: entrar en la lista, recibir el aviso primero y asegurar tu lugar en las próximas selecciones de la casa.',
  },
  ritualSteps: [
    { pt: 'entra na lista', en: 'join the list', es: 'entra en la lista' },
    { pt: 'recebe o aviso primeiro', en: 'hear about it first', es: 'recibe el aviso primero' },
    { pt: 'repete o ritual no mês seguinte', en: 'repeat the ritual next month', es: 'repite el ritual el mes siguiente' },
  ],
  clubNote: {
    pt: 'Primeiras vagas e novidades da estação para quem quiser entrar antes.',
    en: 'First spots and seasonal news for anyone who wants to step in early.',
    es: 'Primeros cupos y novedades de la temporada para quien quiera entrar antes.',
  },
  featuredDropPreview: {
    previewEyebrow: {
      pt: 'Prévia ilustrada',
      en: 'Illustrated preview',
      es: 'Vista previa ilustrada',
    },
    title: {
      pt: 'Drop de Outono',
      en: 'Autumn Drop',
      es: 'Drop de Otoño',
    },
    subtitle: {
      pt: 'Toques tostados, clima aconchegante e quatro sabores para explorar.',
      en: 'Toasted notes, a cozy mood, and four flavours to explore.',
      es: 'Notas tostadas, clima acogedor y cuatro sabores para explorar.',
    },
    defaultTitle: {
      pt: 'A coleção inteira em cena',
      en: 'The full collection on stage',
      es: 'La colección completa en escena',
    },
    defaultDescription: {
      pt: 'Comece pela visão geral e toque nos sabores para entrar no clima de cada ilustração da edição.',
      en: 'Start with the full scene and tap the flavours to step into each illustration of the edition.',
      es: 'Empieza por la escena completa y toca los sabores para entrar en el clima de cada ilustración de la edición.',
    },
    interactionCue: {
      pt: 'Toque para explorar os sabores',
      en: 'Tap to explore the flavours',
      es: 'Toca para explorar los sabores',
    },
    selectorTitle: {
      pt: 'Escolha um sabor',
      en: 'Choose a flavour',
      es: 'Elige un sabor',
    },
    defaultStateLabel: {
      pt: 'Visão da coleção',
      en: 'Collection view',
      es: 'Vista de la colección',
    },
    selectedStateLabel: {
      pt: 'Sabor em destaque',
      en: 'Featured flavour',
      es: 'Sabor destacado',
    },
    inactiveActionLabel: {
      pt: 'Ver prévia',
      en: 'Preview it',
      es: 'Ver vista previa',
    },
    activeActionLabel: {
      pt: 'Em foco',
      en: 'In focus',
      es: 'En foco',
    },
    mainIllustrationPath: activeFeaturedDropAssets.mainIllustration,
    mainIllustrationAlt: {
      pt: 'Ilustração principal do Drop de Outono',
      en: 'Main illustration for the Autumn Drop',
      es: 'Ilustración principal del Drop de Otoño',
    },
    stageMotifs: activeFeaturedDropAssets.motifs,
    flavors: [
      {
        id: 'cinnamon',
        label: {
          pt: 'Canela',
          en: 'Cinnamon',
          es: 'Canela',
        },
        description: {
          pt: 'amanteigado, quente e reconfortante',
          en: 'buttery, warm, and comforting',
          es: 'mantecoso, cálido y reconfortante',
        },
        assetPath: cinnamonIllustration,
        assetAlt: {
          pt: 'Ilustração do sabor Canela',
          en: 'Illustration for the Cinnamon flavour',
          es: 'Ilustración del sabor Canela',
        },
      },
      {
        id: 'leaf',
        label: {
          pt: 'Folha',
          en: 'Leaf',
          es: 'Hoja',
        },
        description: {
          pt: 'leve, macio e com clima de outono',
          en: 'light, soft, and full of autumn mood',
          es: 'ligero, suave y con clima de otoño',
        },
        assetPath: leafIllustration,
        assetAlt: {
          pt: 'Ilustração do sabor Folha',
          en: 'Illustration for the Leaf flavour',
          es: 'Ilustración del sabor Hoja',
        },
      },
      {
        id: 'nut',
        label: {
          pt: 'Castanha',
          en: 'Chestnut',
          es: 'Castaña',
        },
        description: {
          pt: 'mais profundo, tostado e aconchegante',
          en: 'deeper, toasted, and cozy',
          es: 'más profundo, tostado y acogedor',
        },
        assetPath: nutIllustration,
        assetAlt: {
          pt: 'Ilustração do sabor Castanha',
          en: 'Illustration for the Chestnut flavour',
          es: 'Ilustración del sabor Castaña',
        },
      },
      {
        id: 'chocolate',
        label: {
          pt: 'Chocolate',
          en: 'Chocolate',
          es: 'Chocolate',
        },
        description: {
          pt: 'intenso, rico e perfeito para o fim de semana',
          en: 'intense, rich, and perfect for the weekend',
          es: 'intenso, rico y perfecto para el fin de semana',
        },
        assetPath: chocolateIllustration,
        assetAlt: {
          pt: 'Ilustração do sabor Chocolate',
          en: 'Illustration for the Chocolate flavour',
          es: 'Ilustración del sabor Chocolate',
        },
      },
    ],
  },
  style: {
    '--season-accent': '#C7682D',
    '--season-accent-soft': '#E8B07B',
    '--season-accent-deep': '#7A3E20',
    '--season-paper': '#FFF1E2',
    '--season-card': '#FFF8F1',
    '--season-card-strong': '#F7E4D1',
    '--season-shadow': '#6B3318',
    '--season-glow': 'rgba(212, 117, 58, 0.18)',
    '--season-mist': 'rgba(232, 176, 123, 0.22)',
    '--season-line': 'rgba(122, 62, 32, 0.18)',
  } as CSSProperties,
};
