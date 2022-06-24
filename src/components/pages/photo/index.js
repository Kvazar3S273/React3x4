import React from "react";
import Addition from "./addition";
import Background from "./background";
import CarouselPhoto from "./carouselPhoto";
import Restoration from "./restoration";
import "./style.css";
import ServicePhotoCards from "./servicePhotoCards";
import { useSelector } from "react-redux";
import ScanPage from "./scan";
import Duplicate from "./duplicate";
import Photopicture from "./photopicture";
import Bottle from "./bottle";
import Fnd from "./fnd";
import Photoprint from "./photoprint";
import Photobooks from "./photobooks";

const PhotoPage = () => {

  const {
    isPhotoFnd, 
    isPhotoPhotoprint,
    isPhotoPhotobooks,
    isPhotoScan,
    isPhotoDuplicate,
    isPhotoRestoration,
    isPhotoBackground,
    isPhotoAddition,
    isPhotoBottle,
    isPhotoPhotopicture
  } = useSelector((state) => state.show);

  return (
    <>
    <CarouselPhoto />
    <ServicePhotoCards />

      {isPhotoFnd ? <Fnd /> : ""}
      {isPhotoPhotoprint ? <Photoprint /> : ""}
      {isPhotoPhotobooks ? <Photobooks /> : ""}
      {isPhotoScan ? <ScanPage /> : ""}
      {isPhotoDuplicate ? <Duplicate /> : ""}
      {isPhotoRestoration ? <Restoration /> : ""}
      {isPhotoBackground ? <Background /> : ""}
      {isPhotoAddition ? <Addition /> : ""}
      {isPhotoBottle ? <Bottle /> : ""}
      {isPhotoPhotopicture ? <Photopicture /> : ""}
      
      
    </>
  );
};
export default PhotoPage;
