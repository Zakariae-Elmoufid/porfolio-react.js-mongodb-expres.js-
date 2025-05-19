import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Academic from './components/Academic';
import Technologies from './components/Technologies';
// import Projects from '../components/Projects';
// import Contact from '../components/Contact';
// import Footer from '../components/Footer';

const App = () => {
  useEffect(() => {
    document.title = "Zakariae Elmoufid | Full-Stack Developer";
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
       <Hero />
      <About />
      <Academic />
      <Technologies />
      {/*<Projects />
      <Contact />
      <Footer /> */}
    </div>
  );
};

export default App;
