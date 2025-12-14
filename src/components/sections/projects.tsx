import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ExternalLink, Github } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

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
    liveUrl: 'https://hirebytev2.netlify.app/',
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
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-headline text-3xl font-semibold tracking-tight text-primary sm:text-4xl md:text-5xl">
            My Projects
          </h2>
          <p className="mt-4 text-base text-muted-foreground sm:text-lg">
            Here are a few things I&apos;ve built.
          </p>
        </div>

        {/* Centered Cards */}
        <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-2 justify-center place-items-center">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="flex transform flex-col overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-1"
            >
              <CardHeader className="p-0">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="w-full object-cover"
                  data-ai-hint={project.aiHint}
                />
              </CardHeader>
              <CardContent className="flex-grow p-6">
                <CardTitle className="font-headline text-xl sm:text-2xl">{project.title}</CardTitle>
                <p className="mt-3 text-muted-foreground">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <Badge key={i}>{tech}</Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <div className="flex w-full justify-start gap-4 flex-wrap">
                  <Button asChild>
                    <Link href={project.liveUrl} target="_blank">
                      <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                    </Link>
                  </Button>
                  <Button asChild>
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
          ))}
        </div>
      </div>
    </section>
  );
}
