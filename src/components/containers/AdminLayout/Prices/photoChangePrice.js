import React, { useState } from "react";
import { HashLink } from 'react-router-hash-link';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faImage,
  faFileExport,
  faCopy,
  faWineBottle,
  faPhotoFilm,
  faImagePortrait,
} from "@fortawesome/free-solid-svg-icons";
import FndEditPrice from "./fndEditPrice";
import FotoprintEditPrice from "./fotoprintEditPrice";

const PhotoChangePrice = () => {
  const [fndEdit, setfndEdit] = useState(false);
  const [fotoprintEdit, setfotoprintEdit] = useState(false);
  const handleClickFndEdit = (event) => {
    // 👇️ щоб по кліку відкривалось і по наступному закривалось
    // setfndEdit((current) => !current);
    // 👇️ щоб по кліку тільки відкривалось
    setfndEdit(true);
    setfotoprintEdit(false);
  };
  const handleClickFotoprintEdit = (event) => {
    setfndEdit(false);
    setfotoprintEdit(true);
  };
  return (
    <>
      <div>
        <div className="container p-3">
          <h1 className="text-center">Фотопослуги</h1>

          <div className="row justify-content-center">
            {/* Картка 1 */}
            <div className="card-price col-md-3 col-sm-5 m-3 p-2 border bg-info rounded"
            onClick={handleClickFndEdit}>
            <HashLink smooth to={"#more"}>
              <div className="row">
                <div className="col-md-3">
                  <i
                    className="d-flex justify-content-center align-middle mt-1"
                    style={{ fontSize: "2.5em", color: "#000" }}
                    >
                    <FontAwesomeIcon icon={faImagePortrait} />
                  </i>
                </div>
                <div className="col-md-9">
                  <h5 className="text-center text-dark">ФНД</h5>
                </div>
              </div>
            </HashLink>
            </div>

            {/* Картка 2 */}
            <div className="card-price col-md-3 col-sm-5 m-3 p-2 border bg-info rounded"
            onClick={handleClickFotoprintEdit}>
              <HashLink smooth to={"#more"}>
              <div className="row">
                <div className="col-md-3">
                  <i
                    className="d-flex justify-content-center align-middle  mt-1"
                    style={{ fontSize: "2.5em", color: "#000" }}
                  >
                    <FontAwesomeIcon icon={faPhotoFilm} />
                  </i>
                </div>
                <div className="col-md-9">
                  <h5 className="text-center text-dark">Фотодрук</h5>
                </div>
              </div>
            </HashLink>
            </div>

            {/* Картка 3 */}
            <div className="card-price col-md-3 col-sm-5 m-3 p-2 border bg-info rounded">
              <div className="row">
                <div className="col-md-3">
                  <i
                    className="d-flex justify-content-center align-middle mt-1"
                    style={{ fontSize: "2.5em", color: "#000" }}
                  >
                    <FontAwesomeIcon icon={faFileExport} />
                  </i>
                </div>
                <div className="col-md-9">
                  <h5 className=" text-center">Сканування</h5>
                </div>
              </div>
            </div>

            {/* Картка 4 */}
            <div className="card-price col-md-3 col-sm-5 m-3 p-2 border bg-info rounded">
              <div className="row">
                <div className="col-md-3">
                  <i
                    className="d-flex justify-content-center align-middle mt-1"
                    style={{ fontSize: "2.5em", color: "#000" }}
                  >
                    <FontAwesomeIcon icon={faCopy} />
                  </i>
                </div>
                <div className="col-md-9">
                  <h5 className="text-center">Дублікати</h5>
                </div>
              </div>
            </div>

            {/* Картка 5 */}
            <div className="card-price col-md-3 col-sm-5 m-3 p-2 border bg-info rounded">
              <div className="row">
                <div className="col-md-3">
                  <i
                    className="d-flex justify-content-center align-middle  mt-1"
                    style={{ fontSize: "2.5em", color: "#000" }}
                  >
                    <FontAwesomeIcon icon={faImage} />
                  </i>
                </div>
                <div className="col-md-9">
                  <h5 className=" text-center">Фотокартини</h5>
                </div>
              </div>
            </div>

            {/* Картка 6 */}
            <div className="card-price col-md-3 col-sm-5 m-3 p-2 border bg-info rounded">
              <div className="row">
                <div className="col-md-3">
                  <i
                    className="d-flex justify-content-center align-middle mt-1"
                    style={{ fontSize: "2.5em", color: "#000" }}
                  >
                    <FontAwesomeIcon icon={faWineBottle} />
                  </i>
                </div>
                <div className="col-md-9">
                  <h5 className=" text-center">Етикетки</h5>
                </div>
              </div>
            </div>

          </div>
          <section id="more"></section>
          {fndEdit && <FndEditPrice />}
          {fotoprintEdit && <FotoprintEditPrice />}

        </div>
      </div>
    </>
  );
};
export default PhotoChangePrice;
