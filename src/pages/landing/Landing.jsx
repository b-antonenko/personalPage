import React, { useState, useEffect } from 'react';
import SideMenu from '../../components/sideMenu';
import Header from '../../components/header';
import Content from '../../components/content/Content';
import Footer from '../../components/footer';
import SplashView from '../../components/splash/splash';

function Landing() {
  const [showMenu, setShowMenu] = useState(false);
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowSplash(false);
    }, 3001);

    return () => {
      clearTimeout(timeoutId)
    };
  }, []);

  return (
    <div className="App" id="app">
      {showSplash ? 
        <SplashView /> : 
        <>
          <SideMenu showMenu={showMenu} setShowMenu={setShowMenu} />
          <Header setShowMenu={setShowMenu} />
          <Content />
          <Footer />
        </>}
    </div>
  );
}

export default Landing;
