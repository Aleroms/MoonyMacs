import React from "react";
import "./ImagePanel.css";

interface Image {
  src: string;
  alt: string;
}

interface ImagePanelProps {
  images: Image[];
}

const ImagePanel: React.FC<ImagePanelProps> = ({ images }) => {
  const imageWidth = 200;

  return (
    <section className="image-panel">
      <div className="image-row">
        {images.map((image, idx) => (
          <div className="img-panel-wrapper" key={idx}>
            <img src={image.src} alt={image.alt} width={imageWidth} loading="lazy"/>
          </div>
        ))}
      </div>
    </section>
  );
};
export default ImagePanel;
