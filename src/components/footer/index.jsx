import React from 'react';
import Links from './components/links';
import Email from './components/email';
import './styles.css';

function Footer() {
  console.log('footer');

  return (
    <footer id="footer">
      <span>Built by Bohdan Antonenko</span>
      <Links />
      <Email />
    </footer>
  );
}

export default Footer;
