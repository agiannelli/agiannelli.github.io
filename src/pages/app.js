import React from 'react'
import { Router, Link } from "@reach/router"
import Layout from '../components/Layout'
import MyInfo from '../components/MyInfo'
import Default from '../components/Default'
import DashboardDefault from '../components/DashboardDefault'
import Dashboard from '../components/Dashboard'
import Data from '../components/Data';

const App = ({ location }) => {
  return (
    <Layout>
      <h1>Welcome to the App Page <span>{location.pathname}</span></h1>
      <nav>
        <Link to='/app/info'>Info</Link>
        <Link to='/app/dashboard'>Dashboard</Link>
      </nav>
      <Router basepath="/app">
        <Default path="/" />
        <MyInfo path="/info" />
        <Dashboard path="/dashboard">
          <DashboardDefault path="/" />
          <Data path=":dataId" />
        </Dashboard>
      </Router>
    </Layout>
  )
}

export default App;