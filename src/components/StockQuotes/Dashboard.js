import React from 'react'
import { Link } from 'gatsby'
import ProjectInfo from '../ProjectInfo';

const Dashboard = ({ children, uri }) => {
  return (
    <div>
      <h2>Stock Quote Dashboard</h2>
      <nav>
        <Link to={`${uri}/tsla`}>Data for Tesla</Link>
        <Link to={`${uri}/aapl`}>Data for Apple</Link>
      </nav>

      {children}

      <ProjectInfo
        title="React Multi Page App"
        url="https://rapidapi.com/blog/react-multi-page-app/"
      >
        Next up: add in search functionality
        </ProjectInfo>
    </div>
  )
}

export default Dashboard