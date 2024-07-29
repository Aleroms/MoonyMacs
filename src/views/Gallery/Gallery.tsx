import React from "react";
import Banner from "../../components/Banner/Banner";
import "./Gallery.css";
import images from "../../data/gallery.json";
import GalleryComponent from "../../components/GalleryComponent/GalleryCompontent";

const Gallery: React.FC = () => {
  return (
    <main>
      <Banner page="gallery" title="Gallery" />
      <GalleryComponent images={images} />
    </main>
  );
};

export default Gallery;
