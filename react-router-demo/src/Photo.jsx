import React from 'react';
function Photo({ photo }) {
  return <img src={photo ? photo.url : null} alt={''} className="photo" />;
}

export default Photo;
