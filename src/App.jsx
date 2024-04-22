import React from 'react';
import Header from './components/header';
import './App.css';
import Content from './components/content/Content';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
