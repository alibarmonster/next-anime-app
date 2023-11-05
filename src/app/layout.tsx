import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';

import Navbar from '@/components/Navbar';

const poppins = Poppins({ subsets: ['latin'], style: 'normal', weight: ['500'] });

export const metadata: Metadata = {
  title: 'AnimeList',
  description: 'Website Info anime Indonesia',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={`${poppins.className} bg-color-secondary`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
