import React, { useState, useRef } from 'react';
import classNames from 'classnames';
import useElementObserver from '../../../../helpers/hooks/useElementObserver';
import Title from '../../components/Title';
import Project from '../../components/Project';
import './styles.css';

function Projects() {
  const [isVisible, setIsVisible] = useState(false);
  const blockRef = useRef();

  useElementObserver(blockRef, setIsVisible);

  const blockClasses = classNames('projects', {
    hidden: !isVisible,
    animated: isVisible,
  });

  return (
    <section id="projects" className={blockClasses} ref={blockRef}>
      <Title title="Some Things I’ve Built" sectionNumber="03. " />
      <Project />
      <Project />
      <Project />
    </section>
  );
}

export default Projects;
