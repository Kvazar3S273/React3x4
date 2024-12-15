import React from "react";
import ServiceCards from "./servicecards";
import Carousel from "./carousel";
import MakeFancybox from "./MakeFancybox";
import Products from "./products";
import Producers from "./producers";
import { ScrollToTop } from "react-simple-scroll-up";
import Attention from "./attention";

const HomePage = () => {
  return (
    <>
      <Carousel />
      <Attention />
      <ServiceCards />
      <MakeFancybox />
      <section id="products">
        <Products />
      </section>
      <Producers />
      
    </>
  );
};

export default HomePage;
