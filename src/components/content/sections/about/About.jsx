import React from 'react';
import { technologies } from '../../../../helpers/data';
import Title from '../../components/Title';
import photo from '../../../../images/bohdan.jpg';
import './styles.css';

function About() {
  console.log('about section');

  return (
    <section className="about" id="about">
      <Title title="About Me" sectionNumber="01. " />
      <div className="about_content">
        <div className="about_text">
          <p>
            Hello! My name is Brittany and I enjoy creating things that live on
            <br />
            the internet. My interest in web development started back in 2012
            <br />
            when I decided to try editing custom Tumblr themes — turns out
            <br />
            hacking together a custom reblog button taught me a lot about HTML & CSS!
          </p>
          <p>
            Fast-forward to today, and I’ve had the privilege of working at
            <br />
            an advertising agency, a start-up, a huge corporation, and
            <br />
            a student-led design studio. My main focus these days is building
            <br />
            accessible, inclusive products and digital experiences
            <br />
            at Upstatement for a variety of clients.
          </p>
          <p>
            Here are a few technologies I’ve been working with recently:
          </p>
          <ul className="about_tech-list">
            {technologies.map((tech) => <li key={tech} className="about_tech">{tech}</li>)}
          </ul>
        </div>
        <div className="about_image">
          <img src={photo} alt="bohdan_antonenko" />
        </div>
      </div>
    </section>
  );
}

export default About;
