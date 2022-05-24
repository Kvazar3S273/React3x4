import React from "react";
import ServiceCards from "./servicecards";
import Carousel from "./carousel";
import MakeFancybox from "./MakeFancybox";
import Products from "./products";
import Footer from "./footer";

const HomePage = () => {
  return (
    <>
      <Carousel />
      <ServiceCards />
      <MakeFancybox />
      <Products />
      <Footer />
    </>
  );
};

export default HomePage;
