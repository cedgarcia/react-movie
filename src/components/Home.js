import React, { useState, useEffect } from 'react';
// API
import API from '../API';
//Config
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from '../config';
// Components

//Hooks
import { useMovieFetch } from '../hooks/useMovieFetch';

//Image
import Noimage from '../images/no_image.jpg';

const Home = () => {
  const { state, loading, error } = useMovieFetch();
  console.log(state);

  return <div>Homepage</div>;
};
export default Home;
