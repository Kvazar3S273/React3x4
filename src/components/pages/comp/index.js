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
import Vhs from "./vhs";

const CompPage = () => {
  const {
    isCompXerox,
    isCompScan,
    isCompLaminate,
    isCompBinder,
    isCompUsbflash,
    isCompVhs,
    isCompDiscprint,
    isCompEmail,
  } = useSelector((state) => state.comp);

  return (
    <>
    <CarouselComp />
    <ServiceCompCards />

      {isCompXerox ? <Xerox /> : ""}
      {isCompScan ? <Scaner /> : ""}
      {isCompLaminate ? <Laminate /> : ""}
      {isCompBinder ? <Binder /> : ""}
      {isCompUsbflash ? <Usbflash /> : ""}
      {isCompVhs ? <Vhs /> : ""}
      {isCompDiscprint ? <Discprint /> : ""}
      {isCompEmail ? <Email /> : ""}
      
    </>
  );

  
};

export default CompPage
