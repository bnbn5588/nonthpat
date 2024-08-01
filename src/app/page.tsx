import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
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
        <div id="about" className="mb-5">
          <h2 className="mb-4 text-2xl font-bold">About Me</h2>
          <p>
            I am an experienced Database Administrator, Android Developer, and Web Developer with a strong background in database
            management, automation, and application development.
          </p>
        </div>

        <div id="info" className="flex flex-col gap-3">
          <Card id="experience">
            <CardHeader>
              <CardTitle className="text-2xl font-bold">Experience</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-outside">
                <li className="mb-4">
                  <h3 className="font-bold">Android Developer Intern @ C-Link Technology, Taiwan</h3>
                  <p className="font-light italic">Aug 2023 – Dec 2023</p>
                  <ul className="list-inside list-disc">
                    <li>Participated in TCA program event and conducted presentations.</li>
                    <li>
                      Developed Android applications with Kotlin, Java, and XML, integrated with Google Cloud API and Open Weather
                      API.
                    </li>
                  </ul>
                </li>

                <li className="mb-4">
                  <h3 className="font-bold">Automation Engine Integration Analyst @ ExxonMobil, Thailand</h3>
                  <p className="font-light italic">Aug 2021 – Jul 2022</p>
                  <ul className="list-inside list-disc">
                    <li>Managed Automic Automation Engine (UC4) and provided global user support.</li>
                    <li>Developed and enhanced job automation services.</li>
                    <li>
                      Supported internal job scheduling web applications using Angular, NodeJS, JavaScript, NextJS, and MuleSoft.
                    </li>
                  </ul>
                </li>

                <li className="mb-4">
                  <h3 className="font-bold">Oracle Database Administrator @ MFEC (System Integrator), Thailand</h3>
                  <p className="font-light italic">Jul 2019 – Aug 2021</p>
                  <ul className="list-inside list-disc">
                    <li>Support several Thai enterprise businesses (Bank, Insurance, credit card).</li>
                    <li>Regular Oracle DBA tasks (Tuning, Patching, Monitoring) .</li>
                    <li>Some Advanced Database Features (Pluggable Database, RAC, Advanced Securities).</li>
                    <li>Oracle Cloud Infrastructure (OCI), Oracle Analytic Cloud (OAC), and Database Cloud Services.</li>
                    <li>Oracle Database Appliances (Exadata, ExaCC, and Super Cluster).</li>
                  </ul>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card id="education">
            <CardHeader>
              <CardTitle className="text-2xl font-bold">Education</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-outside">
                <li className="mb-4">
                  <h3 className="font-bold">Master’s degree in Computer Science and Information Engineering, NTUST</h3>
                  <p className="font-light italic">Aug 2022 – Present</p>
                  <ul className="list-inside list-disc">
                    <li>GPA: 4.05 of 4.30</li>
                    <li>Research: Security in Machine Learning over Static and Dynamic Malware Analysis</li>
                  </ul>
                </li>

                <li className="mb-4">
                  <h3 className="font-bold">Bachelor of Science, Faculty of ICT, Mahidol University</h3>
                  <p className="font-light italic">Aug 2022 – Present</p>
                  <ul className="list-inside list-disc">
                    <li>GPA: 3.62 of 4.00 (First class honor)</li>
                    <li>Major: Database and Intelligent Systems</li>
                  </ul>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card id="projects">
            <CardHeader>
              <CardTitle className="text-2xl font-bold">Projects and Publications</CardTitle>
            </CardHeader>
            <CardContent>
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
            </CardContent>
          </Card>

          <Card id="certifications">
            <CardHeader>
              <CardTitle className="text-2xl font-bold">Certifications</CardTitle>
            </CardHeader>
            <CardContent>
              <ul>
                <li className="mb-4">Oracle Database SQL Certified Associate, 2019</li>
              </ul>
            </CardContent>
          </Card>

          <Card id="skills">
            <CardHeader>
              <CardTitle className="text-2xl font-bold">Skills</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Java, Python, SQL, Cloud, Angular, NodeJS, NextJS, Web / Application Development</p>
            </CardContent>
          </Card>
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
