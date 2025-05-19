import React, { useEffect, useRef } from 'react';
import { BookOpen } from 'lucide-react';

const Academic = () => {
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

    const childElements = sectionRef.current?.querySelectorAll('.timeline-item');
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
    <section id="academic" className="bg-gray-50 ">
      <div className="section-container" ref={sectionRef}>
        <div className="flex items-center gap-2 mb-8">
          <BookOpen className="h-6 w-6 text-portfolio-purple" />
          <h2 className="section-title">Academic Background</h2>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="timeline-item">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-portfolio-dark font-heading">YouCode UM6P</h3>
              <p className="text-sm text-gray-500 mb-2">2024 - Present</p>
              <p className="text-gray-700">Web Development, Youssoufia Campus</p>
              <div className="mt-4 inline-flex items-center px-3 py-1 rounded-full text-sm bg-portfolio-purple/10 text-portfolio-purple">
                <span>Full Stack Development</span>
              </div>
            </div>
          </div>
          
          <div className="timeline-item">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-portfolio-dark font-heading">Bachelor's in Sociology</h3>
              <p className="text-sm text-gray-500 mb-2">2022 - 2024</p>
              <p className="text-gray-700">Faculty of Letters and Human Sciences Sais-Fès</p>
              <div className="mt-4 inline-flex items-center px-3 py-1 rounded-full text-sm bg-portfolio-blue/10 text-portfolio-blue">
                <span>Social Sciences</span>
              </div>
            </div>
          </div>
          
          <div className="timeline-item">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-portfolio-dark font-heading">Self-directed Learning</h3>
              <p className="text-sm text-gray-500 mb-2">2022 - Present</p>
              <p className="text-gray-700">Continuous learning of web technologies through online platforms such as
              Udemy, freeCodeCamp, and official documentation.</p>
              <div className="mt-4 inline-flex items-center px-3 py-1 rounded-full text-sm bg-portfolio-accent/10 text-portfolio-accent">
                <span>Web Development</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Academic;
