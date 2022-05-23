import React from "react";
import ServiceCards from "./servicecards";
import Carousel from "./carousel";
import MakeFancybox from "./MakeFancybox";

const HomePage = () => {
  return (
    <>
      <Carousel />
      <ServiceCards />
      <MakeFancybox />
    </>
  );
};

export default HomePage;
