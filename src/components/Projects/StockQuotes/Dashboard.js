import React from 'react';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'gatsby';
import ProjectInfo from '../ProjectInfo';

const Dashboard = ({ children, uri }) => {
  return (
    <div>
      <h2>Stock Quote Dashboard</h2>
      <Nav className="flex-column">
        <Link to={`${uri}/tsla`}>Data for Tesla</Link>
        <Link to={`${uri}/aapl`}>Data for Apple</Link>
      </Nav>

      {children}

      <ProjectInfo
        title="React Multi Page App"
        url="https://rapidapi.com/blog/react-multi-page-app/"
        nextUp="add in search functionality"
      />
    </div>
  )
}

export default Dashboard