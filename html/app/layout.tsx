import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'HyperPlay - Play Free HTML5 Games Online',
  description: 'Discover and play the best free HTML5 games online. Racing, shooting, puzzle, and action games all in your browser. No downloads required!',
  keywords: 'HTML5 games, free games, browser games, online games, racing games, puzzle games, action games',
  authors: [{ name: 'HyperPlay Team' }],
  openGraph: {
    title: 'HyperPlay - Play Free HTML5 Games Online',
    description: 'Discover and play the best free HTML5 games online. Racing, shooting, puzzle, and action games all in your browser.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HyperPlay - Play Free HTML5 Games Online',
    description: 'Discover and play the best free HTML5 games online. Racing, shooting, puzzle, and action games all in your browser.',
  },
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%233B82F6'><path d='M18 10.5V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h8.5M15 9l6 6M15 15l6-6'/></svg>" />
      </head>
      <body className={`${inter.className} bg-gray-900 text-white min-h-screen`}>
        <Navbar />
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}