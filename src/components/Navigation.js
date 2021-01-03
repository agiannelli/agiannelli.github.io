import { render } from '@testing-library/react';
import React from 'react';
import { Link } from 'gatsby';
import '../css/main.css';

const Navigation = (props) => {

  return (
    <nav style={{ width: props.width }} className="navigation">
      <button onClick={props.closeNav}>X</button>
      <Link to='/' onClick={props.closeNav}>Home</Link>
      <Link to='/app' onClick={props.closeNav}>Projects</Link>
      <Link to='/about-me' onClick={props.closeNav}>About Me</Link>
      <p>&copy; 2021 <a className="link" href="mailto:giannelli.tech@gmail.com">giannelli.tech</a></p>
    </nav>
  );
};

export default Navigation;