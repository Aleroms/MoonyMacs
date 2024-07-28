// import React, { useEffect, useState } from "react";
import React from "react";
import "./ImagePanel.css";
import { images } from "../../data/imagePanel.json";

const ImagePanel: React.FC = () => {
  const imageWidth = 200;

  return (
    <section className="image-panel">
      <div className="image-row">
        {images.map((image, idx) => (
          <div className="img-panel-wrapper">
            <img src={image.src} alt={image.alt} width={imageWidth} key={idx} />
          </div>
        ))}
      </div>
    </section>
  );
};
export default ImagePanel;
