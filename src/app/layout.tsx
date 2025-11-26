// src/app/layout.tsx

import './globals.css';
import { Playfair_Display, Poppins } from 'next/font/google';
import Navbar from '@/components/Navbar'; 
import Footer from '@/components/Footer'; // <-- NEW IMPORT

export const displayFont = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700', '900'],
});

const bodyFont = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '600', '700'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${bodyFont.className} antialiased text-base`}>
        <Navbar />
        {children}
        <Footer /> {/* <-- ADDED FOOTER */}
      </body>
    </html>
  );
}