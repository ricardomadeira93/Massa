import type { Metadata } from 'next';
import { Caveat, DM_Sans } from 'next/font/google';
import '@/styles/globals.css';

const caveat = Caveat({
  subsets: ['latin'],
  weight: '700',
  variable: '--font-display',
  display: 'swap',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Massa — Cookies artesanais no seu condomínio',
    template: '%s | Massa',
  },
  description: 'Cookies artesanais feitos com amor, entregues na sua porta todo fim de semana. Peça pelo WhatsApp.',
  keywords: ['cookies artesanais', 'cookie delivery', 'cookies caseiros', 'massa cookies'],
  openGraph: {
    locale: 'pt_BR',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Massa Cookies Artesanais',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${caveat.variable} ${dmSans.variable}`}>
      <body className="antialiased font-body bg-cream text-ink">
        {children}
      </body>
    </html>
  );
}
