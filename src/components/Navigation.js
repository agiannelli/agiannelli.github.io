import React from 'react';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'gatsby';

const Navigation = (props) => {
  const year = new Date().getFullYear();
  return (
    <Nav style={{ width: props.width }} className="navigation" >
      <Button variant="dark" onClick={props.closeNav}>X</Button>
      <Link to='/' onClick={props.closeNav}>Home</Link>
      <Link to='/app' onClick={props.closeNav}>Projects</Link>
      <Link to='/about-me' onClick={props.closeNav}>About Me</Link>
      <p className="copyright">&copy; {year} giannelli.tech</p>
    </Nav>
  );
};

export default Navigation;