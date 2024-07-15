import React from 'react';
import Button from '../../components/Button';
import './styles.css';

function Hero() {
  return (
    <section className="hero">
      <div className="text-wrapper">
        <h1>Hi, my name is</h1>
      </div>
      <div className="text-wrapper">
        <h2>Bohdan Antonenko.</h2>
      </div>
      <div className="text-wrapper">
        <h3>I build things for the web.</h3>
      </div>
      <div className="text-wrapper">
        <p>
          I’m a front-end software engineer specializing in building
          <br />
          exceptional digital experiences for web and mobile. Currently,
          <br />
          I’m focused on building accessible,
          <br />
          reusable react components at Transcenda.
        </p>
      </div>
      <div className="text-wrapper">
        <Button title="Click me" onClick={() => console.log('click me')} />
      </div>
    </section>
  );
}

export default Hero;
