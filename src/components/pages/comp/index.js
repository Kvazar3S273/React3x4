import React from "react";
import CarouselComp from "./carouselComp";
// import "./style.css";
import { useSelector } from "react-redux";
import ServiceCompCards from "./serviceCompCards";
import Xerox from "./xerox";
import Scaner from "./scaner";
import Laminate from "./laminate";
import Binder from "./binder";
import Usbflash from "./usbflash";
import Discprint from "./discprint";
import Email from "./email";

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
      {isCompScan ? <Scaner /> : ""}
      {isCompLaminate ? <Laminate /> : ""}
      {isCompBinder ? <Binder /> : ""}
      {isCompUsbflash ? <Usbflash /> : ""}
      {isCompDiscprint ? <Discprint /> : ""}
      {isCompEmail ? <Email /> : ""}
      
    </>
  );

  
};

export default CompPage
