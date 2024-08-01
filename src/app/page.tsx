import React from 'react';

export default function Home() {
  return (
    <>
      <header className="bg-blue-900 p-6 text-white">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold">Nonthpat Wongkham</h1>
          <p>Database Admin | Android Developer | Web Developer</p>
          <div className="mt-2">
            <a href="mailto:nonthpatw@gmail.com" className="mr-4">
              Email
            </a>
            <a href="https://www.linkedin.com/in/nonthpat-wongkham-845351154/" className="mr-4">
              LinkedIn
            </a>
          </div>
        </div>
      </header>

      <main className="flex min-h-screen flex-col justify-between p-12">
        <div id="about">
          <h2 className="mb-4 text-2xl font-bold">About Me</h2>
          <p>
            I am an experienced Database Administrator, Android Developer, and Web Developer with a strong background in database
            management, automation, and application development.
          </p>
          <p>test</p>
        </div>

        <div id="experience">
          <h2 className="mb-4 text-2xl font-bold">Experience</h2>
          <ul>
            <li className="mb-4">
              <h3 className="font-bold">Android Developer Intern at C-Link Technology, Taiwan</h3>
              <p className="italic">Aug 2023 – Dec 2023</p>
              <p>
                Participated in TCA program event and conducted presentations. Developed Android applications with Kotlin, Java,
                and XML, integrated with Google Cloud API and Open Weather API.
              </p>
            </li>
          </ul>
        </div>

        <div id="education">
          <h2 className="mb-4 text-2xl font-bold">Education</h2>
          <ul>
            <li className="mb-4">
              <h3 className="font-bold">Master’s degree in Computer Science and Information Engineering, NTUST</h3>
              <p className="italic">Aug 2022 – Present, GPA: 4.05 of 4.30</p>
              <p>Research: Security in Machine Learning over Static and Dynamic Malware Analysis</p>
            </li>
          </ul>
        </div>

        <div id="projects">
          <h2 className="mb-4 text-2xl font-bold">Projects and Publications</h2>
          <ul>
            <li className="mb-4">
              <h3 className="font-bold">
                <a href="https://ieeexplore.ieee.org/abstract/document/8864192">
                  WhatTheHealth: An Android Application for Consumers of Healthy Food
                </a>
              </h3>
              <p>Published in IEEE, 2019</p>
            </li>
          </ul>
        </div>

        <div id="certifications">
          <h2 className="mb-4 text-2xl font-bold">Certifications</h2>
          <ul>
            <li className="mb-4">Oracle Database SQL Certified Associate, 2019</li>
          </ul>
        </div>

        <div id="skills">
          <h2 className="mb-4 text-2xl font-bold">Skills</h2>
          <p>Java, Python, SQL, Cloud, Angular, NodeJS, NextJS, Web / Application Development</p>
        </div>
      </main>
      <footer className="mt-8 bg-blue-900 p-6 text-white">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Nonthpat Wongkham. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
