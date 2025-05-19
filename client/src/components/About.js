import React, { useEffect, useRef } from 'react';
import { User, Briefcase } from 'lucide-react';
import picture from "../images/picture.jpg";

const About = () => {
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
 <section id="about" >
      <div className="section-container" ref={sectionRef}>
        <div className="flex items-center gap-2 mb-8">
          <User className="h-6 w-6 text-portfolio-purple" />
          <h2 className="section-title">About Me</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5 animate-on-scroll animate-delay-100">
            <img
              src={picture}
              alt="Zakariae - Full Stack Developer"
              className="w-full max-w-sm  rounded-lg shadow-lg"
            />
          </div>

          {/* Text section */}
          <div className="lg:col-span-7 animate-on-scroll animate-delay-100">
            <h3 className="text-2xl font-bold text-portfolio-dark mb-4 font-heading">
              Who Am I?
            </h3>
            <div className="space-y-4 text-gray-700">
              <p>
                I'm Zakariae, a passionate Full-Stack Developer with a strong focus on creating
                efficient web solutions. Having transitioned from Sociology studies to web development,
                I bring a unique perspective to technical projects.
              </p>
              <p>
                I'm dedicated to continuous learning and evolving my skills across various technologies.
                My approach combines technical expertise with an understanding of user needs to build
                intuitive and impactful applications.
              </p>
              <p>
                Currently, I'm focused on expanding my expertise in modern web development frameworks
                and deepening my skills in both front-end and back-end technologies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
