import React from "react";
import ServiceCards from "./servicecards";
import Carousel from "./carousel";
import TestComponent from "./testcomponent";
import Lightbox from "./lightbox";
import Gallery from "./gallery";
import Fancybox from "./fancy";

const HomePage = () => {
  return (
    <>
      <Carousel />
      <ServiceCards />
      {/* <Gallery /> */}
      {/* <TestComponent/> */}
      {/* <Lightbox /> */}
      {/* <Fancybox /> */}
    </>
  );
};

export default HomePage;
