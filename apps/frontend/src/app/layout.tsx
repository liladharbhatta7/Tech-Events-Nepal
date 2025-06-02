// src/app/layout.tsx
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css';
import Script from 'next/script';

import SessionProviderClient from './providers/SessionProviderClient';  // ← NEW
import { AuthProvider } from './context/AuthContext';
import Navbar from '@/components/layout/Navbar';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Tech Events Nepal',
  description: 'Discover and post tech events across Nepal',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Bootstrap JS (for the navbar toggler, dropdowns, etc.) */}
        <Script src="/bootstrap.bundle.min.js" strategy="afterInteractive" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {/* 1) Wrap in SessionProviderClient (client component for NextAuth) */}
        <SessionProviderClient>
          {/* 2) Then wrap in your AuthProvider (Strapi/JWT context) */}
          <AuthProvider>
            {/* 3) Navbar can now call useSession() or read localStorage */}
            <Navbar />
            <main>{children}</main>
          </AuthProvider>
        </SessionProviderClient>
      </body>
    </html>
  );
}
