import { render } from '@testing-library/react';
import React from 'react';

const SideNav = (props) => {

  return (
    <div style={{ width: props.width }} className="sidenav">
      <button onClick={props.closeNav}>X</button>
      <a href="#section">Home</a>
    </div>
  );
};

export default SideNav;