/* eslint-disable react/require-default-props */
import React, { useEffect, useState } from 'react';
import './styles.css';
import classNames from 'classnames';
import PropTypes from 'prop-types';
// import Logo from '../../images/ab.svg';
import Ab from '../../images/icons/ab';
import { linksData } from '../../helpers/data';
import HamburgerMenu from './components/burgerMenu';

function Header({ setShowMenu }) {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      if (currentScroll > 200) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const headerClassNames = classNames('header', { 'is-sticky': isSticky });

  return (
    <header className={headerClassNames}>
      <nav id="navigation">
        <div className="logo">
          <div>
            <a href="/" aria-label="home button">
              <Ab width="50px" height="50px" />
            </a>
          </div>
        </div>
        <div className="links">
          <ol className="links_sections">
            {linksData.map((link) => (
              <div className="linkWrapper" key={link.key}>
                <span className="link_num">{link.num}</span>
                <a href={link.link} className="headerLink">{link.title}</a>
              </div>
            ))}
          </ol>
          <div className="button-to-cv" />
        </div>
        <HamburgerMenu setShowMenu={setShowMenu} />
      </nav>
    </header>
  );
}

Header.propTypes = {
  setShowMenu: PropTypes.func,
};

export default Header;
