import React from "react";
import ServicePhotoBookCards from "./servicePhotoBookCards";
import { useSelector } from "react-redux";
import BamBook from "./bambook";
import SlimBook from "./slimbook";
import PrintBook from "./printbook";


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

      {isPhotoPhotobooksBamBook ? <BamBook /> : ""}
      {isPhotoPhotobooksSlimBook ? <SlimBook /> : ""}
      {isPhotoPhotobooksPrintBook? <PrintBook /> : ""}

      
    </div>
  );
};
export default Photobooks;
