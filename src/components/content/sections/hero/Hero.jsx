import React from 'react';
import './styles.css';

function Hero() {
  console.log('hero section');

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
          I’m a software engineer specializing in building (and occasionally designing)
          <br />
          exceptional digital experiences. Currently, I’m focused on building accessible,
          <br />
          human-centered products at Upstatement.
        </p>
      </div>
      <div className="text-wrapper">
        <button type="button" onClick={() => console.log('clicked')}>Click me</button>
      </div>
    </section>
  );
}

export default Hero;
