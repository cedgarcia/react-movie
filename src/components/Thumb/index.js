import React from 'react';

//Styles
import { Image } from './Thumb.styles';

const Thumb = ({ image, movieID, click }) => (
  <div>
    <Image src={image} alt="movieThumbnail" />
  </div>
);

export default Thumb;
