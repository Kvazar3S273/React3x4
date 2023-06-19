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
  faVideoCamera
} from "@fortawesome/free-solid-svg-icons";
import XeroxEditPrice from "./xeroxEditPrice";
import BlackPrintEditPrice from "./blackPrintEditPrice";
import ColorPrintEditPrice from "./colorPrintEditPrice";
import ScanEditPrice from "./scanEditPrice";
import LaminateEditPrice from "./laminateEditPrice";
import BinderEditPrice from "./binderEditPrice";
import UsbFlashEditPrice from "./usbFlashEditPrice";
import DiscprintEditPrice from "./discprintEditPrice";
import EmailEditPrice from "./emailEditPrice";
import VhsEditPrice from "./vhsEditPrice";

const CompChangePrice = () => {
  const [xeroxEdit, setXeroxEdit] = useState(false);
  const [blackPrintEdit, setBlackPrintEdit] = useState(false);
  const [colorPrintEdit, setColorPrintEdit] = useState(false);
  const [scanEdit, setScanEdit] = useState(false);
  const [laminateEdit, setLaminateEdit] = useState(false);
  const [binderEdit, setBinderEdit] = useState(false);
  const [usbFlashEdit, setUsbFlashEdit] = useState(false);
  const [usbVhsEdit, setVhsEdit] = useState(false);
  const [discprintEdit, setDiscprintEdit] = useState(false);
  const [emailEdit, setEmailEdit] = useState(false);

  const handleClickXeroxEdit = (event) => {
    // 👇️ щоб по кліку відкривалось і по наступному закривалось
    // setfndEdit((current) => !current);
    // 👇️ щоб по кліку тільки відкривалось
    setXeroxEdit(true);
    setBlackPrintEdit(false);
    setColorPrintEdit(false);
    setScanEdit(false);
    setLaminateEdit(false);
    setBinderEdit(false);
    setUsbFlashEdit(false);
    setVhsEdit(false);
    setDiscprintEdit(false);
    setEmailEdit(false);
  };
  const handleClickBlackPrintEdit = (event) => {
    setXeroxEdit(false);
    setBlackPrintEdit(true);
    setColorPrintEdit(false);
    setScanEdit(false);
    setLaminateEdit(false);
    setBinderEdit(false);
    setUsbFlashEdit(false);
    setVhsEdit(false);
    setDiscprintEdit(false);
    setEmailEdit(false);
  };
  const handleClickColorPrintEdit = (event) => {
    setXeroxEdit(false);
    setBlackPrintEdit(false);
    setColorPrintEdit(true);
    setScanEdit(false);
    setLaminateEdit(false);
    setBinderEdit(false);
    setUsbFlashEdit(false);
    setVhsEdit(false);
    setDiscprintEdit(false);
    setEmailEdit(false);
  };
  const handleClickScanEdit = (event) => {
    setXeroxEdit(false);
    setBlackPrintEdit(false);
    setColorPrintEdit(false);
    setScanEdit(true);
    setLaminateEdit(false);
    setBinderEdit(false);
    setUsbFlashEdit(false);
    setVhsEdit(false);
    setDiscprintEdit(false);
    setEmailEdit(false);
  };
  const handleClickLaminateEdit = (event) => {
    setXeroxEdit(false);
    setBlackPrintEdit(false);
    setColorPrintEdit(false);
    setScanEdit(false);
    setLaminateEdit(true);
    setBinderEdit(false);
    setUsbFlashEdit(false);
    setVhsEdit(false);
    setDiscprintEdit(false);
    setEmailEdit(false);
  };
  const handleClickBinderEdit = (event) => {
    setXeroxEdit(false);
    setBlackPrintEdit(false);
    setColorPrintEdit(false);
    setScanEdit(false);
    setLaminateEdit(false);
    setBinderEdit(true);
    setUsbFlashEdit(false);
    setVhsEdit(false);
    setDiscprintEdit(false);
    setEmailEdit(false);
  };
  const handleClickUsbFlashEdit = (event) => {
    setXeroxEdit(false);
    setBlackPrintEdit(false);
    setColorPrintEdit(false);
    setScanEdit(false);
    setLaminateEdit(false);
    setBinderEdit(false);
    setUsbFlashEdit(true);
    setVhsEdit(false);
    setDiscprintEdit(false);
    setEmailEdit(false);
  };
  const handleClickVhsEdit = (event) => {
    setXeroxEdit(false);
    setBlackPrintEdit(false);
    setColorPrintEdit(false);
    setScanEdit(false);
    setLaminateEdit(false);
    setBinderEdit(false);
    setUsbFlashEdit(false);
    setVhsEdit(true);
    setDiscprintEdit(false);
    setEmailEdit(false);
  };
  const handleClickDiscprintEdit = (event) => {
    setXeroxEdit(false);
    setBlackPrintEdit(false);
    setColorPrintEdit(false);
    setScanEdit(false);
    setLaminateEdit(false);
    setBinderEdit(false);
    setUsbFlashEdit(false);
    setVhsEdit(false);
    setDiscprintEdit(true);
    setEmailEdit(false);
  };
  const handleClickEmailEdit = (event) => {
    setXeroxEdit(false);
    setBlackPrintEdit(false);
    setColorPrintEdit(false);
    setScanEdit(false);
    setLaminateEdit(false);
    setBinderEdit(false);
    setUsbFlashEdit(false);
    setVhsEdit(false);
    setDiscprintEdit(false);
    setEmailEdit(true);
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
                    
                    <div className="d-none d-sm-block text-center text-dark">
                      <h5>Ксерокопії</h5>
                    </div>
                    <div className="d-block d-sm-none text-center text-dark">
                      <h6>Ксерокопії</h6>
                    </div>
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
                    
                    <div className="d-none d-sm-block text-center text-dark">
                      <h5>Чорно-білий друк</h5>
                    </div>
                    <div className="d-block d-sm-none text-center text-dark">
                      <h6>Чорно-білий друк</h6>
                    </div>
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
                    
                    <div className="d-none d-sm-block text-center text-dark">
                      <h5>Кольоровий друк</h5>
                    </div>
                    <div className="d-block d-sm-none text-center text-dark">
                      <h6>Кольоровий друк</h6>
                    </div>
                  </div>
                </div>
              </HashLink>
            </div>

            {/* Картка 4 */}

            <div
              className="card-price col-md-3 col-sm-5 m-3 p-2 border bg-info rounded"
              onClick={handleClickScanEdit}
            >
              <HashLink smooth to={"#more"}>
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
              </HashLink>
            </div>

            {/* Картка 5 */}
            <div
              className="card-price col-md-3 col-sm-5 m-3 p-2 border bg-info rounded"
              onClick={handleClickLaminateEdit}
            >
              <HashLink smooth to={"#more"}>
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
                    
                    <div className="d-none d-sm-block text-center text-dark">
                      <h5>Ламінування</h5>
                    </div>
                    <div className="d-block d-sm-none text-center text-dark">
                      <h6>Ламінування</h6>
                    </div>
                  </div>
                </div>
              </HashLink>
            </div>

            {/* Картка 6 */}
            <div
              className="card-price col-md-3 col-sm-5 m-3 p-2 border bg-info rounded"
              onClick={handleClickBinderEdit}
            >
              <HashLink smooth to={"#more"}>
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
                    
                    <div className="d-none d-sm-block text-center text-dark">
                      <h5>Брошурування</h5>
                    </div>
                    <div className="d-block d-sm-none text-center text-dark">
                      <h6>Брошурування</h6>
                    </div>
                  </div>
                </div>
              </HashLink>
            </div>

            {/* Картка 7 */}
            <div
              className="card-price col-md-3 col-sm-5 m-3 p-2 border bg-info rounded"
              onClick={handleClickUsbFlashEdit}
            >
              <HashLink smooth to={"#more"}>
                <div className="row">
                  <div className="col-md-3">
                    <i
                      className="d-flex justify-content-center align-middle mt-1"
                      style={{ fontSize: "2.5em", color: "#000" }}
                    >
                      <FontAwesomeIcon icon={faFire} />
                    </i>
                  </div>
                  <div className="col-md-9">
                    
                    <div className="d-none d-sm-block text-center text-dark">
                      <h5>Запис CD/DVD</h5>
                    </div>
                    <div className="d-block d-sm-none text-center text-dark">
                      <h6>Запис CD/DVD</h6>
                    </div>
                  </div>
                </div>
              </HashLink>
            </div>

            {/* Картка 8 */}
            <div
              className="card-price col-md-3 col-sm-5 m-3 p-2 border bg-info rounded"
              onClick={handleClickVhsEdit}
            >
              <HashLink smooth to={"#more"}>
                <div className="row">
                  <div className="col-md-3">
                    <i
                      className="d-flex justify-content-center align-middle mt-1"
                      style={{ fontSize: "2.5em", color: "#000" }}
                    >
                      <FontAwesomeIcon icon={faVideoCamera} />
                    </i>
                  </div>
                  <div className="col-md-9">
                    
                    <div className="d-none d-sm-block text-center text-dark">
                      <h5>Оцифровка VHS</h5>
                    </div>
                    <div className="d-block d-sm-none text-center text-dark">
                      <h6>Оцифровка VHS</h6>
                    </div>
                  </div>
                </div>
              </HashLink>
            </div>

            {/* Картка 9 */}
            <div
              className="card-price col-md-3 col-sm-5 m-3 p-2 border bg-info rounded"
              onClick={handleClickDiscprintEdit}
            >
              <HashLink smooth to={"#more"}>
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
                    
                    <div className="d-none d-sm-block text-center text-dark">
                      <h5>Друк на CD/DVD</h5>
                    </div>
                    <div className="d-block d-sm-none text-center text-dark">
                      <h6>Друк на CD/DVD</h6>
                    </div>
                  </div>
                </div>
              </HashLink>
            </div>

            {/* Картка 10 */}
            <div
              className="card-price col-md-3 col-sm-5 m-3 p-2 border bg-info rounded"
              onClick={handleClickEmailEdit}
            >
              <HashLink smooth to={"#more"}>
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
                    
                    <div className="d-none d-sm-block text-center text-dark">
                      <h5>Послуги Email</h5>
                    </div>
                    <div className="d-block d-sm-none text-center text-dark">
                      <h6>Послуги Email</h6>
                    </div>
                  </div>
                </div>
              </HashLink>
            </div>
          </div>

          <section id="more"></section>
          {xeroxEdit && <XeroxEditPrice />}
          {blackPrintEdit && <BlackPrintEditPrice />}
          {colorPrintEdit && <ColorPrintEditPrice />}
          {scanEdit && <ScanEditPrice />}
          {laminateEdit && <LaminateEditPrice />}
          {binderEdit && <BinderEditPrice />}
          {usbFlashEdit && <UsbFlashEditPrice />}
          {usbVhsEdit && <VhsEditPrice />}
          {discprintEdit && <DiscprintEditPrice />}
          {emailEdit && <EmailEditPrice />}
        </div>
      </div>
    </>
  );
};
export default CompChangePrice;
