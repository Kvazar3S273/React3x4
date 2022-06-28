import React from "react";
import Apt from "./Apt";
import "react-slideshow-image/dist/styles.css";
import { Slide, Zoom } from "react-slideshow-image";
// import "../style.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faPrint,
    faImage,
    faFileWord,
    faEye,
    faMoneyBill1

} from "@fortawesome/free-solid-svg-icons";


const PageWithWorkedFancybox = () => {
    return (
      <>
      <h1>Xerox</h1>
        {/* <Carousel /> */}
        {/* <ServiceCards /> */}
        {/* <Gallery /> */}
        {/* <TestComponent/> */}
        {/* <Lightbox /> */}
        <Apt />
      </>
    );
  };
  
  export default PageWithWorkedFancybox;