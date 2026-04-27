import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import React from 'react';

const inter = Inter({ subsets: ['latin'] });

const siteUrl = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Nonthpat Wongkham - Portfolio',
    template: '%s | Nonthpat Wongkham'
  },
  description:
    'Portfolio of Nonthpat Wongkham — Database Administrator, Android Developer, and Web Developer with expertise in SQL, Kotlin, Java, NodeJS, and NextJS.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: 'Nonthpat Wongkham',
    title: 'Nonthpat Wongkham - Portfolio',
    description:
      'Portfolio of Nonthpat Wongkham — Database Administrator, Android Developer, and Web Developer with expertise in SQL, Kotlin, Java, NodeJS, and NextJS.'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nonthpat Wongkham - Portfolio',
    description:
      'Portfolio of Nonthpat Wongkham — Database Administrator, Android Developer, and Web Developer with expertise in SQL, Kotlin, Java, NodeJS, and NextJS.'
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
