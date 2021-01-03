import React from 'react'
import { Link } from 'gatsby'

const Dashboard = ({ children, uri }) => {
  return (
    <div>
      <h2>Stock Quote Dashboard</h2>
      <nav>
        <Link to={`${uri}/tsla`}>Data for Tesla</Link>
        <Link to={`${uri}/aapl`}>Data for Apple</Link>
      </nav>

      {children}
    </div>
  )
}

export default Dashboard