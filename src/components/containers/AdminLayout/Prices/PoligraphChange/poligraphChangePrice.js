import React, { useState } from "react";
import { HashLink } from "react-router-hash-link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAddressCard,
  faLayerGroup,
  faCalendarDays,
  faTag,
  faNoteSticky,
  faDoorClosed,
  faTape,
  faRectangleAd,
  faFile
} from "@fortawesome/free-solid-svg-icons";
import VisitcardEditPrice from "./visitcardEditPrice";
import FlyerEditPrice from "./flyerEditPrice";
import CalendarEditPrice from "./calendarEditPrice";
import BirkaEditPrice from "./birkaEditPrice";
import StickerEditPrice from "./stickerEditPrice";
import HangerEditPrice from "./hangerEditPrice";
import OracalEditPrice from "./oracalEditPrice";
import BanerEditPrice from "./banerEditPrice";
import PvcEditPrice from "./pvcEditPrice";

const PoligraphChangePrice = () => {
  const [visitcardEdit, setVisitcardEdit] = useState(false);
  const [flyerEdit, setFlyerEdit] = useState(false);
  const [calendarEdit, setCalendarEdit] = useState(false);
  const [birkaEdit, setBirkaEdit] = useState(false);
  const [stickerEdit, setStickerEdit] = useState(false);
  const [hangerEdit, setHangerEdit] = useState(false);
  const [oracalEdit, setOracalEdit] = useState(false);
  const [banerEdit, setBanerEdit] = useState(false);
  const [pvcEdit, setPvcEdit] = useState(false);

  const handleClickVisitcardEdit = (event) => {
    // 👇️ щоб по кліку відкривалось і по наступному закривалось
    // setfndEdit((current) => !current);
    // 👇️ щоб по кліку тільки відкривалось
    setVisitcardEdit(true);
    setFlyerEdit(false);
    setCalendarEdit(false);
    setBirkaEdit(false);
    setStickerEdit(false);
    setHangerEdit(false);
    setOracalEdit(false);
    setBanerEdit(false);
    setPvcEdit(false);
  };
  const handleClickFlyerEdit = (event) => {
    setVisitcardEdit(false);
    setFlyerEdit(true);
    setCalendarEdit(false);
    setBirkaEdit(false);
    setStickerEdit(false);
    setHangerEdit(false);
    setOracalEdit(false);
    setBanerEdit(false);
    setPvcEdit(false);
  };
  const handleClickCalendarEdit = (event) => {
    setVisitcardEdit(false);
    setFlyerEdit(false);
    setCalendarEdit(true);
    setBirkaEdit(false);
    setStickerEdit(false);
    setHangerEdit(false);
    setOracalEdit(false);
    setBanerEdit(false);
    setPvcEdit(false);
  };
  const handleClickBirkaEdit = (event) => {
    setVisitcardEdit(false);
    setFlyerEdit(false);
    setCalendarEdit(false);
    setBirkaEdit(true);
    setStickerEdit(false);
    setHangerEdit(false);
    setOracalEdit(false);
    setBanerEdit(false);
    setPvcEdit(false);
  };
  const handleClickStickerEdit = (event) => {
    setVisitcardEdit(false);
    setFlyerEdit(false);
    setCalendarEdit(false);
    setBirkaEdit(false);
    setStickerEdit(true);
    setHangerEdit(false);
    setOracalEdit(false);
    setBanerEdit(false);
    setPvcEdit(false);
  };
  const handleClickHangerEdit = (event) => {
    setVisitcardEdit(false);
    setFlyerEdit(false);
    setCalendarEdit(false);
    setBirkaEdit(false);
    setStickerEdit(false);
    setHangerEdit(true);
    setOracalEdit(false);
    setBanerEdit(false);
    setPvcEdit(false);
  };
  const handleClickOracalEdit = (event) => {
    setVisitcardEdit(false);
    setFlyerEdit(false);
    setCalendarEdit(false);
    setBirkaEdit(false);
    setStickerEdit(false);
    setHangerEdit(false);
    setOracalEdit(true);
    setBanerEdit(false);
    setPvcEdit(false);
  };
  const handleClickBanerEdit = (event) => {
    setVisitcardEdit(false);
    setFlyerEdit(false);
    setCalendarEdit(false);
    setBirkaEdit(false);
    setStickerEdit(false);
    setHangerEdit(false);
    setOracalEdit(false);
    setBanerEdit(true);
    setPvcEdit(false);
  };
  const handleClickPvcEdit = (event) => {
    setVisitcardEdit(false);
    setFlyerEdit(false);
    setCalendarEdit(false);
    setBirkaEdit(false);
    setStickerEdit(false);
    setHangerEdit(false);
    setOracalEdit(false);
    setBanerEdit(false);
    setPvcEdit(true);
  };

  return (
    <>
      <div>
        <div className="container p-3">
          <h1 className="text-center">Поліграфія</h1>

          <div className="row justify-content-center">
            {/* Картка 1 */}
            <div
              className="card-price col-md-3 col-sm-5 m-3 p-2 border bg-info rounded"
              onClick={handleClickVisitcardEdit}
            >
              <HashLink smooth to={"#more"}>
                <div className="row">
                  <div className="col-md-3">
                    <i
                      className="d-flex justify-content-center align-middle mt-1"
                      style={{ fontSize: "2.5em", color: "#000" }}
                    >
                      <FontAwesomeIcon icon={faAddressCard} />
                    </i>
                  </div>
                  <div className="col-md-9">
                    <h5 className="text-center text-dark">Візитки</h5>
                  </div>
                </div>
              </HashLink>
            </div>

            {/* Картка 2 */}
            <div
              className="card-price col-md-3 col-sm-5 m-3 p-2 border bg-info rounded"
              onClick={handleClickFlyerEdit}
            >
              <HashLink smooth to={"#more"}>
                <div className="row">
                  <div className="col-md-3">
                    <i
                      className="d-flex justify-content-center align-middle mt-1"
                      style={{ fontSize: "2.5em", color: "#000" }}
                    >
                      <FontAwesomeIcon icon={faFile} />
                    </i>
                  </div>
                  <div className="col-md-9">
                    <h5 className="text-center text-dark">Флаєри</h5>
                  </div>
                </div>
              </HashLink>
            </div>

            {/* Картка 3 */}
            <div
              className="card-price col-md-3 col-sm-5 m-3 p-2 border bg-info rounded"
              onClick={handleClickCalendarEdit}
            >
              <HashLink smooth to={"#more"}>
                <div className="row">
                  <div className="col-md-3">
                    <i
                      className="d-flex justify-content-center align-middle mt-1"
                      style={{ fontSize: "2.5em", color: "#000" }}
                    >
                      <FontAwesomeIcon icon={faCalendarDays} />
                    </i>
                  </div>
                  <div className="col-md-9">
                    <h5 className="text-center text-dark">Календарі</h5>
                  </div>
                </div>
              </HashLink>
            </div>

            {/* Картка 4 */}
            <div
              className="card-price col-md-3 col-sm-5 m-3 p-2 border bg-info rounded"
              onClick={handleClickBirkaEdit}
            >
              <HashLink smooth to={"#more"}>
                <div className="row">
                  <div className="col-md-3">
                    <i
                      className="d-flex justify-content-center align-middle mt-1"
                      style={{ fontSize: "2.5em", color: "#000" }}
                    >
                      <FontAwesomeIcon icon={faTag} />
                    </i>
                  </div>
                  <div className="col-md-9">
                    <h5 className="text-center text-dark">Бірки</h5>
                  </div>
                </div>
              </HashLink>
            </div>

            {/* Картка 5 */}
            <div
              className="card-price col-md-3 col-sm-5 m-3 p-2 border bg-info rounded"
              onClick={handleClickStickerEdit}
            >
              <HashLink smooth to={"#more"}>
                <div className="row">
                  <div className="col-md-3">
                    <i
                      className="d-flex justify-content-center align-middle mt-1"
                      style={{ fontSize: "2.5em", color: "#000" }}
                    >
                      <FontAwesomeIcon icon={faNoteSticky} />
                    </i>
                  </div>
                  <div className="col-md-9">
                    <h5 className="text-center text-dark">Наклейки</h5>
                  </div>
                </div>
              </HashLink>
            </div>

            {/* Картка 6 */}
            <div
              className="card-price col-md-3 col-sm-5 m-3 p-2 border bg-info rounded"
              onClick={handleClickHangerEdit}
            >
              <HashLink smooth to={"#more"}>
                <div className="row">
                  <div className="col-md-3">
                    <i
                      className="d-flex justify-content-center align-middle mt-1"
                      style={{ fontSize: "2.5em", color: "#000" }}
                    >
                      <FontAwesomeIcon icon={faDoorClosed} />
                    </i>
                  </div>
                  <div className="col-md-9">
                    <h5 className="text-center text-dark">Хенгери</h5>
                  </div>
                </div>
              </HashLink>
            </div>

            {/* Картка 7 */}
            <div
              className="card-price col-md-3 col-sm-5 m-3 p-2 border bg-info rounded"
              onClick={handleClickOracalEdit}
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
                    <h5 className="text-center text-dark">Самоклейка</h5>
                  </div>
                </div>
              </HashLink>
            </div>

            {/* Картка 8 */}
            <div
              className="card-price col-md-3 col-sm-5 m-3 p-2 border bg-info rounded"
              onClick={handleClickBanerEdit}
            >
              <HashLink smooth to={"#more"}>
                <div className="row">
                  <div className="col-md-3">
                    <i
                      className="d-flex justify-content-center align-middle mt-1"
                      style={{ fontSize: "2.5em", color: "#000" }}
                    >
                      <FontAwesomeIcon icon={faRectangleAd} />
                    </i>
                  </div>
                  <div className="col-md-9">
                    <h5 className="text-center text-dark">Банер</h5>
                  </div>
                </div>
              </HashLink>
            </div>

            {/* Картка 9 */}
            <div
              className="card-price col-md-3 col-sm-5 m-3 p-2 border bg-info rounded"
              onClick={handleClickPvcEdit}
            >
              <HashLink smooth to={"#more"}>
                <div className="row">
                  <div className="col-md-3">
                    <i
                      className="d-flex justify-content-center align-middle mt-1"
                      style={{ fontSize: "2.5em", color: "#000" }}
                    >
                      <FontAwesomeIcon icon={faLayerGroup} />
                    </i>
                  </div>
                  <div className="col-md-9">
                    <h5 className="text-center text-dark">ПВХ</h5>
                  </div>
                </div>
              </HashLink>
            </div>
          </div>

          <section id="more"></section>
          {visitcardEdit && <VisitcardEditPrice />}
          {flyerEdit && <FlyerEditPrice />}
          {calendarEdit && <CalendarEditPrice />}
          {birkaEdit && <BirkaEditPrice />}
          {stickerEdit && <StickerEditPrice />}
          {hangerEdit && <HangerEditPrice />}
          {oracalEdit && <OracalEditPrice />}
          {banerEdit && <BanerEditPrice />}
          {pvcEdit && <PvcEditPrice />}
        </div>
      </div>
    </>
  );
};
export default PoligraphChangePrice;
