import React, { useState } from 'react';
import { Link } from 'gatsby';
import Button from 'react-bootstrap/Button'
import Navigation from './Navigation';
import logo from '../img/giannelli.tech banner.png';

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
      <header className="header">
        <Button variant="outline-secondary" onClick={openNav}>Open Nav</Button>
        <Navigation width={wid} closeNav={closeNav} />
        <Link to='/'><img className="image" src={logo} alt="giannelli.tech" /></Link>
      </header>
      <main className="main">
        {children}
      </main>
    </>
  )
}

export default Layout