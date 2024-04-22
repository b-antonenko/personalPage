/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

function Button({ onClick, title }) {
  console.log('button');

  return (
    <button className="redirect" type="button" onClick={onClick}>{title}</button>
  );
}

Button.propTypes = {
  onClick: PropTypes.func,
  title: PropTypes.string,
};

export default Button;
