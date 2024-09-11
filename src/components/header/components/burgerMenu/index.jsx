/* eslint-disable react/require-default-props */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import PropTypes from 'prop-types';
import IconHamburger from '../../../../images/icons/hamburger';
import './styles.css';

function HamburgerMenu({ setShowMenu }) {
  const onBurgerClick = () => {
    setShowMenu(true);
  };

  return (
    <button id="burgerMenu" type="button" onClick={onBurgerClick}>
      <IconHamburger />
    </button>

  );
}

HamburgerMenu.propTypes = {
  setShowMenu: PropTypes.func,
};

export default HamburgerMenu;
