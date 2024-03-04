import React from 'react';
import './styles.css';

import Hero from './sections/hero/Hero';
import About from './sections/about/About';
import Experience from './sections/experience';
import Projects from './sections/projects';
import Contact from './sections/contact-me';

function Content() {
  console.log('jhello content');

  return (
    <main className="main">
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </main>
  );
}

export default Content;
