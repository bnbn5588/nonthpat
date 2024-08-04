'use client';
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

import ModalImage from 'react-modal-image';

const projects = [
  {
    title: 'Line Bot Development',
    description:
      'Developed a simple Line bot for tracking user expenses. The bot is built using JavaScript and is hosted on Firebase. It triggers specific functions to manage expense and income data which uses Oracle Autonomous Transaction Processing for data storage, which is a fully automated database service.',
    technologies: ['JavaScript', 'NodeJS', 'Firebase', 'Oracle ATP'],
    link: 'https://line.me/ti/p/%40923pyyrh',
    linkDes: 'Chat with LineBot',
    repo: undefined,
    largeImages: ['/img/linebot-1.png', '/img/linebot-2.png'],
    smallImages: ['/img/linebot-1_sm.png', '/img/linebot-2_sm.png']
  },
  {
    title: 'Android Development',
    description:
      'Developed an Android application that displays real-time data from a surveillance system with various visualizations. The application integrates with the Google Sheets API to fetch sensor data and the Opendata API to provide additional real-time weather conditions. This project involved creating a user-friendly interface to present data in an easily digestible format, enabling users to monitor environmental conditions effectively.',
    technologies: ['Kotlin', 'XML', 'Google API', 'Opendata API'],
    link: 'https://github.com/bnbn5588/ESG_apk',
    linkDes: 'APK file',
    repo: undefined,
    largeImages: ['/img/ESG-1.png', '/img/ESG-2.png', '/img/ESG-3.png', '/img/ESG-4.png', '/img/ESG-5.png'],
    smallImages: ['/img/ESG-1_sm.png', '/img/ESG-2_sm.png', '/img/ESG-3_sm.png', '/img/ESG-4_sm.png', '/img/ESG-5_sm.png']
  }
];

export default function MyProjects() {
  return (
    <main className="flex min-h-screen flex-col p-12">
      <div>
        <h2 className="mb-4 text-2xl font-bold">Projects</h2>
        <p className="mb-4 indent-8">
          Welcome to my Projects page! Here, you will find a collection of my work, showcasing various projects I have developed
          and contributed to. These projects highlight my expertise in different areas, including web development, mobile
          application development, and database management. Each project demonstrates my skills in using various technologies and
          tools to solve real-world problems. Feel free to explore and learn more about the work I have done.
        </p>
      </div>

      <div className="flex flex-col gap-3">
        {projects.map((project, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle className="text-2xl font-bold">{project.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{project.description}</p>
              <p className="font-semibold">Technologies: {project.technologies.join(', ')}</p>

              <div className="m-3 flex flex-wrap gap-3">
                {project.smallImages.map((smallSrc, idx) => (
                  <ModalImage
                    key={idx}
                    small={smallSrc}
                    large={project.largeImages[idx]}
                    alt={`Screenshot ${idx + 1} of ${project.title}`}
                    hideDownload={true}
                    hideZoom={false}
                  />
                ))}
              </div>

              <div className="mt-4">
                {project.link ? (
                  <a href={project.link} className="mr-4 text-blue-600 visited:text-purple-600 hover:underline">
                    {project?.linkDes}
                  </a>
                ) : (
                  <a href={project.link} className="pointer-events-none mr-4 text-slate-300">
                    Site not found
                  </a>
                )}
                {project.repo ? (
                  <a href={project.repo} className="text-gray-900 visited:text-purple-600 hover:underline">
                    Repository
                  </a>
                ) : (
                  <a href={project.repo} className="pointer-events-none text-slate-300">
                    Repository
                  </a>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </main>
  );
}
