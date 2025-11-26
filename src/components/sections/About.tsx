import React from 'react';
import Image from 'next/image';
import { Playfair_Display } from 'next/font/google';

const displayFont = Playfair_Display({
  subsets: ['latin'],
  weight: ['700'],
});

export default function About() {
  return (
    <section 
      id="about" 
      className="py-24 px-8 md:px-16 lg:px-32 bg-amber-50 text-gray-800 border-b border-gray-300"
    >
      <h2 
        className={`text-5xl font-bold mb-16 text-center ${displayFont.className} text-red-800`}
      >
        About Me
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-start max-w-7xl mx-auto">
        
        <div className="lg:col-span-1 flex justify-center">
          <div className="relative w-full max-w-xs aspect-square border-4 border-red-600 shadow-2xl rounded-lg overflow-hidden">
            <Image
              src="/avatar.PNG"
              alt="Professional photo of Irene S. Montalvo"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </div>

        {/* Text Container: Now uses a more complex layout for visual interest */}
        <div className="lg:col-span-2 space-y-8 text-lg leading-relaxed">
          
          <p className="max-w-3xl">
            I am a third-year **Bachelor of Science in Computer Science** student with a growing passion for web development. Even though I’m still at the beginner stage, I’ve discovered that creating websites is something I genuinely enjoy. Learning how structure, design, and functionality work together has made web development one of the fields I’m most excited to pursue.
          </p>

          {/* ADVANCED BREAKOUT: Deep Red Background for Quote */}
          <div className="p-6 bg-red-800 text-amber-50 rounded-lg shadow-xl max-w-3xl">
            <p className="italic text-xl font-medium">
                What started as basic layout experiments eventually grew into a deeper interest in building **user-friendly and visually appealing interfaces**. Web design, in particular, has become something I truly enjoy because it allows me to be creative while still applying **logical thinking**.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6 max-w-3xl">
            
            {/* NEW SCANNABLE SECTION 1 */}
            <div>
                <h3 className="text-xl font-bold text-red-800 mb-2">My Development Journey</h3>
                <p className="text-gray-700">
                    My journey began with the foundational concepts of web development, and each new project has helped shape the way I understand problems and approach solutions. I enjoy exploring how different components of a website—design, interactivity, responsiveness, and user experience—come together to create something meaningful and polished.
                </p>
            </div>

            {/* NEW SCANNABLE SECTION 2 */}
            <div>
                <h3 className="text-xl font-bold text-red-800 mb-2">Future Focus</h3>
                <p className="text-gray-700">
                    As I continue learning, I’m committed to strengthening my skills, building more projects, and continuously expanding my understanding of web development. I look forward to creating work that reflects both my progress and my personality as a developer.
                </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}