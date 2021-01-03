import React, { useState, useEffect } from 'react';
import { decode } from 'he';
import Layout from './Layout'
import image from '../img/chuck-norris-bg.png'
import ProjectInfo from './ProjectInfo';

const ChuckNorrisJokeGenerator = ({ location }) => {

  const [joke, setJoke] = useState('');

  const fetchJoke = async signal => {
    const url = new URL('https://api.icndb.com/jokes/random');
    const response = await fetch(url, { signal });
    const { value } = await response.json();

    setJoke(decode(value.joke));
  };

  useEffect(() => {
    if (!joke) {
      const controller = new AbortController();
      fetchJoke(controller.signal);

      return () => controller.abort();
    }
  }, [joke]);


  return (
    <div className="main">
      <img className="image" src={image} style={{ maxWidth: "300px" }} alt="chuck norris" />
      <p>{joke || '...'}</p>
      <button className="link" onClick={() => setJoke('')}>
        Get a new joke
        </button>

      <ProjectInfo
        title="Simple User Authentication in React"
        url="https://developer.okta.com/blog/2019/03/06/simple-user-authentication-in-react"
      >
        Next up: add in Okta Log-in support
      </ProjectInfo>
    </div>
  );
};

export default ChuckNorrisJokeGenerator;
