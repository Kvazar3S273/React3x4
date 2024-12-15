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
import Attention from "../home/attention";

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
      <Attention />
      <ServiceCompCards />

      {isCompXerox ? (
        <>
          <section id="xerox">
            <Xerox />
          </section>
        </>
      ) : (
        ""
      )}

      {isCompScan ? (
        <>
          <section id="scaner">
            <Scaner />
          </section>
        </>
      ) : (
        ""
      )}

      {isCompLaminate ? (
        <>
          <section id="laminate">
            <Laminate />
          </section>
        </>
      ) : (
        ""
      )}

      {isCompBinder ? (
        <>
          <section id="binder">
            <Binder />
          </section>
        </>
      ) : (
        ""
      )}

      {isCompUsbflash ? (
        <>
          <section id="usbflash">
            <Usbflash />
          </section>
        </>
      ) : (
        ""
      )}

      {isCompVhs ? (
        <>
          <section id="vhs">
            <Vhs />
          </section>
        </>
      ) : (
        ""
      )}

      {isCompDiscprint ? (
        <>
          <section id="discprint">
            <Discprint />
          </section>
        </>
      ) : (
        ""
      )}

      {isCompEmail ? (
        <>
          <section id="email">
            <Email />
          </section>
        </>
      ) : (
        ""
      )}

    </>
  );
};

export default CompPage;
