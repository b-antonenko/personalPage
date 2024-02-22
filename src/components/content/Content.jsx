import React from 'react';
import './styles.css';

import Hero from './sections/hero/Hero';
import About from './sections/about/About';
import Experience from './sections/experience';

function Content() {
  console.log('jhello content');

  return (
    <main className="main">
      <Hero />
      <About />
      <Experience />
    </main>
  );
}

export default Content;
