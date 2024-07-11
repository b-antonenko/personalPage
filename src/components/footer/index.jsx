import React from 'react';
import Links from './components/links';
import Email from './components/email';
import IconLinkedin from '../../images/icons/linkedin';
import IconGithub from '../../images/icons/gihub';
import IconInsta from '../../images/icons/insta';
import './styles.css';

export const socialLinks = [
  { src: <IconLinkedin />, link: 'https://google.com' },
  { src: <IconGithub />, link: 'https://google.com' },
  { src: <IconInsta />, link: 'https://google.com' },
];

function Footer() {
  return (
    <footer id="footer">
      <div id="footer-contacts">

        {socialLinks.map((li) => <div className="footer-contacts-item" key={li.link}><a href="/#about">{li.src}</a></div>)}

      </div>
      <span>Built by Bohdan Antonenko</span>
      <Links />
      <Email />
    </footer>
  );
}

export default Footer;
