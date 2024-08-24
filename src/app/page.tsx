import React from 'react';
import HomePage from './home';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { Analytics } from '@vercel/analytics/react';

export default function Home() {
  return (
    <>
      <Header />

      <HomePage />
      <Analytics />
      <Footer />
    </>
  );
}
