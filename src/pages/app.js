import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/main.css';


import { Router, Link } from '@reach/router';

import Nav from 'react-bootstrap/Nav';
import Layout from '../components/Layout';
import Default from '../components/Projects/Default';
import Dashboard from '../components/Projects/StockQuotes/Dashboard';
import DashboardDefault from '../components/Projects/StockQuotes/DashboardDefault';
import Data from '../components/Projects/StockQuotes/Data';
import ChuckNorrisJokeGenerator from '../components/Projects/ChuckNorrisJokeGenerator';

const App = ({ location }) => {
  const gridStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));

  return (
    <Layout>
      <h1>Portfolio</h1>
      <div className="portfolio">
        <div className="align-left">
          <Nav className="flex-column">
            <Link to='/app/chuck-norris'>Chuck Norris Joke Generator</Link>
            <Link to='/app/stock-quotes'>Stock Quotes Search</Link>
          </Nav>
        </div>
        <div className="align-right">
          <Router basepath="/app">
            <Default path="/" />
            <ChuckNorrisJokeGenerator path="/chuck-norris" />
            <Dashboard path="/stock-quotes">
              <DashboardDefault path="/" />
              <Data path=":dataId" />
            </Dashboard>
          </Router>
        </div>
        <div style={{ clear: "both" }} />
      </div>
    </Layout >
  )
}

export default App;