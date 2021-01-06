import React from 'react';
import { Container, Jumbotron } from 'react-bootstrap';
import Layout from '../components/Layout';
import 'bootstrap/dist/css/bootstrap.min.css';
import PersistentDrawerLeft from '../components/PersistentNav';


const Home = ({ location }) => {
  return (
    <PersistentDrawerLeft />
  )
}

export default Home;