import React from 'react';
import { Link } from 'gatsby';
import { Container, Jumbotron } from 'react-bootstrap';
import Layout from '../components/Layout';
import 'bootstrap/dist/css/bootstrap.min.css';


const Home = ({ location }) => {
  return (
    <Layout>
      <Jumbotron fluid>
        <Container>
          <h1> Welcome!</h1>
          <Link to='/test'>Test Page :)</Link>
        </Container>
      </Jumbotron>
    </Layout >
  )
}

export default Home;