import React from 'react';
import { Progress } from '@/components/ui/progress';
import { Playfair_Display } from 'next/font/google';

const displayFont = Playfair_Display({
  subsets: ['latin'],
  weight: ['700'],
});

const SKILLS_DATA = [
  { name: 'JavaScript (ES6+)', proficiency: 90 },
  { name: 'TypeScript', proficiency: 75 },
  { name: 'React / Next.js (App Router)', proficiency: 85 },
  { name: 'Tailwind CSS', proficiency: 95 },
  { name: 'Git / GitHub / Vercel', proficiency: 80 },
  { name: 'HTML5 / CSS3', proficiency: 95 },
];

export default function Skills() {
  return (
    <section 
      id="skills" 
      className="py-24 px-8 md:px-16 lg:px-32 bg-red-800 text-white"
    >
      <h2 
        className={`text-5xl font-bold mb-16 text-center ${displayFont.className} text-amber-50`}
      >
        Technical Skills
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-8">
        {SKILLS_DATA.map((skill) => (
          <div key={skill.name} className="space-y-2">
            <div className="flex justify-between items-center text-lg font-medium">
              <span className="text-white">{skill.name}</span>
              <span className="text-amber-50">{skill.proficiency}%</span>
            </div>
            
            <Progress 
              value={skill.proficiency} 
              // Set the track color to a dark red and the height to 2
              className="h-2 bg-red-600" 
              // NOTE: indicatorClassName is REMOVED to fix the error.
            />
            
            <p className="text-sm text-red-300">
              Proficiency demonstrated through project experience.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}