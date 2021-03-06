import React from "react";
import { Outlet } from "react-router-dom";
import { ScrollToTop } from "react-simple-scroll-up";
import Footer from "../../footer/footer";
import Header from "../../navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCamera
} from "@fortawesome/free-solid-svg-icons";

const DefaultLayout = () => {
  return (
    <>
      
      <Header />
      <main>{<Outlet />}</main>
      <ScrollToTop 
        size={70} 
        offsetTop={50} 
        strokeWidth={5} 
        symbol="&#5169;" 
        style={{marginTop:"85vh"}}/>
      <Footer />
    </>
  );
};

export default DefaultLayout;
