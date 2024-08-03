'use client';
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

import ModalImage from 'react-modal-image';

const projects = [
  {
    title: 'Line Bot Development',
    description:
      'Developed a Line bot for tracking user expenses. The bot is built using JavaScript and is hosted on Firebase. It triggers specific functions to manage expense and income data which uses Oracle ADW for data storage.',
    technologies: ['JavaScript', 'NodeJS', 'Firebase', 'Oracle ADW'],
    link: 'https://line.me/ti/p/%40923pyyrh',
    linkDes: 'Chat with LineBot',
    repo: undefined,
    largeImages: ['/img/linebot-1.png', '/img/linebot-2.png'],
    smallImages: ['/img/linebot-1_sm.png', '/img/linebot-2_sm.png']
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
                <a href={project.link} className="mr-4 text-blue-600 hover:underline">
                  {project?.linkDes}
                </a>
                {project.repo && (
                  <a href={project.repo} className="text-gray-900 hover:underline">
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
