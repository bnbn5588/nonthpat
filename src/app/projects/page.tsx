import type { Metadata } from 'next';
import Footer from '@/components/footer';
import Header from '@/components/header';
import React from 'react';
import MyProjects from './content';

export const metadata: Metadata = {
  title: 'Projects',
  description:
    'Explore projects by Nonthpat Wongkham spanning web development, Android applications, backend APIs, and machine learning — including a Line Bot, ESG Android app, Task Management API, and IMDB Sentiment Analysis.',
  openGraph: {
    title: 'Projects | Nonthpat Wongkham',
    description:
      'Explore projects by Nonthpat Wongkham spanning web development, Android applications, backend APIs, and machine learning.'
  }
};

export default function Projects() {
  return (
    <>
      <Header />
      <MyProjects />
      <Footer />
    </>
  );
}
