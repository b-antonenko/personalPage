import React, { useState } from 'react';
import SideMenu from '../../components/sideMenu';
import Header from '../../components/header';
import Content from '../../components/content/Content';
import Footer from '../../components/footer';

function Landing() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="App">
      <SideMenu showMenu={showMenu} setShowMenu={setShowMenu} />
      <Header setShowMenu={setShowMenu} />
      <Content />
      <Footer />
    </div>
  );
}

export default Landing;
