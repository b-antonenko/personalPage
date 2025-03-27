import React from 'react';
import Button from '../../components/Button';
import { onSayHelloButtonClick } from '../../../../helpers/data';
import './styles.css';

function Contact() {
  return (
    <section id="contact">
      <div className="contact_title">
        <h2>04. What’s Next?</h2>
        <h2 className="hello">Get In Touch</h2>
      </div>
      <div className="contact-text">
        <p>
          Currently I'm looking for new opportunities, so
          <br />
          my inbox is always open. Whether you have a question or just want to say hi,
          <br />
          I’ll try my best to get back to you!
        </p>
      </div>
      <Button title="Say Hello" onClick={onSayHelloButtonClick} />
    </section>
  );
}

export default Contact;
