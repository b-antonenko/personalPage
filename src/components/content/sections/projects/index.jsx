import React, { useState, useRef } from 'react';
import classNames from 'classnames';
import useElementObserver from '../../../../helpers/hooks/useElementObserver';
import Title from '../../components/Title';
import Project from '../../components/Project';
import { projects } from '../../../../helpers/data';
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
      {projects.map((project, i) =>  
        <Project 
          key={project.name} 
          name={project.name} 
          description={project.description} 
          stack={project.stack} 
          website={project.website} 
          git={project.git} 
          img={project.img}
          isLeftAligned={i % 2 === 1} 
        />)}
    </section>
  );
}

export default Projects;
