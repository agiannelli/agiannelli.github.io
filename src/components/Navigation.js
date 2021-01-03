import React from 'react';
import { Link } from 'gatsby';
import '../css/main.css';

const Navigation = (props) => {
  const year = new Date().getFullYear();
  return (
    <nav style={{ width: props.width }} className="navigation">
      <button onClick={props.closeNav}>X</button>
      <Link to='/' onClick={props.closeNav}>Home</Link>
      <Link to='/app' onClick={props.closeNav}>Projects</Link>
      <Link to='/about-me' onClick={props.closeNav}>About Me</Link>
      <p className="copyright">&copy; {year} giannelli.tech</p>
    </nav>
  );
};

export default Navigation;