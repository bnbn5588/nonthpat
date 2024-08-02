import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const projects = [
  {
    title: 'Project One',
    description: 'A brief description of Project One.',
    technologies: ['React', 'Node.js'],
    link: 'https://project-one.example.com',
    repo: 'https://github.com/username/project-one',
    screenshot: '/path/to/screenshot1.png'
  },
  {
    title: 'Project Two',
    description: 'A brief description of Project Two.',
    technologies: ['React', 'Node.js'],
    link: 'https://project-one.example.com',
    repo: 'https://github.com/username/project-one',
    screenshot: '/path/to/screenshot1.png'
  }
  // Add more projects here
];

export default function MyProjects() {
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
              <p className="font-semibold">Technologies Used: {project.technologies.join(', ')}</p>
              {project.screenshot && <img src={project.screenshot} alt={project.title} className="my-4 w-full max-w-md" />}
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
    </main>
  );
}
