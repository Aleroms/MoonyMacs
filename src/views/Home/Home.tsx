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
for some reason the images don't work for the carousel. maybe preload them?
menu banner is not being loaded properly
maybe find a way to download the pictures because they aren't being loaded immediately.
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
