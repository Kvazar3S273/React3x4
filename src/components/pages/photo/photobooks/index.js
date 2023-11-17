import React from "react";
import ServicePhotoBookCards from "./servicePhotoBookCards";
import { useSelector } from "react-redux";
import BamBook from "./bambook";
import SlimBook from "./slimbook";
import PrintBook from "./printbook";
import PhotoBook from "./photobook";
import UniBook from "./unibook";
import Planshet from "./planshet";


const Photobooks = () => {
  const {
    isPhotoPhotobooksUniBook,
    isPhotoPhotobooksSlimBook,
    isPhotoPhotobooksBamBook,
    isPhotoPhotobooksPhotoBook,
    isPhotoPhotobooksPrintBook,
    isPhotoPhotobooksPlanshet,
  } = useSelector((state) => state.foto);

  return (
    <div className="row">
      <div className="offset-md-4 col-md-4">
        <section id="bookslist"></section>
        <h1 className="text-center mt-3">Фотокниги</h1>
      </div>

      <ServicePhotoBookCards />

      {isPhotoPhotobooksUniBook ? (
        <>
          <section id="photobooks-unibook">
            <UniBook />
          </section>
        </>
      ) : (
        ""
      )}
      
      {isPhotoPhotobooksBamBook ? (
        <>
          <section id="photobooks-bambook">
            <BamBook />
          </section>
        </>
      ) : (
        ""
      )}
      
      {isPhotoPhotobooksSlimBook ? (
        <>
          <section id="photobooks-slibook">
            <SlimBook />
          </section>
        </>
      ) : (
        ""
      )}
      
      {isPhotoPhotobooksPrintBook ? (
        <>
          <section id="photobooks-printbook">
            <PrintBook />
          </section>
        </>
      ) : (
        ""
      )}
      
      {isPhotoPhotobooksPhotoBook ? (
        <>
          <section id="photobooks-photobook">
            <PhotoBook />
          </section>
        </>
      ) : (
        ""
      )}
      
      {isPhotoPhotobooksPlanshet ? (
        <>
          <section id="photobooks-planshet">
            <Planshet />
          </section>
        </>
      ) : (
        ""
      )}
      
    </div>
  );
};
export default Photobooks;
