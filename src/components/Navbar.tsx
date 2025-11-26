"use client";

import React from 'react';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Playfair_Display } from 'next/font/google';

const displayFont = Playfair_Display({
  subsets: ['latin'],
  weight: ['900'],
});

const NAV_ITEMS = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 shadow-md bg-gray-900">
      <div className="flex items-center justify-between h-20 px-8 md:px-16 lg:px-32">
        
        {/* Logo/Name: Amber/Beige text on Black background */}
        <a href="#hero" className={`text-3xl font-black ${displayFont.className} text-amber-50`}>
          ISM
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              // White text, Red hover effect
              className="text-white hover:text-red-600 font-medium transition-colors duration-200"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Mobile Navigation (Sheet/Hamburger Menu) */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              {/* White hamburger icon */}
              <Button variant="ghost" size="icon" className="text-white">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-red-800 border-none text-white pt-10">
              <nav className="flex flex-col space-y-6 mt-8">
                {NAV_ITEMS.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="text-white text-2xl font-semibold hover:text-amber-50 transition-colors duration-200"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}