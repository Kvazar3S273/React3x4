import React from "react";
import Addition from "./addition";
import Background from "./background";
import CarouselPhoto from "./carouselPhoto";
import Restoration from "./restoration";
import "./style.css";
import ServicePhotoCards from "./servicePhotoCards";
import {  useSelector } from "react-redux";
import ScanPage from "./scan";

const PhotoPage = () => {

  // const dispatch = useDispatch();
  
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

      {isPhotoAddition ? <Addition /> : ""}
      {isPhotoBackground ? <Background /> : ""}
      {isPhotoRestoration ? <Restoration /> : ""}
      {isPhotoScan ? <ScanPage /> : ""}
      
      
    </>
  );
};
export default PhotoPage;
