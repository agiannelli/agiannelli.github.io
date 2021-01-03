import React from 'react';
import { Container, Jumbotron } from 'react-bootstrap';
import Layout from '../components/Layout';
import 'bootstrap/dist/css/bootstrap.min.css';


const Home = ({ location }) => {
  return (
    <Layout>
      <Jumbotron fluid>
        <Container>
          <h1> Welcome!</h1>
        </Container>
      </Jumbotron>
    </Layout >
  )
}

export default Home;