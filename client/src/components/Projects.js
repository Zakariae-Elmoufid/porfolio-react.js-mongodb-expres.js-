import React , { useEffect, useState, useRef }  from 'react';
import { Folder, ExternalLink, Github } from 'lucide-react';
import { Button } from './ui/button';


const ProjectCard = ({ title, description, tech, sourceUrl, demoUrl, delay }) => {
  return (
    <div className={`project-card h-full flex flex-col border border-gray-200 shadow-md animate-on-scroll ${delay}`}>
      <h3 className="text-xl font-bold text-portfolio-dark mb-3 font-heading">{title}</h3>
      <p className="text-gray-700 mb-4 flex-grow">{description}</p>
      
      <div className="mb-4">
        <h4 className="text-sm font-semibold mb-2 text-gray-500">Technologies used:</h4>
        <div className="flex flex-wrap gap-2">
          {tech.map((item, index) => (
            <span key={index} className="px-2 py-1 bg-portfolio-purple/10 text-portfolio-purple rounded-full text-xs">
              {item}
            </span>
          ))}
        </div>
      </div>
      
      <div className="flex space-x-3 mt-auto pt-4 border-t border-gray-200">
        {sourceUrl && (
          <Button variant="outline" size="sm" className="flex items-center gap-1" asChild>
            <a href={sourceUrl} target="_blank" rel="noopener noreferrer">
              <Github className="h-4 w-4" />
              <span>Code</span>
            </a>
          </Button>
        )}
        {demoUrl && (
          <Button size="sm" className="flex items-center gap-1 bg-portfolio-purple hover:bg-portfolio-purple/90" asChild>
            <a href={demoUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="h-4 w-4" />
              <span>Demo</span>
            </a>
          </Button>
        )}
      </div>
    </div>
  );
};

const Projects = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-slide-up');
          }
        });
      },
      { threshold: 0.1 }
    );

    const childElements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    childElements?.forEach((el) => {
      observer.observe(el);
    });

    return () => {
      childElements?.forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);

  return (
    <section id="projects" className="bg-gray-50 py-16 md:py-24">
      <div className="section-container" ref={sectionRef}>
        <div className="flex items-center gap-2 mb-8">
          <Folder className="h-6 w-6 text-portfolio-purple" />
          <h2 className="section-title">Projects</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ProjectCard
            title="CareerLink - Online Recruitment Platform"
            description="CareerLink aims to develop a comprehensive and performant platform to connect candidates with job opportunities in various sectors."
            tech={["PHP OOP", "MySQL", "JavaScript", "HTML/CSS"]}
            sourceUrl="https://github.com/username/careerlink"
            demoUrl="https://careerlink-demo.netlify.app"
            delay="animate-delay-100"
          />
          
          <ProjectCard
            title="FUT Champions Web - Ultimate Team App"
            description="Creation of a web application allowing users to customize and manage their tactical formations and player teams, via an interactive interface."
            tech={["HTML", "CSS", "JavaScript"]}
            sourceUrl="https://github.com/username/fut-champions"
            demoUrl="https://zakariae-elmoufid.github.io/FUT-Champions-Web-App-Utimate-Team/assets/pages/formation.html"
            delay="animate-delay-200"
          />
          
          <ProjectCard
            title="Online-Course-Platform"
            description="Youdemy is an interactive online learning platform where students can enroll in courses and teachers can create and manage them. It offers personalized experiences to simplify education for both users."
            tech={["php", "oop", "javascript", "composer", "Tailwind CSS"]}
            sourceUrl="https://github.com/Zakariae-Elmoufid/Udemy-Online-Course-Platform"
            delay="animate-delay-300"
          />
          
          <ProjectCard
            title="JapaneseArtCollection"
            description="We are looking for a skilled Front-end UI/UX developer to finalize the design mockup and integrate the web pages for the JapArt site. The goal is to enhance the site's visual appeal and usability while providing a better user experience."
            tech={["figma", "html", "css"]}
            sourceUrl="https://github.com/Zakariae-Elmoufid/JapaneseArtCollection"
            demoUrl="https://zakariae-elmoufid.github.io/JapaneseArtCollection"
            delay="animate-delay-400"
          />
          
          <ProjectCard
            title="Personal Portfolio"
            description="My personal website showcasing my skills, projects and professional background with a modern and responsive design."
            tech={["React", "Tailwind CSS", "Framer Motion", "JavaScript"]}
            sourceUrl="https://github.com/username/personal-portfolio"
            demoUrl="#"
            delay="animate-delay-500"
          />
          
          <ProjectCard
            title="REST API for BudgetBuddy"
            description=" BudgetBuddy aims to provide a secure API that allows users to manage their expenses efficiently. Using Laravel Sanctum for authentication will ensure data security while enabling controlled access to expense management features."
            tech={["php", "laravel", "postman", "sunctom", "restAPI"]}
            sourceUrl="https://github.com/Zakariae-Elmoufid/BudgetBuddy/tree/develop"
            delay="animate-delay-600"
          />
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            These projects represent part of my work. I'm constantly learning and regularly adding new projects to my portfolio.
          </p>
          <Button 
            className="bg-portfolio-purple hover:bg-portfolio-purple/90" 
            size="lg"
            asChild
          >
            <a href="https://github.com/Zakariae-Elmoufid" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              <Github className="h-5 w-5" />
              <span>See more on GitHub</span>
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
