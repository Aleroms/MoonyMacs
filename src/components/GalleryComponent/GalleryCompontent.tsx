import React, { useState } from "react";
import "./GalleryComponent.css";

interface Image {
  id: string;
  path: string;
  alt: string;
}
interface GalleryProps {
  images: Image[];
}

const GalleryComponent: React.FC<GalleryProps> = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);

  const handleClose = () => {
    setSelectedImage(null);
  };

  const handleImageClick = (image: Image) => {
    setSelectedImage(image);
  };

  return (
    <section className="gallery-container">
      <div className="gallery-grid">
        {images.map((image) => (
          <div
            className="gallery-item"
            key={image.id}
            onClick={() => handleImageClick(image)}
          >
            <img src={`gallery/${image.path}`} alt={image.alt} />
          </div>
        ))}

        {selectedImage && (
          <div className="modal" onClick={handleClose}>
            <span className="close">&times;</span>
            <img
              className="modal-content"
              src={`gallery/${selectedImage.path}`}
              alt={selectedImage.alt}
            />
            <div className="caption">{selectedImage.alt}</div>
          </div>
        )}
      </div>
    </section>
  );
};
export default GalleryComponent;
