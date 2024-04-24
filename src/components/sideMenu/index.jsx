/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';
import { linksData } from '../../helpers/data';
import './styles.css';

function SideMenu({ showMenu }) {
  console.log('');

  return (
    showMenu && (
      <aside id="sideMenu">
        <ul>
          {linksData.map((link) => (
            <li>
              <a href={link.link}>
                <span className="link-num">{link.num}</span>
                {' '}
                {link.title}
              </a>
            </li>
          ))}
        </ul>
      </aside>
    )
  );
}

SideMenu.propTypes = {
  showMenu: PropTypes.bool,
};

export default SideMenu;
