import React from 'react';
import Links from './components/links';
import './styles.css';

function Footer() {
  console.log('footer');

  return (
    <footer id="footer">
      <span>Built by Bohdan Antonenko</span>
      <Links />
    </footer>
  );
}

export default Footer;
