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
    isPhotoPhotopicture,
  } = useSelector((state) => state.foto);

  return (
    <>
      <CarouselPhoto />
      <ServicePhotoCards />

      {isPhotoFnd ? (
        <>
          <section id="fnd">
            <Fnd />
          </section>
        </>
      ) : (
        ""
      )}
      
      {isPhotoFotoprint ? (
        <>
          <section id="printfoto">
            <Fotoprint />
          </section>
        </>
      ) : (
        ""
      )}
      
      {isPhotoPhotobooks ? (
        <>
          <section id="photobooks">
            <Photobooks />
          </section>
        </>
      ) : (
        ""
      )}
      
      {isPhotoScan ? (
        <>
          <section id="scan">
            <ScanPage />
          </section>
        </>
      ) : (
        ""
      )}
      
      {isPhotoDuplicate ? (
        <>
          <section id="duplicate">
            <Duplicate />
          </section>
        </>
      ) : (
        ""
      )}
      
      {isPhotoRestoration ? (
        <>
          <section id="restoration">
            <Restoration />
          </section>
        </>
      ) : (
        ""
      )}
      
      {isPhotoBackground ? (
        <>
          <section id="background">
            <Background />
          </section>
        </>
      ) : (
        ""
      )}
      
      {isPhotoAddition ? (
        <>
          <section id="addition">
            <Addition />
          </section>
        </>
      ) : (
        ""
      )}
      
      {isPhotoBottle ? (
        <>
          <section id="bottle">
            <Bottle />
          </section>
        </>
      ) : (
        ""
      )}
      
      {isPhotoPhotopicture ? (
        <>
          <section id="photopicture">
            <Photopicture />
          </section>
        </>
      ) : (
        ""
      )}

    </>
  );
};
export default PhotoPage;
