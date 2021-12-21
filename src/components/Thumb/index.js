import React from 'react';
import PropTypes from 'prop-types';
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
Thumb.propTypes = {
  image: PropTypes.string,
  movieID: PropTypes.number,
  clickable: PropTypes.bool,
};

export default Thumb;
