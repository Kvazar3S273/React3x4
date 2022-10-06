import React, { useState } from "react";
import { HashLink } from "react-router-hash-link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPrint,
  faFileExport,
  faTape,
  faBook,
  faCompactDisc,
  faFire,
  faEnvelopeOpenText,
  faCopy,
  faPalette,
} from "@fortawesome/free-solid-svg-icons";
import XeroxEditPrice from "./xeroxEditPrice";
import BlackPrintEditPrice from "./blackPrintEditPrice";
import ColorPrintEditPrice from "./colorPrintEditPrice";

const CompChangePrice = () => {
  const [xeroxEdit, setXeroxEdit] = useState(false);
  const [blackPrintEdit, setBlackPrintEdit] = useState(false);
  const [colorPrintEdit, setColorPrintEdit] = useState(false);

  const handleClickXeroxEdit = (event) => {
    // 👇️ щоб по кліку відкривалось і по наступному закривалось
    // setfndEdit((current) => !current);
    // 👇️ щоб по кліку тільки відкривалось
    setXeroxEdit(true);
    setBlackPrintEdit(false);
    setColorPrintEdit(false);
  };
  const handleClickBlackPrintEdit = (event) => {
    setXeroxEdit(false);
    setBlackPrintEdit(true);
    setColorPrintEdit(false);
  };
  const handleClickColorPrintEdit = (event) => {
    setXeroxEdit(false);
    setBlackPrintEdit(false);
    setColorPrintEdit(true);
  };

  return (
    <>
      <div>
        <div className="container p-3">
          <h1 className="text-center">Комп'ютерні послуги</h1>

          <div className="row justify-content-center">
            {/* Картка 1 */}
            <div
              className="card-price col-md-3 col-sm-5 m-3 p-2 border bg-info rounded"
              onClick={handleClickXeroxEdit}
            >
              <HashLink smooth to={"#more"}>
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
                    <h5 className="text-center text-dark">Ксерокопії</h5>
                  </div>
                </div>
              </HashLink>
            </div>

            {/* Картка 2 */}
            <div
              className="card-price col-md-3 col-sm-5 m-3 p-2 border bg-info rounded"
              onClick={handleClickBlackPrintEdit}
            >
              <HashLink smooth to={"#more"}>
                <div className="row">
                  <div className="col-md-3">
                    <i
                      className="d-flex justify-content-center align-middle mt-1"
                      style={{ fontSize: "2.5em", color: "#000" }}
                    >
                      <FontAwesomeIcon icon={faPrint} />
                    </i>
                  </div>
                  <div className="col-md-9">
                    <h5 className="text-center text-dark">Чорно-білий друк</h5>
                  </div>
                </div>
              </HashLink>
            </div>

            {/* Картка 3 */}
            <div
              className="card-price col-md-3 col-sm-5 m-3 p-2 border bg-info rounded"
              onClick={handleClickColorPrintEdit}
            >
              <HashLink smooth to={"#more"}>
                <div className="row">
                  <div className="col-md-3">
                    <i
                      className="d-flex justify-content-center align-middle mt-1"
                      style={{ fontSize: "2.5em", color: "#000" }}
                    >
                      <FontAwesomeIcon icon={faPalette} />
                    </i>
                  </div>
                  <div className="col-md-9">
                    <h5 className="text-center text-dark">Кольоровий друк</h5>
                  </div>
                </div>
              </HashLink>
            </div>

            {/* Картка 4 */}
            <div className="card-price col-md-3 col-sm-5 m-3 p-2 border bg-info rounded">
              <div className="row">
                <div className="col-md-3">
                  <i
                    className="d-flex justify-content-center align-middle  mt-1"
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

            {/* Картка 5 */}
            <div className="card-price col-md-3 col-sm-5 m-3 p-2 border bg-info rounded">
              <div className="row">
                <div className="col-md-3">
                  <i
                    className="d-flex justify-content-center align-middle mt-1"
                    style={{ fontSize: "2.5em", color: "#000" }}
                  >
                    <FontAwesomeIcon icon={faTape} />
                  </i>
                </div>
                <div className="col-md-9">
                  <h5 className=" text-center">Ламінування</h5>
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
                    <FontAwesomeIcon icon={faBook} />
                  </i>
                </div>
                <div className="col-md-9">
                  <h5 className="text-center">Брошурування</h5>
                </div>
              </div>
            </div>

            {/* Картка 7 */}
            <div className="card-price col-md-3 col-sm-5 m-3 p-2 border bg-info rounded">
              <div className="row">
                <div className="col-md-3">
                  <i
                    className="d-flex justify-content-center align-middle  mt-1"
                    style={{ fontSize: "2.5em", color: "#000" }}
                  >
                    <FontAwesomeIcon icon={faFire} />
                  </i>
                </div>
                <div className="col-md-9">
                  <h5 className=" text-center">Запис CD/DVD</h5>
                </div>
              </div>
            </div>

            {/* Картка 8 */}
            <div className="card-price col-md-3 col-sm-5 m-3 p-2 border bg-info rounded">
              <div className="row">
                <div className="col-md-3">
                  <i
                    className="d-flex justify-content-center align-middle mt-1"
                    style={{ fontSize: "2.5em", color: "#000" }}
                  >
                    <FontAwesomeIcon icon={faCompactDisc} />
                  </i>
                </div>
                <div className="col-md-9">
                  <h5 className=" text-center">Друк на CD/DVD</h5>
                </div>
              </div>
            </div>

            {/* Картка 9 */}
            <div className="card-price col-md-3 col-sm-5 m-3 p-2 border bg-info rounded">
              <div className="row">
                <div className="col-md-3">
                  <i
                    className="d-flex justify-content-center align-middle mt-1"
                    style={{ fontSize: "2.5em", color: "#000" }}
                  >
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
          {blackPrintEdit && <BlackPrintEditPrice />}
          {colorPrintEdit && <ColorPrintEditPrice />}
        </div>
      </div>
    </>
  );
};
export default CompChangePrice;
