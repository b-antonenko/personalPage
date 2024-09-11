import React, { useState, useRef } from 'react';
import classNames from 'classnames';
import useElementObserver from '../../../../helpers/hooks/useElementObserver';
import Title from '../../components/Title';
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
      <h3>TBA...</h3>
    </section>
  );
}

export default Projects;
