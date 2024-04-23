/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import IconLinkedin from '../../../../images/icons/linkedin';
import IconGithub from '../../../../images/icons/gihub';
import IconInsta from '../../../../images/icons/insta';
import './styles.css';

const socialLinks = [
  { src: <IconLinkedin />, link: 'https://google.com' },
  { src: <IconGithub />, link: 'https://google.com' },
  { src: <IconInsta />, link: 'https://google.com' },
];

function Links() {
  console.log('links');

  return (
    <aside id="contact-links">
      <ul>
        {socialLinks.map((link) => <li className="social-link" key={link.link}><a href="/#about">{link.src}</a></li>)}
      </ul>
    </aside>
  );
}

export default Links;
