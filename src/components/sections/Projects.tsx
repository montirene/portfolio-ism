import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Playfair_Display } from 'next/font/google';

const displayFont = Playfair_Display({
  subsets: ['latin'],
  weight: ['700'],
});

const PROJECTS_DATA = [
  {
    id: 1,
    title: 'FlorioGraphix',
    description: "A website designed to showcase a fictional flower shop. Built purely with foundational web technologies, this project emphasizes clean HTML structure and responsive CSS design principles, ensuring a consistent user experience across different devices.",
    contributions: "Sole developer responsible for HTML structure, custom CSS styling, and implementation of responsive design.",
    challenges: "Achieving pixel-perfect responsiveness using only raw CSS media queries without a framework.",
    technologies: ['HTML5', 'CSS3', 'JavaScript'],
    image: '/florio.PNG',
    liveLink: 'https://montirene.github.io/floriographix/',
    githubLink: 'https://github.com/montirene/floriographix',
  },
  {
    id: 2,
    title: 'Art(ism)',
    description: "An art museum showcase website featuring visually immersive layouts and a focus on high-quality image presentation. The site prioritizes visual hierarchy and intuitive navigation for an engaging virtual gallery experience.",
    contributions: "Designed and implemented the multi-page layout and integrated light JavaScript for gallery interactivity.",
    challenges: "Optimizing large images for fast loading times while maintaining high visual quality.",
    technologies: ['HTML5', 'CSS3', 'JavaScript'],
    image: '/art.PNG',
    liveLink: 'https://montirene.github.io/art-ism-/index.html',
    githubLink: 'https://github.com/montirene/art-ism-',
  },
  {
    id: 3,
    title: "I's Cookbook",
    description: "A digital cooking book website where users can browse and search for recipes. This project focuses on user-friendly organization and clear content presentation to make recipe discovery simple and efficient.",
    contributions: "Developed the site structure, content organization logic, and applied custom typography for readability.",
    challenges: "Structuring the recipe data in a scalable way for future dynamic content integration.",
    technologies: ['HTML5', 'CSS3', 'JavaScript'],
    image: '/cook.PNG',
    liveLink: 'https://montirene.github.io/iscookbook/',
    githubLink: 'https://github.com/montirene/iscookbook',
  },
];

interface ProjectCardProps {
  project: (typeof PROJECTS_DATA)[0];
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => (
  <div className="bg-white shadow-xl hover:shadow-2xl transition-shadow duration-300 rounded-lg overflow-hidden flex flex-col h-full">
    
    <div className="relative h-60 w-full overflow-hidden">
      <Image
        src={project.image}
        alt={`Screenshot of ${project.title}`}
        layout="fill"
        objectFit="cover"
        className="transition-transform duration-300 hover:scale-[1.03]"
      />
    </div>

    <div className="p-6 flex flex-col flex-grow">
      <h3 className={`text-2xl font-bold mb-2 ${displayFont.className} text-red-800`}>
        {project.title}
      </h3>
      
      <p className="text-gray-700 mb-4 flex-grow">{project.description}</p>
      
      {/* Detailed Contributions and Challenges */}
      <div className="space-y-1 mb-4 text-sm text-gray-600">
        <p><strong>Contributions:</strong> {project.contributions}</p>
        <p><strong>Challenges:</strong> {project.challenges}</p>
      </div>
      
      {/* Technologies List */}
      <div className="flex flex-wrap gap-2 mb-4">
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className="px-3 py-1 text-sm font-medium bg-red-100 text-red-800 rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Buttons */}
      <div className="flex gap-4 mt-auto">
        <Button asChild size="sm" className="bg-red-800 hover:bg-red-700 text-amber-50 shadow-md">
          <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
            Live Demo
          </a>
        </Button>
        <Button asChild variant="outline" size="sm" className="border-red-600 text-red-600 hover:bg-red-50">
          <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </Button>
      </div>
    </div>
  </div>
);

export default function Projects() {
  return (
    <section 
      id="projects" 
      className="py-24 px-8 md:px-16 lg:px-32 bg-amber-50 text-gray-800"
    >
      <h2 
        className={`text-5xl font-bold mb-16 text-center ${displayFont.className} text-red-800`}
      >
        Featured Projects
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {PROJECTS_DATA.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}