import React from 'react';
import Layout from '../components/Layout'

const ChuckNorris = ({ location }) => {
  return (
    <Layout>
      <h1>Chuck Norris Joke Generator<span>{location.pathname}</span></h1>
      <h2>Static HTML Page</h2>
    </Layout>
  )
}

export default ChuckNorris;