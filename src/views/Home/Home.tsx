import React from "react";
import "./Home.css";

import Banner from "../../components/Banner/Banner";
import ImagePanel from "../../components/ImagePanel/ImagePanel";
import Introduction from "../../components/Introduction/Introduction";
import Testimonials from "../../components/Testimonials/Testimonials";
import CallToAction from "../../components/CallToAction/CallToAction";
import ViewMenu from "../../components/ViewMenu/ViewMenu";

import { images } from "../../data/imagePanel.json";


/*
react mobile notes
--- contact ---
the Instagram icon does not appear

button does not work for home
for some reason the images don't work for the carousel. maybe preload them?
menu banner is not being loaded properly

maybe find a way to download the pictures because they aren't being loaded immediately.
edit crop img_0777
add pikachu and Minecraft special macarons onto the specialty section for macarons
*/
const Home: React.FC = () => {
  return (
    <>
    <main>
      <Banner page="home" />
      <ImagePanel images={images} />
      <Introduction />
      <ViewMenu />
      <Testimonials />
      <CallToAction />
      {/* Instagram API Image Carousel  */}
    </main>
    </>
    
  );
};

export default Home;
