import React, { useState, useEffect } from 'react';
import '../src/style.css';
const Gallery = () => {
  const [images, setImages] = useState([]);
  const imgURL = 'https://jsonplaceholder.typicode.com/photos';
  useEffect(() => {
    fetch(imgURL)
      .then((response) => response.json())
      .then((json) => setImages(json));
  }, []);

  return (
    <div>
      <h1 className="G_heading">Art Gallery</h1>
      {images.map((image) => {
        return (
          <div key={image.id} className="G_content">
            <img className="G_img" src={image.url} alt="" />
          </div>
        );
      })}
    </div>
  );
};
export default Gallery;
