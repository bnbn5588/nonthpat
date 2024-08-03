'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { ChevronsUpDown } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col p-12">
      <div id="about" className="mb-5">
        <h2 className="mb-4 text-2xl font-bold">About Me</h2>
        <p className="mb-4 indent-8">
          I am an experienced Database Administrator, Android Developer, and Web Developer with a strong background in database
          management, automation, and application development. My expertise includes working with technologies such as SQL,
          Kotlin, Java, AngularJS, NodeJS, and NextJS.
        </p>

        <p className="mt-6">
          Several projects showcasing my work are presented on the{' '}
          <Link href="\projects" className="text-blue-600 hover:underline">
            {' >>'}
            Projects{'<< '}
          </Link>
          page. Please feel free to visit and explore them more.
        </p>
      </div>

      <div id="info" className="flex flex-col gap-3 leading-relaxed">
        <Card id="experience">
          <Collapsible defaultOpen={true}>
            <CollapsibleTrigger>
              <CardHeader>
                <div className="flex items-center justify-between gap-4 hover:text-blue-900 hover:underline">
                  <CardTitle className="text-2xl font-bold">Experience</CardTitle> <ChevronsUpDown className="h-4 w-4" />
                </div>
              </CardHeader>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <CardContent>
                <ul className="list-outside">
                  <li className="mb-4">
                    <h3 className="font-bold">Android Developer Intern @ C-Link Technology, Taiwan</h3>
                    <p className="font-light italic">Aug 2023 – Dec 2023</p>
                    <ul className="list-inside list-disc">
                      <li>Participated in TCA program event and conducted presentations</li>
                      <li>
                        Developed Android applications with Kotlin, Java, and XML, integrated with Google Cloud API and Open
                        Weather API
                      </li>
                    </ul>
                  </li>

                  <li className="mb-4">
                    <h3 className="font-bold">Automation Engine Integration Analyst @ ExxonMobil, Thailand</h3>
                    <p className="font-light italic">Aug 2021 – Jul 2022</p>
                    <ul className="list-inside list-disc">
                      <li>Managed Automic Automation Engine (UC4) and provided global user support</li>
                      <li>Developed and enhanced job automation services</li>
                      <li>
                        Supported internal job scheduling web applications using Angular, NodeJS, JavaScript, NextJS, and MuleSoft
                      </li>
                    </ul>
                  </li>

                  <li className="mb-4">
                    <h3 className="font-bold">Oracle Database Administrator @ MFEC (System Integrator), Thailand</h3>
                    <p className="font-light italic">Jul 2019 – Aug 2021</p>
                    <ul className="list-inside list-disc">
                      <li>Supported several Thai enterprise businesses (Bank, Insurance, credit card)</li>
                      <li>Implemented the scripts to automate regular Oracle DBA tasks (Tuning, Patching, Monitoring)</li>
                      <li>Experienced with some Advanced Database Features (Pluggable Database, RAC, Advanced Securities)</li>
                      <li>
                        Experienced with Oracle Cloud Infrastructure (OCI), Oracle Analytic Cloud (OAC), and Database Cloud
                        Services
                      </li>
                      <li>Experienced with Oracle Database Appliances (Exadata, ExaCC, and Super Cluster)</li>
                    </ul>
                  </li>
                </ul>
              </CardContent>
            </CollapsibleContent>
          </Collapsible>
        </Card>

        <Card id="education">
          <Collapsible>
            <CollapsibleTrigger>
              <CardHeader>
                <div className="flex items-center justify-between gap-4 hover:text-blue-900 hover:underline">
                  <CardTitle className="text-2xl font-bold">Education</CardTitle>
                  <ChevronsUpDown className="h-4 w-4" />
                </div>
              </CardHeader>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <CardContent>
                <ul className="list-outside">
                  <li className="mb-4">
                    <h3 className="font-bold">Master’s degree, National Taiwan University of Secience and Technology (NTUST)</h3>
                    <p className="font-light italic">Aug 2022 – Aug 2024</p>
                    <ul className="list-inside list-disc">
                      <li>
                        <span className="font-semibold">Department:</span> Computer Science and Information Engineering
                      </li>
                      <li>
                        <span className="font-semibold">GPA:</span> 4.05 of 4.30
                      </li>
                      <li>
                        <span className="font-semibold">Research Area:</span> Static & Dynamic Malware Analysis, Image
                        Classification, Few-shot Learning (FSL), Convolutional Block Attention Module (CBAM)
                      </li>
                      <li>
                        <span className="font-semibold">Thesis:</span> A Hierarchical Framework for Few-Shot Malware
                        Classification Using Attention and Multiple Prototypes
                      </li>
                      <li>
                        <span className="font-semibold">Courses:</span> Machine Learning, AI and Deep Learning, Soft Computing,
                        Advanced Database System, Theory of Blockchain, Data Science and Big Data
                      </li>
                    </ul>
                  </li>

                  <li className="mb-4">
                    <h3 className="font-bold">Bachelor of Science, Mahidol University</h3>
                    <p className="font-light italic">Jul 2015 – May 2019</p>
                    <ul className="list-inside list-disc">
                      <li>
                        <span className="font-semibold">Department:</span> Information and Communication Technology (
                        <span className="font-semibold">Majored: </span>
                        Database and Intelligent Systems)
                      </li>
                      <li>
                        <span className="font-semibold">GPA:</span> 3.62 of 4.00 (
                        <span className="font-semibold underline decoration-wavy">First class honor</span>)
                      </li>
                      <li>
                        <span className="font-semibold">Research Area:</span> Android Development, System Architecture, Data
                        Analytic, Data Structure, Data Visualization
                      </li>
                      <li>
                        <span className="font-semibold">Thesis:</span> WhatTheHealth: AN ANDROID APPLICATION FOR CONSUMERS OF
                        HEALTHY FOOD
                      </li>
                      <li>
                        <span className="font-semibold">Courses:</span> OOP, Web Development, Database Management System,
                        Artificial Intelligence, Image Processing, Dataware Housing & Data Mining
                      </li>
                    </ul>
                  </li>
                </ul>
              </CardContent>
            </CollapsibleContent>
          </Collapsible>
        </Card>

        <Card id="achievement">
          <Collapsible>
            <CollapsibleTrigger>
              <CardHeader>
                <div className="flex items-center justify-between gap-4 hover:text-blue-900 hover:underline">
                  <CardTitle className="text-2xl font-bold">Achievements and Publications</CardTitle>
                  <ChevronsUpDown className="h-4 w-4" />
                </div>
              </CardHeader>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <CardContent>
                <ul>
                  <li className="mb-4">
                    <h3 className="font-bold hover:underline">
                      <a
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          window.open(
                            'doc/dean_award.pdf',
                            "Dean's Award",
                            'width=800, height=600, scrollbars=yes, resizable=yes'
                          );
                        }}
                      >
                        Dean’s Award (Highest GPA - 4.0)
                      </a>
                    </h3>
                    <p>Achieved in Aug 2019</p>
                  </li>
                  <li className="mb-4">
                    <h3 className="font-bold hover:underline">
                      <a
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          window.open('doc/jcsse_2019.pdf', 'JCSSE 2019', 'width=800, height=600, scrollbars=yes, resizable=yes');
                        }}
                      >
                        Participation in International Joint Conference on Computer Science and Software Engineering (JCSSE 2019)
                      </a>
                    </h3>
                    <p>Participated in Jul 2019</p>
                  </li>
                  <li className="mb-4">
                    <h3 className="font-bold hover:underline">
                      <a href="https://ieeexplore.ieee.org/abstract/document/8864192">
                        Published a conference paper &quot;WhatTheHealth: An Android Application for Consumers of Healthy
                        Food&quot;
                      </a>
                    </h3>
                    <p>Published in IEEE, 2019</p>
                  </li>

                  <li className="mb-4">
                    <h3 className="font-bold hover:underline">
                      <a
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          window.open(
                            'doc/TCA_cert.pdf',
                            'TCA Certificate',
                            'width=800, height=600, scrollbars=yes, resizable=yes'
                          );
                        }}
                      >
                        Participation in TCA Internship program
                      </a>
                    </h3>
                    <p>Completed in Nov 2023</p>
                  </li>
                </ul>
              </CardContent>
            </CollapsibleContent>
          </Collapsible>
        </Card>

        <Card id="certifications">
          <Collapsible>
            <CollapsibleTrigger>
              <CardHeader>
                <div className="flex items-center justify-between gap-4 hover:text-blue-900 hover:underline">
                  <CardTitle className="text-2xl font-bold">Certifications</CardTitle>
                  <ChevronsUpDown className="h-4 w-4" />
                </div>
              </CardHeader>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <CardContent>
                <ul className="ml-4 list-outside list-decimal">
                  <li>Oracle Database SQL Certified Associate, 2019</li>
                  <li>Oracle Database 12c Administrator Certified Associate, 2019</li>
                  <li>Oracle Cloud Infrastructure Foundations 2021 Certified Associate, 2021</li>
                  <li>Oracle Cloud Infrastructure 2021 Certified Architect Associate, 2021</li>
                  <li>Oracle Cloud Infrastructure Developer 2021 Certified Associate, 2021</li>
                  <li>Oracle Cloud Infrastructure 2021 Certified Cloud Operations Associate, 2021</li>
                  <li>Oracle Autonomous Database Cloud 2021 Certified Specialist, 2021</li>
                </ul>
              </CardContent>
            </CollapsibleContent>
          </Collapsible>
        </Card>

        <Card id="skills">
          <Collapsible>
            <CollapsibleTrigger>
              <CardHeader>
                <div className="flex items-center justify-between gap-4 hover:text-blue-900 hover:underline">
                  <CardTitle className="text-2xl font-bold">Skills</CardTitle>
                  <ChevronsUpDown className="h-4 w-4" />
                </div>
              </CardHeader>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <CardContent>
                <p>Java, Python, SQL, Cloud, Angular, NodeJS, NextJS, Web & Application Development, Data Analytic</p>
              </CardContent>
            </CollapsibleContent>
          </Collapsible>
        </Card>
      </div>
    </main>
  );
}
