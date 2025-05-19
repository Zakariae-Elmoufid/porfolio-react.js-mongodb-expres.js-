import React, { useEffect, useState } from 'react';
import picture from "../images/picture.jpg";
import { ArrowDown } from 'lucide-react';
import { Button } from './ui/button';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50 to-purple-50 z-0"></div>
      <div 
        className={`section-container relative z-10 transform transition-all duration-1000 ${
          isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold text-portfolio-dark mb-4 font-heading">
              <span className="block">Zakariae Elmoufid</span>
              <span className="text-portfolio-purple">Full-Stack Developer</span>
            </h1>
            <p className="text-lg text-gray-700 mb-8 max-w-lg">
              Passionate about web development and dedicated to creating innovative solutions for real-world challenges.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button 
                size="lg" 
                className="bg-portfolio-purple hover:bg-portfolio-purple/90"
                onClick={() => document.getElementById('contact')?.scrollIntoView()}
              >
                Contact Me
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-portfolio-purple text-portfolio-purple hover:bg-portfolio-purple/10"
                onClick={() => document.getElementById('projects')?.scrollIntoView()}
              >
                View Projects
              </Button>
            </div>
          </div>
          <div className="relative hidden md:block">
            <div className="relative w-64 h-64 mx-auto rounded-full overflow-hidden border-4 border-white shadow-xl">
              <img 
                src={picture} 
                alt="Zakariae Elmoufid" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute top-0 -left-5 w-16 h-16 bg-portfolio-blue rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute bottom-10 right-0 w-24 h-24 bg-portfolio-purple rounded-full opacity-20 animate-pulse"></div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="flex flex-col items-center text-sm text-gray-500">
          <span className="mb-2">Scroll Down</span>
          <ArrowDown className="h-5 w-5" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
