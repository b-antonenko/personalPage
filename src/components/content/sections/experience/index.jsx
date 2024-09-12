import React, { useState, useRef } from 'react';
import classNames from 'classnames';
import Title from '../../components/Title';
import Tabs from '../../components/Tabs';
import { data, buttons } from '../../../../helpers/data';
import useElementObserver from '../../../../helpers/hooks/useElementObserver';

function Experience() {
  const [isVisible, setIsVisible] = useState(false);
  const blockRef = useRef();

  useElementObserver(blockRef, setIsVisible);

  const blockClasses = classNames('experience', {
    hidden: !isVisible,
    animated: isVisible,
  });
  return (
    <section ref={blockRef} className={blockClasses} id="experience">
      <Title title="Experience" sectionNumber="02. " />
      <Tabs data={data} buttons={buttons} />
    </section>
  );
}

export default Experience;
