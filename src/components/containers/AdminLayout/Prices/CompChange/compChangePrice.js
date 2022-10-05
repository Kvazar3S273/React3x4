import React, { useState } from "react";
import { HashLink } from 'react-router-hash-link';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPrint,
  faFileExport,
  faTape,
  faBook,
  faCompactDisc,
  faFire,
  faEnvelopeOpenText
} from "@fortawesome/free-solid-svg-icons";
import XeroxEditPrice from "./xeroxEditPrice";

const CompChangePrice = () => {
  const [xeroxEdit, setXeroxEdit] = useState(false);
  // const [fotoprintEdit, setfotoprintEdit] = useState(false);
  // const [photoscanEdit, setPhotoscanEdit] = useState(false);
  // const [duplicateEdit, setDuplicateEdit] = useState(false);
  // const [photopictureEdit, setPhotopictureEdit] = useState(false);
  // const [bottleEdit, setBottleEdit] = useState(false);
  const handleClickXeroxEdit = (event) => {
    // 👇️ щоб по кліку відкривалось і по наступному закривалось
    // setfndEdit((current) => !current);
    // 👇️ щоб по кліку тільки відкривалось
    setXeroxEdit(true);
    // setfotoprintEdit(false);
    // setPhotoscanEdit(false);
    // setDuplicateEdit(false);
    // setPhotopictureEdit(false);
    // setBottleEdit(false);
  };
  // const handleClickFotoprintEdit = (event) => {
  //   setfndEdit(false);
  //   setfotoprintEdit(true);
  //   setPhotoscanEdit(false);
  //   setDuplicateEdit(false);
  //   setPhotopictureEdit(false);
  //   setBottleEdit(false);
  // };
  // const handleClickPhotoscanEdit = (event) => {
  //   setfndEdit(false);
  //   setfotoprintEdit(false);
  //   setPhotoscanEdit(true);
  //   setDuplicateEdit(false);
  //   setPhotopictureEdit(false);
  //   setBottleEdit(false);
  // };
  // const handleClickDuplicateEdit = (event) => {
  //   setfndEdit(false);
  //   setfotoprintEdit(false);
  //   setPhotoscanEdit(false);
  //   setDuplicateEdit(true);
  //   setPhotopictureEdit(false);
  //   setBottleEdit(false);
  // };
  // const handleClickPhotopictureEdit  = (event) => {
  //   setfndEdit(false);
  //   setfotoprintEdit(false);
  //   setPhotoscanEdit(false);
  //   setDuplicateEdit(false);
  //   setPhotopictureEdit(true);
  //   setBottleEdit(false);
  // };
  // const handleClickBottleEdit  = (event) => {
  //   setfndEdit(false);
  //   setfotoprintEdit(false);
  //   setPhotoscanEdit(false);
  //   setDuplicateEdit(false);
  //   setPhotopictureEdit(false);
  //   setBottleEdit(true);
  // };
  return (
    <>
      <div>
        <div className="container p-3">
          <h1 className="text-center">Комп'ютерні послуги</h1>
          
          <div className="row justify-content-center">

      {/* Картка 1 */}
      <div className="card-price col-md-3 col-sm-5 m-3 p-2 border bg-info rounded" 
      onClick={handleClickXeroxEdit}>
        <HashLink smooth to={"#more"}>
        <div className="row">
          <div className="col-md-3">
          <i className="d-flex justify-content-center align-middle mt-1"
              style={{ fontSize: "2.5em", color: "#000" }}>
              <FontAwesomeIcon icon={faPrint} />
            </i>
          </div>
          <div className="col-md-9">
          <h5 className="text-center text-dark">Копії/друк</h5>
          </div>
        </div>
        </HashLink>
      </div>

      {/* Картка 2 */}
      <div className="card-price col-md-3 col-sm-5 m-3 p-2 border bg-info rounded" >
        <div className="row">
          <div className="col-md-3">
          <i className="d-flex justify-content-center align-middle  mt-1"
              style={{fontSize: "2.5em", color: "#000"}}>
              <FontAwesomeIcon icon={faFileExport} />
            </i>
          </div>
          <div className="col-md-9">
          <h5 className=" text-center">Сканування</h5>
          </div>
        </div>
      </div>

      {/* Картка 3 */}
      <div className="card-price col-md-3 col-sm-5 m-3 p-2 border bg-info rounded" >
        <div className="row">
          <div className="col-md-3">
          <i className="d-flex justify-content-center align-middle mt-1"
              style={{fontSize: "2.5em", color: "#000"}}>
              <FontAwesomeIcon icon={faTape} />
            </i>
          </div>
          <div className="col-md-9">
          <h5 className=" text-center">Ламінування</h5>
          </div>
        </div>
      </div>
      
      {/* Картка 4 */}
      <div className="card-price col-md-3 col-sm-5 m-3 p-2 border bg-info rounded" >
        <div className="row">
          <div className="col-md-3">
          <i className="d-flex justify-content-center align-middle mt-1"
              style={{ fontSize: "2.5em", color: "#000" }}>
              <FontAwesomeIcon icon={faBook} />
            </i>
          </div>
          <div className="col-md-9">
          <h5 className="text-center">Брошурування</h5>
          </div>
        </div>
      </div>

      {/* Картка 5 */}
      <div className="card-price col-md-3 col-sm-5 m-3 p-2 border bg-info rounded" >
        <div className="row">
          <div className="col-md-3">
          <i className="d-flex justify-content-center align-middle  mt-1"
              style={{fontSize: "2.5em", color: "#000"}}>
              <FontAwesomeIcon icon={faFire} />
            </i>
          </div>
          <div className="col-md-9">
          <h5 className=" text-center">Запис CD/DVD</h5>
          </div>
        </div>
      </div>

      {/* Картка 6 */}
      <div className="card-price col-md-3 col-sm-5 m-3 p-2 border bg-info rounded" >
        <div className="row">
          <div className="col-md-3">
          <i className="d-flex justify-content-center align-middle mt-1"
              style={{fontSize: "2.5em", color: "#000"}}>
              <FontAwesomeIcon icon={faCompactDisc} />
            </i>
          </div>
          <div className="col-md-9">
          <h5 className=" text-center">Друк на CD/DVD</h5>
          </div>
        </div>
      </div>

      {/* Картка 7 */}
      <div className="card-price col-md-3 col-sm-5 m-3 p-2 border bg-info rounded" >
        <div className="row">
          <div className="col-md-3">
          <i className="d-flex justify-content-center align-middle mt-1"
              style={{fontSize: "2.5em", color: "#000"}}>
              <FontAwesomeIcon icon={faEnvelopeOpenText} />
            </i>
          </div>
          <div className="col-md-9">
          <h5 className=" text-center">Послуги Email</h5>
          </div>
        </div>
      </div>
      
    </div>

    <section id="more"></section>
          {xeroxEdit && <XeroxEditPrice />}

        </div>
      </div>
    </>
  );
};
export default CompChangePrice;
