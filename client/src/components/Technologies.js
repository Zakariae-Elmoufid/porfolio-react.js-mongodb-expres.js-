import React, { useEffect, useRef } from 'react';
import { Wrench } from 'lucide-react';

const SkillCategory = ({ title, items, icon, delay }) => {
  return (
    <div className={`skill-card animate-on-scroll ${delay}`}>
      <div className="flex items-center mb-4">
        <div className="p-2 rounded-md bg-portfolio-purple/10 mr-3">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-portfolio-dark font-heading">{title}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {items.map((item, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm animate-on-scroll"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

const Technologies = () => {
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
    <section id="technologies" className="py-16 md:py-24">
      <div className="section-container" ref={sectionRef}>
        <div className="flex items-center gap-2 mb-8">
          <Wrench className="h-6 w-6 text-portfolio-purple" />
          <h2 className="section-title">Technical Skills</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <SkillCategory
            title="Back End"
            items={["PHP", "Laravel", "SQL", "API Development", "Authentication"]}
            icon={<svg className="h-6 w-6 text-portfolio-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"></path></svg>}
            delay="animate-delay-100"
          />
          
          <SkillCategory
            title="Front End"
            items={["HTML5", "CSS3", "Bootstrap", "Tailwind CSS", "JavaScript", "Responsive Design"]}
            icon={<svg className="h-6 w-6 text-portfolio-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>}
            delay="animate-delay-200"
          />
          
          <SkillCategory
            title="Database"
            items={["MySQL", "PostgreSQL", "Database Design", "SQL Queries"]}
            icon={<svg className="h-6 w-6 text-portfolio-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4"></path></svg>}
            delay="animate-delay-300"
          />
          
          <SkillCategory
            title="Design"
            items={["UML", "Merise", "Wireframing", "User Flow"]}
            icon={<svg className="h-6 w-6 text-portfolio-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 00-2 2v1a2 2 0 01-2 2h-2a2 2 0 01-2-2v-1a2 2 0 00-2-2H4a1 1 0 01-1-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"></path></svg>}
            delay="animate-delay-400"
          />
        </div>
      </div>
    </section>
  );
};

export default Technologies;
