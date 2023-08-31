import React, { useState } from 'react';

export default function Visuals({ cover, prodTitle, img1, img2, img3 }) {
  const [selectedImage, setSelectedImage] = useState(cover);

  const handleImageClick = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  return (
    <div className="col-md bg-white shadow p-4">
      <div className="row mb-3">
        <img src={selectedImage} alt={prodTitle} style={{ height: "45vh", width: "100%" }} />
      </div>
      <div className="row">
            <img style={{height:"15vh"}} className="col-4" src={img1} alt={prodTitle} onClick={() => handleImageClick(img1)} />
            <img style={{height:"15vh"}} className="col-4" src={img2} alt={prodTitle} onClick={() => handleImageClick(img2)} />
            <img style={{height:"15vh"}} className="col-4" src={img3} alt={prodTitle} onClick={() => handleImageClick(img3)} />
      </div>
    </div>
  );
}
