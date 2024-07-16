import React from "react";
import Banner from "../../components/Banner/Banner";
import "./Gallery.css";
import GalleryComponent from "../../components/GalleryComponent/GalleryCompontent";

const Gallery: React.FC = () => {
  const images = [
    { id: 1, path: "gallery/test.png", alt: "Image 1" },
    { id: 2, path: "gallery/test.png", alt: "Image 2" },
    { id: 3, path: "gallery/test.png", alt: "Image 3" },
    { id: 4, path: "gallery/test.png", alt: "Image 4" },
    { id: 5, path: "gallery/test.png", alt: "Image 5" },
    { id: 6, path: "gallery/test.png", alt: "Image 6" },
    // Add more images as needed
  ];
  return (
    <main>
      <Banner page="gallery" title="Gallery" />
      <GalleryComponent images={images} />
    </main>
  );
};

export default Gallery;
