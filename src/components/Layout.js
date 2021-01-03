import React, { useState } from 'react';
import { Link } from 'gatsby';
import Navigation from '../components/Navigation';
import logo from '../img/giannelli.tech banner.png';
import '../css/main.css';

const Layout = ({ children }) => {
  const [wid, setwid] = useState("0%");

  const openNav = () => {
    setwid("25%")
  };

  const closeNav = () => {
    setwid("0%");
  };
  return (
    <>
      <header>
        <Link to='/'><img className="logo" src={logo} alt="giannelli.tech" /></Link>
        <button onClick={openNav}>Open Nav</button>
        <Navigation width={wid} closeNav={closeNav} />
      </header>
      <main>
        {children}
      </main>
    </>
  )
}

export default Layout