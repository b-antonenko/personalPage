import React from 'react';
import Header from './components/header';
import './App.css';
import Content from './components/content/Content';

function App() {
  return (
    <div className="App">
      <Header />
      <Content />
      <div style={{ height: '5000px' }} />
    </div>
  );
}

export default App;
