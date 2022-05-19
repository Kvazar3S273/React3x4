import React from "react";
import ServiceCards from "./servicecards";
import Carousel from "./carousel";
import TestComponent from "./testcomponent";
import Lightbox from "./lightbox";

const HomePage = () => {
  return (
    <>
      <Carousel />
      <ServiceCards />
      {/* <TestComponent/> */}
      <Lightbox />
    </>
  );
};

export default HomePage;
