// app/layout.tsx
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css';
import Script from 'next/script';
import { AuthProvider } from './context/AuthContext';


// Import these client components:
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
        <Script src="/bootstrap.bundle.min.js" strategy="afterInteractive" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {/* Client-side auth & navbar */}
        <AuthProvider>
          <Navbar />
          <main>{children}</main>
        </AuthProvider>
      </body>
    </html>
  );
}
