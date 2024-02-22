import React from 'react';
import Title from '../../components/Title';
import Tabs from '../../components/Tabs';
import { data, buttons } from '../../../../helpers/data';
import './styles.css';

function Experience() {
  return (
    <section className="experience" id="experience">
      <Title title="Experience" sectionNumber="02. " />
      <Tabs data={data} buttons={buttons} />
    </section>
  );
}

export default Experience;
