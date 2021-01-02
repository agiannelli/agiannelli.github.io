import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import SideNav from './components/SideNav';

function App() {
  const [wid, setWid] = useState('0%');

  const openSideNav = () => {
    setWid('25%');
  };
  const closeSideNav = () => {
    setWid('0%');
  };

  return (
    <div className="App">
      <button onClick={openSideNav}>Open</button>
      <SideNav width={wid} closeNav={closeSideNav} />
    </div>
  );
}

export default App;
