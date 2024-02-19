import React from 'react';
import './styles.css';

import Hero from './components/hero/Hero';

function Content() {
  console.log('jhello content');

  return (
    <main className="main">
      <Hero />
    </main>
  );
}

export default Content;
