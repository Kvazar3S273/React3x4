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
import ScanEditPrice from "./scanEditPrice";
import LaminateEditPrice from "./laminateEditPrice";
import BinderEditPrice from "./binderEditPrice";
import UsbFlashEditPrice from "./usbFlashEditPrice";
import DiscprintEditPrice from "./discprintEditPrice";
import EmailEditPrice from "./emailEditPrice";

const CompChangePrice = () => {
  const [xeroxEdit, setXeroxEdit] = useState(false);
  const [blackPrintEdit, setBlackPrintEdit] = useState(false);
  const [colorPrintEdit, setColorPrintEdit] = useState(false);
  const [scanEdit, setScanEdit] = useState(false);
  const [laminateEdit, setLaminateEdit] = useState(false);
  const [binderEdit, setBinderEdit] = useState(false);
  const [usbFlashEdit, setUsbFlashEdit] = useState(false);
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
                    <h5 className="text-center text-dark">Сканування</h5>
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
                    <h5 className="text-center text-dark">Ламінування</h5>
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
                    <h5 className="text-center text-dark">Брошурування</h5>
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
                    <h5 className="text-center text-dark">Запис CD/DVD</h5>
                  </div>
                </div>
              </HashLink>
            </div>
            
            {/* Картка 8 */}
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
                    <h5 className="text-center text-dark">Друк на CD/DVD</h5>
                  </div>
                </div>
              </HashLink>
            </div>
            
            {/* Картка 9 */}
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
                    <h5 className="text-center text-dark">Послуги Email</h5>
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
          {discprintEdit && <DiscprintEditPrice />}
          {emailEdit && <EmailEditPrice />}
          
        </div>
      </div>
    </>
  );
};
export default CompChangePrice;
