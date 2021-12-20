import React from 'react';

import { Link } from 'react-router-dom';
//Styles
import { Image } from './Thumb.styles';

const Thumb = ({ image, movieID, clickable }) => (
  <div>
    {clickable ? (
      <Link to={`/${movieID}`}>
        <Image src={image} alt="movieThumbnail" />
      </Link>
    ) : (
      <Image src={image} alt="movieThumbnail" />
    )}
  </div>
);

export default Thumb;
