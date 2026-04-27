import type { Metadata } from 'next';
import Footer from '@/components/footer';
import Header from '@/components/header';
import React from 'react';
import MyContact from './content';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with Nonthpat Wongkham via email, LinkedIn, or GitHub.',
  openGraph: {
    title: 'Contact | Nonthpat Wongkham',
    description: 'Get in touch with Nonthpat Wongkham via email, LinkedIn, or GitHub.'
  }
};

export default function Contact() {
  return (
    <>
      <Header />
      <MyContact />
      <Footer />
    </>
  );
}
