import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import NavBar from '@/components/NavBar';

import './globals.css';

const roboto = Roboto({ weight: '500', subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Webzio',
  description: 'Frontend Developer Home Assignment',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className} bg-gradient-to-r from-red-300 to-blue-300`}>
        <NavBar />
        <div className="w-11/12 mx-auto">{children}</div>
      </body>
    </html>
  );
}
