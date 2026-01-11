import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Code, Database, Server, PenTool, Users, MonitorSmartphone, Brain, Coffee, FileCode, FileText, Palette, Terminal  } from 'lucide-react';

const skills = {
  'Frontend': [
    { name: 'HTML',       icon: <FileText /> },    // FileText for markup files
  { name: 'CSS',        icon: <Palette /> },
    { name: 'JavaScript', icon: <Code /> },
    { name: 'TypeScript', icon: <Code /> },
    { name: 'Next.js',    icon: <MonitorSmartphone /> },
    { name: 'Tailwind CSS', icon: <Palette /> }, // Palette for styling
 
  ],
  'Languages': [
   { name: 'Python',     icon: <FileCode /> },    // FileCode for general code
  { name: 'Java',       icon: <Coffee /> }, 
  {name: 'C', icon: <Coffee />},     // Coffee cup (Java)
  { name: 'JavaScript', icon: <Code /> },        // Code brackets
       // Palette for styling
  { name: 'MySQL',      icon: <Database /> },    // Database icon

],

  'Tools & Methods': [
    { name: 'Git & GitHub', icon: <Code /> },
    { name: 'VSCode', icon: <Terminal />  },
    { name: 'REST APIs', icon: <Server /> },
    { name: "Pair Programming", icon: <Users /> },
  ],
  'Soft Skills': [
    { name: 'Communication', icon: <Users /> },
    { name: 'Teamwork', icon: <Users /> },
    { name: 'Problem Solving', icon: <Brain /> },
    { name: 'Adaptability', icon: <Brain /> },
  ],
};

const categoryIcons = {
  'Frontend': <MonitorSmartphone className="h-8 w-8 text-primary" />,
  'Languages': <Server className="h-8 w-8 text-primary" />,
  'Tools & Methods': <PenTool className="h-8 w-8 text-primary" />,
  'Soft Skills': <Users className="h-8 w-8 text-primary" />,
}

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-headline text-3xl font-semibold tracking-tight text-primary sm:text-4xl md:text-5xl">
            My Skills
          </h2>
          <p className="mt-4 text-base text-muted-foreground sm:text-lg">
            The technologies and tools I use to bring ideas to life.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-2">
          {Object.entries(skills).map(([category, skillList]) => (
            <Card key={category} className="transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <CardHeader>
                <div className="flex items-center gap-4">
                  {categoryIcons[category as keyof typeof categoryIcons]}
                  <CardTitle className="font-headline text-2xl sm:text-3xl">{category}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3">
                  {skillList.map((skill) => (
                    <li key={skill.name} className="flex items-center gap-3 rounded-md bg-muted p-3 transition-colors hover:bg-muted/50 text-sm sm:text-base">
                      <div className="text-accent">{skill.icon}</div>
                      <span className="font-medium">{skill.name}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
