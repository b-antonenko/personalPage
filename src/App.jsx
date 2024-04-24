import React, { useState } from 'react';
import Header from './components/header';
import './App.css';
import Content from './components/content/Content';
import Footer from './components/footer';
import SideMenu from './components/sideMenu';

function App() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="App">
      <SideMenu showMenu={showMenu} />
      <Header setShowMenu={setShowMenu} />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
