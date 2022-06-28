import React from "react";
import CarouselComp from "./carouselComp";
// import "./style.css";
import { useSelector } from "react-redux";
import ServiceCompCards from "./serviceCompCards";
import Xerox from "./xerox";

const CompPage = () => {
  const {
    isCompXerox,
    isCompScan,
    isCompLaminate,
    isCompBinder,
    isCompUsbflash,
    isCompDiscprint,
    isCompEmail,
  } = useSelector((state) => state.show);

  return (
    <>
    <CarouselComp />
    <ServiceCompCards />

      {isCompXerox ? <Xerox /> : ""}
      {/* {isPhotoFotoprint ? <Fotoprint /> : ""} */}
      
    </>
  );

  
};

export default CompPage
