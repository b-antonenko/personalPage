/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';
import { linksData } from '../../helpers/data';
import IconClose from '../../images/icons/close';
import './styles.css';

function SideMenu({ showMenu, setShowMenu }) {
  return (
    showMenu && (
      <aside id="sideMenu">
        <div className="closeMenuButton">
          <button onClick={() => setShowMenu(false)} aria-label="close" type="button"><IconClose /></button>
        </div>
        <ul>
          {linksData.map((link) => (
            <li>
              <a href={link.link} onClick={() => setShowMenu(false)}>
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
  setShowMenu: PropTypes.func,
};

export default SideMenu;
