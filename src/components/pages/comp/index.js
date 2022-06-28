import React from "react";
import CarouselComp from "./carouselComp";
// import "./style.css";
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import ServiceCompCards from "./serviceCompCards";

const CompPage = () => {
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
  } = useSelector((state) => state.show);

  return (
    <>
    <CarouselComp />
    <ServiceCompCards />

      {/* {isPhotoFnd ? <Fnd /> : ""} */}
      {/* {isPhotoFotoprint ? <Fotoprint /> : ""} */}
      
    </>
  );

  
};

export default CompPage
