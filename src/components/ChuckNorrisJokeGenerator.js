import React, { useState, useEffect } from 'react';
import { decode } from 'he';
import Layout from './Layout'
import image from '../img/chuck-norris-bg.png'

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
    <div>
      <img className="image" src={image} alt="chuck norris" />
      <p>{joke || '...'}</p>
      <button className="link" onClick={() => setJoke('')}>
        Get a new joke
        </button>
    </div>
  )
}

export default ChuckNorrisJokeGenerator;
