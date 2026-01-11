import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Download, BrainCircuit, Users, Heart } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const resumeLink = "/HireByte.pdf"; // Placeholder

export function AboutSection() {
  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-headline text-3xl font-semibold tracking-tight text-primary sm:text-4xl md:text-5xl">
            About Me
          </h2>
          <p className="mt-4 text-base text-muted-foreground sm:text-lg">
            A little bit about my journey, values, and what drives me.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-8">
          <div className="lg:col-span-1 flex justify-center items-center">
            <Image
              src="/about.jpg"
              alt="Portrait of Jeeban working at a computer"
              width={400}
              height={533}
              className="rounded-xl object-cover shadow-2xl rotate-[-3deg] transition-transform duration-300 hover:rotate-0 w-full max-w-xs sm:max-w-sm md:max-w-md"
              priority
            />
          </div>

          <div className="lg:col-span-2 flex flex-col justify-center gap-8">
            <p className="text-lg sm:text-xl text-foreground">
              I’m a passionate Data Science enthusiast with a strong foundation in Python, Java, and front-end development. I enjoy solving complex problems and turning data into meaningful insights that drive decisions.With a blend of programming expertise and analytical thinking, I love working on projects that combine data analysis, machine learning, and clean UI development. Whether it's building predictive models, crafting efficient algorithms, or creating user-friendly interfaces, I aim to deliver impactful and well-structured solutions.I’m continuously exploring new technologies and improving my skills to stay ahead in the ever-evolving tech landscape.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <CardHeader className="flex flex-row items-center gap-4">
                  <BrainCircuit className="h-8 w-8 text-primary" />
                  <CardTitle className="font-headline text-xl">Problem Solver</CardTitle>
                </CardHeader>
                <CardContent>
                  I enjoy tackling challenges and finding creative, logical solutions.
                </CardContent>
              </Card>
              <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <CardHeader className="flex flex-row items-center gap-4">
                  <Users className="h-8 w-8 text-primary" />
                  <CardTitle className="font-headline text-xl">Collaborative</CardTitle>
                </CardHeader>
                <CardContent>
                  I believe the best products are built through teamwork and open communication.
                </CardContent>
              </Card>
              <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <CardHeader className="flex flex-row items-center gap-4">
                  <Heart className="h-8 w-8 text-primary" />
                  <CardTitle className="font-headline text-xl">Passionate</CardTitle>
                </CardHeader>
                <CardContent>
                  I am driven by a genuine love for technology and creating amazing things.
                </CardContent>
              </Card>
            </div>
            
            <div className="flex justify-center sm:justify-start">
              <Button asChild>
                <Link href={resumeLink} target="_blank" rel="noopener noreferrer">
                  <Download className="mr-2 h-5 w-5" />
                  View My Resume
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}