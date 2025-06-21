import './globals.css';
import { Inter } from 'next/font/google';
import NavBar from '../components/NavBar';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata = {
  title: {
    default: 'Dramatis',
    template: '%s | Dramatis',
  },
  description: 'A theatrical third space for community, ritual, and rest.',
  keywords: [
    'Dramatis',
    'third space',
    'Long Beach events',
    'charcuterie boards',
    'rituals',
    'community gathering',
    'zines',
    'creative services',
  ],
  metadataBase: new URL('https://magnolialb.vercel.app'),
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: 'Dramatis | A Third Space for Boards & Belonging',
    description:
      'Explore immersive events, styled spreads, and creative services from Dramatis, a lifestyle brand rooted in connection and community.',
    url: '/',
    siteName: 'Dramatis',
    images: [
      {
        url: '/images/dramatis-og-image.png',
        width: 1200,
        height: 630,
        alt: 'Dramatis OG Image',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dramatis | Boards, Belonging & Beautiful Chaos',
    description:
      'Zines, game nights, styled boards, and lifestyle support — all part of the Dramatis universe. Handmade moments await.',
    images: ['/images/dramatis-og-image.png'],
    creator: '@dramatis',
  },
  other: {
    'apple-mobile-web-app-title': 'Dramatis',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={`min-h-screen text-charcoalTeal font-body antialiased ${inter.variable}`}>
        <NavBar />
        <main role='main' aria-label='Main content' className='pt-19'>
          {children}
        </main>
      </body>
    </html>
  );
}
