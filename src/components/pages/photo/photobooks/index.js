import React from "react";
import ServicePhotoBookCards from "./servicePhotoBookCards";
import { useSelector } from "react-redux";
import BamBook from "./bambook";
import SlimBook from "./slimbook";
import { HashLink } from "react-router-hash-link";

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

      <div className="row">
        <div className="col-md-2"></div>
        <div className="col-md-8">
          <HashLink smooth to={"#bookslist"}>
            <button
              type="submit"
              className="btn btn-success btn-lg mt-2 mb-4 p-3"
              id="show_calc"
              style={{ width: "100%", background: "#006167" }}
            >
              ▲     До списку всіх фотокниг     ▲
            </button>
          </HashLink>
        </div>
        <div className="col-md-2"></div>
      </div>
    </div>
  );
};
export default Photobooks;
