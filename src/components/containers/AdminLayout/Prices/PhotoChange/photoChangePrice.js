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
import FndEditPrice from "../PhotoChange/fndEditPrice";
import FotoprintEditPrice from "../PhotoChange/fotoprintEditPrice";
import PhotoscanEditPrice from "../PhotoChange/photoscanEditPrice";
import DuplicateEditPrice from "../PhotoChange/duplicateEditPrice";
import PhotopictureEditPrice from "../PhotoChange/photopictureEditPrice";
import BottleEditPrice from "../PhotoChange/bottleEditPrice";

const PhotoChangePrice = () => {
  const [fndEdit, setfndEdit] = useState(false);
  const [fotoprintEdit, setfotoprintEdit] = useState(false);
  const [photoscanEdit, setPhotoscanEdit] = useState(false);
  const [duplicateEdit, setDuplicateEdit] = useState(false);
  const [photopictureEdit, setPhotopictureEdit] = useState(false);
  const [bottleEdit, setBottleEdit] = useState(false);
  const handleClickFndEdit = (event) => {
    // 👇️ щоб по кліку відкривалось і по наступному закривалось
    // setfndEdit((current) => !current);
    // 👇️ щоб по кліку тільки відкривалось
    setfndEdit(true);
    setfotoprintEdit(false);
    setPhotoscanEdit(false);
    setDuplicateEdit(false);
    setPhotopictureEdit(false);
    setBottleEdit(false);
  };
  const handleClickFotoprintEdit = (event) => {
    setfndEdit(false);
    setfotoprintEdit(true);
    setPhotoscanEdit(false);
    setDuplicateEdit(false);
    setPhotopictureEdit(false);
    setBottleEdit(false);
  };
  const handleClickPhotoscanEdit = (event) => {
    setfndEdit(false);
    setfotoprintEdit(false);
    setPhotoscanEdit(true);
    setDuplicateEdit(false);
    setPhotopictureEdit(false);
    setBottleEdit(false);
  };
  const handleClickDuplicateEdit = (event) => {
    setfndEdit(false);
    setfotoprintEdit(false);
    setPhotoscanEdit(false);
    setDuplicateEdit(true);
    setPhotopictureEdit(false);
    setBottleEdit(false);
  };
  const handleClickPhotopictureEdit  = (event) => {
    setfndEdit(false);
    setfotoprintEdit(false);
    setPhotoscanEdit(false);
    setDuplicateEdit(false);
    setPhotopictureEdit(true);
    setBottleEdit(false);
  };
  const handleClickBottleEdit  = (event) => {
    setfndEdit(false);
    setfotoprintEdit(false);
    setPhotoscanEdit(false);
    setDuplicateEdit(false);
    setPhotopictureEdit(false);
    setBottleEdit(true);
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
                    <div className="d-none d-sm-block text-center text-dark">
                      <h5>ФНД</h5>
                    </div>
                    <div className="d-block d-sm-none text-center text-dark">
                      <h6>ФНД</h6>
                    </div>
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
                    <div className="d-none d-sm-block text-center text-dark">
                      <h5>Фотодрук</h5>
                    </div>
                    <div className="d-block d-sm-none text-center text-dark">
                      <h6>Фотодрук</h6>
                    </div>
                </div>
              </div>
            </HashLink>
            </div>

            {/* Картка 3 */}
            <div className="card-price col-md-3 col-sm-5 m-3 p-2 border bg-info rounded"
            onClick={handleClickPhotoscanEdit}>
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
                    <div className="d-none d-sm-block text-center text-dark">
                      <h5>Сканування</h5>
                    </div>
                    <div className="d-block d-sm-none text-center text-dark">
                      <h6>Сканування</h6>
                    </div>
                </div>
              </div>
            </div>

            {/* Картка 4 */}
            <div className="card-price col-md-3 col-sm-5 m-3 p-2 border bg-info rounded"
             onClick={handleClickDuplicateEdit}>
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
                    <div className="d-none d-sm-block text-center text-dark">
                      <h5>Дублікати</h5>
                    </div>
                    <div className="d-block d-sm-none text-center text-dark">
                      <h6>Дублікати</h6>
                    </div>
                </div>
              </div>
            </div>

            {/* Картка 5 */}
            <div className="card-price col-md-3 col-sm-5 m-3 p-2 border bg-info rounded"
             onClick={handleClickPhotopictureEdit}>
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
                    <div className="d-none d-sm-block text-center text-dark">
                      <h5>Фотокартини</h5>
                    </div>
                    <div className="d-block d-sm-none text-center text-dark">
                      <h6>Фотокартини</h6>
                    </div>
                </div>
              </div>
            </div>

            {/* Картка 6 */}
            <div className="card-price col-md-3 col-sm-5 m-3 p-2 border bg-info rounded"
              onClick={handleClickBottleEdit}>
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
                    <div className="d-none d-sm-block text-center text-dark">
                      <h5>Етикетки</h5>
                    </div>
                    <div className="d-block d-sm-none text-center text-dark">
                      <h6>Етикетки</h6>
                    </div>
                </div>
              </div>
            </div>

          </div>
          <section id="more"></section>
          {fndEdit && <FndEditPrice />}
          {fotoprintEdit && <FotoprintEditPrice />}
          {photoscanEdit && <PhotoscanEditPrice />}
          {duplicateEdit && <DuplicateEditPrice />}
          {photopictureEdit && <PhotopictureEditPrice />}
          {bottleEdit && <BottleEditPrice />}

        </div>
      </div>
    </>
  );
};
export default PhotoChangePrice;
