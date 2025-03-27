import React, { useState, useRef } from 'react';
import classNames from 'classnames';
import { technologies } from '../../../../helpers/data';
import Title from '../../components/Title';
import photo from '../../../../images/bohdan.jpg';
import useElementObserver from '../../../../helpers/hooks/useElementObserver';
import './styles.css';

function About() {
  const [isVisible, setIsVisible] = useState(false);
  const blockRef = useRef();

  useElementObserver(blockRef, setIsVisible);

  const blockClasses = classNames('about', {
    hidden: !isVisible,
    animated: isVisible,
  });
  return (
    <section ref={blockRef} className={blockClasses} id="about">
      <Title title="About Me" sectionNumber="01. " />
      <div className="about_content">
        <div className="about_text">
          <p>
            Hello! My name is Bohdan and I enjoy creating things that live on
            <br />
            the internet. My interest in web development started back in 2019
            <br />
            when I decided to try web engineering,
            <br />
            starting to develop cross-platform mobile apps based on React Native!
          </p>
          <p>
            Fast-forward to today, and I’ve had the privilege of working on a different projects.
            <br />
            My main focus these days is building
            <br />
            accessible, inclusive components and digital experiences
            <br />
            at Transcenda for a variety of clients. Right now, I'm looking for a new opportunities.
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
