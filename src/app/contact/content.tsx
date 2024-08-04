import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from 'react-icons/fa';

import React from 'react';

export default function MyContact() {
  return (
    <main className="flex min-h-screen flex-col p-12 leading-relaxed">
      <div id="info" className="flex flex-col gap-4">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold">Contact Info</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center">
                <FaEnvelope className="mr-2 text-gray-500" />
                <p>
                  <span className="font-semibold">Email:</span> nonthpatw@gmail.com
                </p>
              </div>
              <div className="flex items-center">
                <FaPhone className="mr-2 text-gray-500" />
                <p>
                  <span className="font-semibold">Phone:</span> (+66)83-0059654
                </p>
              </div>
              <div className="flex items-center">
                <FaLinkedin className="mr-2 text-blue-600" />
                <p>
                  <span className="font-semibold">LinkedIn:</span>{' '}
                  <a href="https://www.linkedin.com/in/nonthpat-wongkham-845351154/" className="text-blue-600">
                    https://www.linkedin.com/in/nonthpat-wongkham-845351154
                  </a>
                </p>
              </div>
              <div className="flex items-center">
                <FaGithub className="mr-2 text-gray-900" />
                <p>
                  <span className="font-semibold">GitHub:</span>{' '}
                  <a href="https://github.com/bnbn5588" className="text-gray-900">
                    https://github.com/bnbn5588
                  </a>
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
