'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ExternalLink, Github } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useRef, MouseEvent } from 'react';

interface Project {
  title: string;
  description: string;
  image: string;
  tech: string[];
  liveUrl: string;
  githubUrl: string;
  aiHint: string;
}

const projects: Project[] = [
  {
    title: 'HireByte',
    description:
      'A Modern & ATS-Friendly Resume Building Platform built with Next.js and Firebase , Simplifying the hiring process for recruiters and candidates with a stunning UI and robust features.',
    image : '/HireByte.jpg',
    tech: ['Next.js', 'Tailwind CSS', 'Typescript', 'Firebase'],
    liveUrl: 'https://hirebyte.vercel.app/',
    githubUrl: 'https://github.com/Jeeban-2006/HireByte2',
    aiHint: 'A resume building platform',
  },
  {
    title: 'Rewire',
    description:
      'An advanced ToDo APP with task management, and a sleek interface. Built with Next.js, and Typescript for seamless user experience.',
    image: '/Rewire.png',
    tech: ['Next.js', 'Typescript', 'Tailwind CSS'],
    liveUrl: 'https://rewire-todo.netlify.app/',
    githubUrl: 'https://github.com/Jeeban-2006/Rewire',
    aiHint: 'An Advanced ToDo App',
  },
  {
    title: 'DiaGuard',
    description:
      'DiaGuard AI is a preventive healthcare web application that uses Artificial Intelligence and Machine Learning to help users monitor and manage their diabetes effectively.',
    image: '/Diaguard.png',
    tech: ['React.js', 'Typescript', 'Tailwind CSS','supabase','ML','django'],
    liveUrl: 'https://github.com/Jeeban-2006/diaguard',
    githubUrl: 'https://github.com/Jeeban-2006/diaguard',
    aiHint: 'For prediction of Diabetes and Management App',
  },
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateXValue = ((y - centerY) / centerY) * -10;
    const rotateYValue = ((x - centerX) / centerX) * 10;
    setRotateX(rotateXValue);
    setRotateY(rotateYValue);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="perspective-1000"
      style={{
        transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(20px)`,
        transition: 'transform 0.1s ease-out',
        transformStyle: 'preserve-3d',
      }}
    >
      <Card
        className="flex transform flex-col overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-primary/30"
        style={{
          transform: 'translateZ(50px)',
          transformStyle: 'preserve-3d',
        }}
      >
        <CardHeader className="p-0 relative overflow-hidden">
          <div className="relative h-64 w-full overflow-hidden">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-500 hover:scale-110"
              data-ai-hint={project.aiHint}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </div>
        </CardHeader>
        <CardContent className="flex-grow p-6" style={{ transform: 'translateZ(25px)' }}>
          <CardTitle className="font-headline text-xl sm:text-2xl">{project.title}</CardTitle>
          <p className="mt-3 text-muted-foreground">{project.description}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.tech.map((tech, i) => (
              <Badge key={i} className="transform hover:scale-110 transition-transform">
                {tech}
              </Badge>
            ))}
          </div>
        </CardContent>
        <CardFooter className="p-6 pt-0" style={{ transform: 'translateZ(25px)' }}>
          <div className="flex w-full justify-start gap-4 flex-wrap">
            <Button asChild className="transform hover:scale-105 transition-transform">
              <Link href={project.liveUrl} target="_blank">
                <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
              </Link>
            </Button>
            <Button asChild className="transform hover:scale-105 transition-transform">
              <Link
                href={project.githubUrl}
                target="_blank"
                className="border border-input bg-background hover:bg-accent hover:text-accent-foreground"
              >
                <Github className="mr-2 h-4 w-4" /> Source
              </Link>
            </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 sm:py-32 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-headline text-3xl font-semibold tracking-tight text-primary sm:text-4xl md:text-5xl animate-fade-in">
            My Projects
          </h2>
          <p className="mt-4 text-base text-muted-foreground sm:text-lg animate-fade-in delay-200">
            Here are a few things I&apos;ve built.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-2 justify-center place-items-center">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
