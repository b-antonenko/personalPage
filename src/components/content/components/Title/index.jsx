/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

function Title({ title, sectionNumber }) {
  console.log('sectionNumber', sectionNumber);

  return (
    <div className="section_header">
      <span className="section-number">{sectionNumber}</span>
      <h2>
        {title}
      </h2>
    </div>
  );
}

export default Title;

Title.propTypes = {
  title: PropTypes.string,
  sectionNumber: PropTypes.string,
};
