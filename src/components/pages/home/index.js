import React from "react";
import ServiceCards from "./servicecards";
import Carousel from "./carousel";
import MakeFancybox from "./MakeFancybox";
import Products from "./products";
import Footer from "../../footer/footer";
import Producers from "./producers";

const HomePage = () => {
  return (
    <>
      <Carousel />
      <ServiceCards />
      <MakeFancybox />
      <Products />
      <Producers />
      {/* <h1>HomePage</h1> */}
    </>
  );
};

export default HomePage;
