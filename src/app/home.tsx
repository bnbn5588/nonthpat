'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { ChevronsUpDown } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import { FaTools } from 'react-icons/fa';
import { GrAchievement } from 'react-icons/gr';
import { HiAcademicCap, HiBriefcase } from 'react-icons/hi';
import { PiCertificateBold } from 'react-icons/pi';

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
                  <HiBriefcase className="h-6 w-6 text-blue-700" />
                  <CardTitle className="text-2xl font-bold">Experience</CardTitle> <ChevronsUpDown className="h-4 w-4" />
                </div>
              </CardHeader>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <CardContent>
                <ul className="list-outside">
                  <li className="mb-4">
                    <h3 className="font-bold">Android Developer Intern @ C-Link Technology, Taiwan</h3>
                    <p className="font-light italic">Aug 2023 – Dec 2023 (5 months)</p>
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
                    <p className="font-light italic">Aug 2021 – Jul 2022 (11 months)</p>
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
                    <p className="font-light italic">Jul 2019 – Aug 2021 (2 years)</p>
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
          <Collapsible defaultOpen={true}>
            <CollapsibleTrigger>
              <CardHeader>
                <div className="flex items-center justify-between gap-4 hover:text-blue-900 hover:underline">
                  <HiAcademicCap className="h-6 w-6 text-blue-700" />
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
          <Collapsible defaultOpen={true}>
            <CollapsibleTrigger>
              <CardHeader>
                <div className="flex items-center justify-between gap-4 hover:text-blue-900 hover:underline">
                  <GrAchievement className="h-6 w-6 text-blue-700" />
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
                </ul>
              </CardContent>
            </CollapsibleContent>
          </Collapsible>
        </Card>

        <Card id="certifications">
          <Collapsible defaultOpen={true}>
            <CollapsibleTrigger>
              <CardHeader>
                <div className="flex items-center justify-between gap-4 hover:text-blue-900 hover:underline">
                  <PiCertificateBold className="h-6 w-6 text-blue-700" />
                  <CardTitle className="text-2xl font-bold">Certifications</CardTitle>
                  <ChevronsUpDown className="h-4 w-4" />
                </div>
              </CardHeader>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <CardContent>
                <ul className="ml-4 list-outside list-decimal">
                  <li>
                    <p className="hover:font-bold hover:underline">
                      <a href="https://www.credly.com/badges/3cd6645a-1f84-49cd-ac15-eabcc49815d8/">
                        Oracle Database SQL Certified Associate, 2019
                      </a>
                    </p>
                  </li>
                  <li>
                    <p className="hover:font-bold hover:underline">
                      <a href="https://www.credly.com/badges/cec3b7f0-fb52-4833-a3e6-37fbbb12c881/">
                        Oracle Database 12c Administrator Certified Associate, 2019
                      </a>
                    </p>
                  </li>
                  <li>
                    <p className="hover:font-bold hover:underline">
                      <a href="https://catalog-education.oracle.com/pls/certview/sharebadge?id=649DA108CE13F606455778E4F9FAB1F4DBF94D2B72DA6DD121D5922FE60C8691">
                        Oracle Cloud Infrastructure Foundations 2021 Certified Associate, 2021
                      </a>
                    </p>
                  </li>
                  <li>
                    <p className="hover:font-bold hover:underline">
                      <a href="https://catalog-education.oracle.com/pls/certview/sharebadge?id=E93F5F58652034FA392906BF119A4E3BEDF9ECD42363BE424A95BB3C9DB5F208">
                        Oracle Cloud Infrastructure 2021 Certified Architect Associate, 2021
                      </a>
                    </p>
                  </li>
                  <li>
                    <p className="hover:font-bold hover:underline">
                      <a href="https://catalog-education.oracle.com/pls/certview/sharebadge?id=3AAC18805786E478E7BC4EB0838E1155E80B17614DEA2A079C5C0D8AB3FFBE5F">
                        Oracle Cloud Infrastructure Developer 2021 Certified Associate, 2021
                      </a>
                    </p>
                  </li>
                  <li>
                    <p className="hover:font-bold hover:underline">
                      <a href="https://catalog-education.oracle.com/pls/certview/sharebadge?id=6AAC51B35D3D238BEF379D49D7CFFA71FE3DEE4619115DBBFA503A3DFE90014A">
                        Oracle Cloud Infrastructure 2021 Certified Cloud Operations Associate, 2021
                      </a>
                    </p>
                  </li>
                  <li>
                    <p className="hover:font-bold hover:underline">
                      <a href="https://catalog-education.oracle.com/pls/certview/sharebadge?id=ACD97A431F2B677ABF18C4B5B3C2A408199678013048D7A28B5219BB5495A4BF">
                        Oracle Autonomous Database Cloud 2021 Certified Specialist, 2021
                      </a>
                    </p>
                  </li>
                  <li>
                    <p className="hover:font-bold hover:underline">
                      <a
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          window.open(
                            'doc/Coursera DHGC5DEQC81T.pdf',
                            'DHGC5DEQC81T Certificate',
                            'width=800, height=600, scrollbars=yes, resizable=yes'
                          );
                        }}
                      >
                        Coursera: IBM Data Engineering Certificate, 2024
                      </a>
                    </p>
                  </li>
                  <li>
                    <p className="hover:font-bold hover:underline">
                      <a
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          window.open(
                            'doc/Coursera RCHYXZS8WX96.pdf',
                            'RCHYXZS8WX96 Certificate',
                            'width=800, height=600, scrollbars=yes, resizable=yes'
                          );
                        }}
                      >
                        Coursera: Meta Back-End Developer Certificate, 2024
                      </a>
                    </p>
                  </li>
                  <li>
                    <p className="hover:font-bold hover:underline">
                      <a
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          window.open(
                            'doc/Coursera 1HZ93EYS1G9N.pdf',
                            '1HZ93EYS1G9N Certificate',
                            'width=800, height=600, scrollbars=yes, resizable=yes'
                          );
                        }}
                      >
                        Coursera: Google Data Analytics Professional Certificate, 2024
                      </a>
                    </p>
                  </li>
                </ul>
              </CardContent>
            </CollapsibleContent>
          </Collapsible>
        </Card>

        <Card id="skills">
          <Collapsible defaultOpen={true}>
            <CollapsibleTrigger>
              <CardHeader>
                <div className="flex items-center justify-between gap-4 hover:text-blue-900 hover:underline">
                  <FaTools className="h-6 w-6 text-blue-700" />
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
