import React from 'react';
import { Button } from '@/components/ui/button';
import { Playfair_Display } from 'next/font/google';

const displayFont = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700', '900'],
});

export default function Hero() {
  return (
    <section 
      id="hero" 
      // Background is light amber (Beige)
      className="flex flex-col items-start justify-center min-h-screen pt-24 px-8 md:px-16 lg:px-32 
                 bg-amber-50 text-gray-800"
    >
      <div className="max-w-4xl">
        
        {/* Name: Deep Red (Burgundy) */}
        <h1 className={`text-6xl sm:text-7xl lg:text-8xl ${displayFont.className} font-black text-red-800 mb-4 leading-tight`}>
          Irene S. Montalvo
        </h1>

        {/* Title: Medium Red (Dark Red) */}
        <p className={`text-2xl sm:text-3xl lg:text-4xl ${displayFont.className} font-medium text-red-600 mb-6`}>
          Web Developer | UI/UX Enthusiast
        </p>

        {/* Intro: Dark Gray (Foreground) */}
        <p className="text-lg md:text-xl text-gray-800 mb-8 leading-relaxed">
          I am a third-year Computer Science student passionate about building user-friendly and visually appealing web interfaces. I turn logical thinking into creative, polished digital experiences.
        </p>

        {/* CTA: Shadcn button cannot use literal colors without config, so we override it aggressively. */}
        <Button 
          asChild
          size="lg"
          // Override the shadcn background to deep red (Burgundy)
          className="px-8 py-6 text-lg tracking-wider font-semibold bg-red-800 text-amber-50
                     hover:bg-red-700 transition-colors duration-300 shadow-xl"
        >
          <a href="#projects">View My Work →</a>
        </Button>
      </div>
    </section>
  );
}