import React from 'react';
import './styles.css';

import Hero from './components/hero/Hero';
import About from './components/about/About';

function Content() {
  console.log('jhello content');

  return (
    <main className="main">
      <Hero />
      <About />
    </main>
  );
}

export default Content;
