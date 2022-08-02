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
import Photobooks from "./photobooks";
import Fotoprint from "./fotoprint";

const PhotoPage = () => {

  const {
    isPhotoFnd, 
    isPhotoFotoprint,
    isPhotoPhotobooks,
    isPhotoScan,
    isPhotoDuplicate,
    isPhotoRestoration,
    isPhotoBackground,
    isPhotoAddition,
    isPhotoBottle,
    isPhotoPhotopicture
  } = useSelector((state) => state.foto);

  return (
    <>
    <CarouselPhoto />
    <ServicePhotoCards />

      {isPhotoFnd ? <Fnd /> : ""}
      {isPhotoFotoprint ? <Fotoprint /> : ""}
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
