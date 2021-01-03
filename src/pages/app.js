import React from 'react'
import Layout from '../components/Layout'
import { Router, Link } from "@reach/router"
import Default from '../components/Default'
import Dashboard from '../components/StockQuotes/Dashboard'
import DashboardDefault from '../components/StockQuotes/DashboardDefault'
import Data from '../components/StockQuotes/Data'
import ChuckNorrisJokeGenerator from '../components/ChuckNorrisJokeGenerator'

const App = ({ location }) => {
  return (
    <Layout>
      <h1>Portfolio</h1>
      <nav>
        <Link to='/app'>Projects List</Link>
        <Link to='/app/chuck-norris'>Chuck Norris Joke Generator</Link>
        <Link to='/app/stock-quotes'>Stock Quotes Search</Link>
      </nav>
      <Router basepath="/app">
        <Default path="/" />
        <ChuckNorrisJokeGenerator path="/chuck-norris" />
        <Dashboard path="/stock-quotes">
          <DashboardDefault path="/" />
          <Data path=":dataId" />
        </Dashboard>
      </Router>
    </Layout >
  )
}

export default App;