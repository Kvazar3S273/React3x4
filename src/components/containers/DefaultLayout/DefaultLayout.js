import React from "react";
import { Outlet } from "react-router-dom";
import { ScrollToTop } from "react-simple-scroll-up";
import Footer from "../../footer/footer";
import Header from "../../navbar";

const DefaultLayout = () => {
  return (
    <>
      <ScrollToTop size={70} offsetTop={50} strokeWidth={5} symbol="🡩" style={{marginTop:"90px"}}/>
      <Header />
      <main>{<Outlet />}</main>
      <Footer />
    </>
  );
};

export default DefaultLayout;
