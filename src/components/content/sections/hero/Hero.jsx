import React, { useState, useRef } from 'react';
import classNames from 'classnames';
import Button from '../../components/Button';
import { onSayHelloButtonClick } from '../../../../helpers/data';
import useElementObserver from '../../../../helpers/hooks/useElementObserver';
import './styles.css';

function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const blockRef = useRef();

  useElementObserver(blockRef, setIsVisible);

  const blockClasses = classNames('hero', {
    animated: isVisible,
  });

  return (
    <section ref={blockRef} className={blockClasses}>
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
        <Button title="Say hello &#128075;" onClick={onSayHelloButtonClick} />
      </div>
    </section>
  );
}

export default Hero;
