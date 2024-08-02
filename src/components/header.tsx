import Link from 'next/link';
import React from 'react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger
} from './ui/navigation-menu';
import { navigationMenuTriggerStyle } from '@/components/ui/navigation-menu';
import { IoHomeSharp, IoCloudDownloadSharp } from 'react-icons/io5';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

const resumeLink = 'https://drive.google.com/file/d/1yv4Q2_Q_L8yj7Kacewr3HGLm46nATo_Q/view?usp=sharing';

export default function Header() {
  return (
    <>
      <header className="bg-blue-900 p-6 text-white">
        <div className="container mx-auto flex flex-col justify-between gap-4 md:flex-row">
          <div>
            <h1 className="text-3xl font-bold">Nonthpat Wongkham</h1>
            <p>Database Admin | Software Engineer</p>
            <div className="mt-2 flex items-center space-x-4">
              <a href="mailto:nonthpatw@gmail.com" className="flex items-center hover:underline">
                <FaEnvelope className="mr-2 text-gray-500" />
                Email
              </a>
              <a href="https://www.linkedin.com/in/nonthpat-wongkham-845351154/" className="flex items-center hover:underline">
                <FaLinkedin className="mr-2 text-blue-600" />
                LinkedIn
              </a>
              <a href="https://github.com/bnbn5588" className="flex items-center hover:underline">
                <FaGithub className="mr-2 text-gray-900" />
                GitHub
              </a>
            </div>
          </div>
          <div className="content-center text-blue-900">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link href="/" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()} aria-label="Home">
                      <IoHomeSharp />
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger>Menu</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="w-100px grid gap-3 p-6 md:w-[400px] lg:grid-rows-[.75fr_1fr]">
                      <li>
                        <NavigationMenuLink asChild>
                          <a
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            href="/"
                          >
                            <div className="mb-2 mt-4 text-lg font-medium">Home</div>
                            <p className="text-sm leading-tight text-muted-foreground">The Overview of Nonthpat Wongkham</p>
                          </a>
                        </NavigationMenuLink>
                      </li>

                      <li>
                        <NavigationMenuLink asChild>
                          <a
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            href="/projects"
                          >
                            <div className="mb-2 mt-4 text-lg font-medium">Projects</div>
                            <p className="text-sm leading-tight text-muted-foreground">
                              Projects Showcasing Web Development, Application Development, Data Analytic, and More
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <a
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            href={resumeLink}
                          >
                            <div className="mb-2 mt-4 flex items-center gap-2 text-lg font-medium">
                              <span>My Resume </span> <IoCloudDownloadSharp />
                            </div>
                            <p className="text-sm leading-tight text-muted-foreground">
                              Download the latest version of my resume
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link href="/contact" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>Contact</NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>
      </header>
    </>
  );
}
