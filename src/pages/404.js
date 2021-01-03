import React from 'react';
import Layout from '../components/Layout';
import image from '../img/404.png';

const NotFound = (props) => {
  return (
    <Layout>
      <img className="image" src={image} alt="giannelli.tech" />
    </Layout>
  )
}

export default NotFound