import React from "react";
// import "./style.css";
import { useSelector } from "react-redux";
import CarouselPoligraph from "./carouselPoligraph";
import ServicePoligraphCards from "./servicePoligraphCards";
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

      {/* {isCompXerox ? <Xerox /> : ""}
      {isCompScan ? <Scaner /> : ""}
      {isCompLaminate ? <Laminate /> : ""}
      {isCompBinder ? <Binder /> : ""}
      {isCompUsbflash ? <Usbflash /> : ""}
      {isCompDiscprint ? <Discprint /> : ""}
      {isCompEmail ? <Email /> : ""} */}
      
      {isPoligraphVisitcard ? <Visitcard /> : ""}
      
    </>
    
  );
};

export default PoligraphPage;