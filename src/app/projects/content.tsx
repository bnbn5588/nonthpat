'use client';
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import ImageModal from './modal';

const projects = [
  {
    title: 'Line Bot Development',
    description:
      'Developed a Line bot for tracking user expenses. The bot is built using JavaScript and is hosted on Firebase. It triggers specific functions to manage expense and income data which uses Oracle ADW for data storage.',
    technologies: ['JavaScript', 'NodeJS', 'Firebase', 'Oracle ADW'],
    link: 'https://line.me/ti/p/%40923pyyrh',
    repo: undefined,
    screenshots: ['/img/linebot-1.png', '/img/linebot-2.png']
  },
  {
    title: 'Project Two',
    description: 'A brief description of Project Two.',
    technologies: ['React', 'Node.js'],
    link: 'https://project-one.example.com',
    repo: 'https://github.com/username/project-one',
    screenshots: ['/path/to/screenshot1.png']
  }
];

export default function MyProjects() {
  const [selectedImage, setSelectedImage] = React.useState<string | undefined>(undefined);

  const openImageModal = (imgSrc: string | undefined) => {
    setSelectedImage(imgSrc);
  };

  const closeImageModal = () => {
    setSelectedImage(undefined);
  };

  return (
    <main className="flex min-h-screen flex-col p-12">
      <div>
        <h2 className="mb-4 text-2xl font-bold">Projects</h2>
        <h1>This site will be implemented soon ...</h1>
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
                {project.screenshots.map((src, idx) => (
                  <img
                    key={idx}
                    src={src}
                    alt={project.title}
                    className="h-32 w-32 cursor-pointer object-cover"
                    onClick={() => openImageModal(src)}
                  />
                ))}
              </div>

              <div className="mt-4">
                <a href={project.link} className="mr-4 text-blue-600 hover:underline">
                  Live Site
                </a>
                <a href={project.repo} className="text-gray-900 hover:underline">
                  Repository
                </a>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      <ImageModal isOpen={!!selectedImage} onClose={closeImageModal} imgSrc={selectedImage} />
    </main>
  );
}
