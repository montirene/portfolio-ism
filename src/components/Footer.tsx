import React from 'react';
import { Playfair_Display } from 'next/font/google';
import { Github, Linkedin } from 'lucide-react'; // Import icons

const displayFont = Playfair_Display({
  subsets: ['latin'],
  weight: ['700'],
});

const NAV_LINKS = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12 px-8 md:px-16 lg:px-32">
      <div className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto">
        
        {/* Logo/Name */}
        <div className={`text-3xl font-bold ${displayFont.className} text-amber-50 mb-6 md:mb-0`}>
          ISM
        </div>
        
        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-lg font-medium">
          {NAV_LINKS.map((item) => (
            <a 
              key={item.href} 
              href={item.href} 
              className="text-white hover:text-red-600 transition-colors duration-200"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
      
      {/* Social Links */}
      <div className="flex justify-center gap-6 mt-8">
        <a 
          href="https://github.com/montirene" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-white hover:text-red-600 transition-colors duration-200"
        >
          <Github size={28} />
        </a>
        <a 
          href="https://www.linkedin.com/in/montirene" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-white hover:text-red-600 transition-colors duration-200"
        >
          <Linkedin size={28} />
        </a>
      </div>

      {/* Copyright */}
      <div className="text-center text-sm text-gray-400 mt-8 pt-4 border-t border-gray-700">
        &copy; {currentYear} Irene S. Montalvo. All rights reserved.
      </div>
    </footer>
  );
}