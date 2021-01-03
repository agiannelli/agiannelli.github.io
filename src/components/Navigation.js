import { render } from '@testing-library/react';
import React from 'react';
import { Link } from 'gatsby';

const Navigation = (props) => {

  return (
    <nav style={{ width: props.width }} className="navigation">
      <button onClick={props.closeNav}>X</button>
      <Link to='/'>Home</Link>
      <Link to='/app'>App</Link>
      <Link to='/chucknorris'>Chuck Norris</Link>
    </nav>
  );
};

export default Navigation;