import React from "react";
// import "./style.css";
import { useSelector } from "react-redux";
import Calendar from "./calendar";
import CarouselPoligraph from "./carouselPoligraph";
import Claim from "./claim";
import Flyer from "./flyer";
import Hanger from "./hanger";
import ServicePoligraphCards from "./servicePoligraphCards";
import Sticker from "./sticker";
import Tag from "./tag";
import Visitcard from "./visitcard";

const PoligraphPage = () => {
  const {
    isPoligraphVisitcard,
    isPoligraphFlyer,
    isPoligraphCalendar,
    isPoligraphTag,
    isPoligraphSticker,
    isPoligraphHanger,
    isPoligraphOracal,
    isPoligraphBaner,
    isPoligraphPvc,
    isPoligraphOther
  } = useSelector((state) => state.poligraph);

  return (

    <>
    <CarouselPoligraph />
    <ServicePoligraphCards />

      {isPoligraphVisitcard ? <Visitcard /> : ""}
      {isPoligraphFlyer? <Flyer /> : ""}
      {isPoligraphCalendar? <Calendar /> : ""}
      {isPoligraphTag? <Tag /> : ""}
      {isPoligraphSticker? <Sticker /> : ""}
      {isPoligraphHanger? <Hanger /> : ""}
      
    <Claim />
    </>
    
  );
};

export default PoligraphPage;