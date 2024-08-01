import React from 'react';
import HomePage from './home';

export default function Home() {
  return (
    <>
      <header className="bg-blue-900 p-6 text-white">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold">Nonthpat Wongkham</h1>
          <p>Database Admin | Software Engineer</p>
          <div className="mt-2">
            <a href="mailto:nonthpatw@gmail.com" className="mr-4 hover:underline">
              Email
            </a>
            <a href="https://www.linkedin.com/in/nonthpat-wongkham-845351154/" className="mr-4 hover:underline">
              LinkedIn
            </a>
            <a href="https://github.com/bnbn5588" className="mr-4 hover:underline">
              GitHub
            </a>
          </div>
        </div>
      </header>

      <HomePage />

      <footer className="mt-8 bg-blue-900 p-6 text-white">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Nonthpat Wongkham. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
