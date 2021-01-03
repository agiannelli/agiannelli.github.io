import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Layout from '../components/Layout';
import { Router, Link } from '@reach/router';
import Default from '../components/Default';
import Dashboard from '../components/StockQuotes/Dashboard';
import DashboardDefault from '../components/StockQuotes/DashboardDefault';
import Data from '../components/StockQuotes/Data';
import ChuckNorrisJokeGenerator from '../components/ChuckNorrisJokeGenerator';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/main.css';

const App = ({ location }) => {
  return (
    <Layout>
      <h1>Portfolio</h1>
      <Nav className="flex-column">
        <Link to='/app'>Projects List</Link>
        <Link to='/app/chuck-norris'>Chuck Norris Joke Generator</Link>
        <Link to='/app/stock-quotes'>Stock Quotes Search</Link>
      </Nav>
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