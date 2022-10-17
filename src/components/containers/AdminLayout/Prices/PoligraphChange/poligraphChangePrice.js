import React, { useState } from "react";
import { HashLink } from 'react-router-hash-link';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAddressCard,
  faLayerGroup,
  faCalendarDays,
  faTag,
  faNoteSticky,
  faDoorClosed,
  faTape,
  faRectangleAd
} from "@fortawesome/free-solid-svg-icons";
import VisitcardEditPrice from "./visitcardEditPrice";
import FlyerEditPrice from "./flyerEditPrice";
import CalendarEditPrice from "./calendarEditPrice";

const PoligraphChangePrice = () => {

  const [visitcardEdit, setVisitcardEdit] = useState(false);
  const [flyerEdit, setFlyerEdit] = useState(false);
  const [calendarEdit, setCalendarEdit] = useState(false);

  const handleClickVisitcardEdit = (event) => {
    // 👇️ щоб по кліку відкривалось і по наступному закривалось
    // setfndEdit((current) => !current);
    // 👇️ щоб по кліку тільки відкривалось
    setVisitcardEdit(true);
    setFlyerEdit(false);
    setCalendarEdit(false);
  };
  const handleClickFlyerEdit = (event) => {
    setVisitcardEdit(false);
    setFlyerEdit(true);
    setCalendarEdit(false);
  };
  const handleClickCalendarEdit = (event) => {
    setVisitcardEdit(false);
    setFlyerEdit(false);
	  setCalendarEdit(true);
  };
  
  return (
    <>
      <div>
        <div className="container p-3">
          <h1 className="text-center">Поліграфія</h1>

          <div className="row justify-content-center">

      {/* Картка 1 */}
      <div className="card-price col-md-3 col-sm-5 m-3 p-2 border bg-info rounded" 
      onClick={handleClickVisitcardEdit}>
        <HashLink smooth to={"#more"}>
        <div className="row">
          <div className="col-md-3">
          <i className="d-flex justify-content-center align-middle mt-1"
              style={{ fontSize: "2.5em", color: "#000" }}>
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
      <div className="card-price col-md-3 col-sm-5 m-3 p-2 border bg-info rounded" 
      onClick={handleClickFlyerEdit}>
        <HashLink smooth to={"#more"}>
        <div className="row">
          <div className="col-md-3">
          <i className="d-flex justify-content-center align-middle mt-1"
              style={{ fontSize: "2.5em", color: "#000" }}>
              <FontAwesomeIcon icon={faLayerGroup} />
            </i>
          </div>
          <div className="col-md-9">
          <h5 className="text-center text-dark">Флаєри</h5>
          </div>
        </div>
        </HashLink>
      </div>
      
      {/* Картка 3 */}
      <div className="card-price col-md-3 col-sm-5 m-3 p-2 border bg-info rounded" 
      onClick={handleClickCalendarEdit}>
        <HashLink smooth to={"#more"}>
        <div className="row">
          <div className="col-md-3">
          <i className="d-flex justify-content-center align-middle mt-1"
              style={{ fontSize: "2.5em", color: "#000" }}>
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
      <div className="card-price col-md-3 col-sm-5 m-3 p-2 border bg-info rounded" >
        <div className="row">
          <div className="col-md-3">
          <i className="d-flex justify-content-center align-middle mt-1"
              style={{ fontSize: "2.5em", color: "#000" }}>
              <FontAwesomeIcon icon={faTag} />
            </i>
          </div>
          <div className="col-md-9">
          <h5 className="text-center">Бірки</h5>
          </div>
        </div>
      </div>

      {/* Картка 5 */}
      <div className="card-price col-md-3 col-sm-5 m-3 p-2 border bg-info rounded" >
        <div className="row">
          <div className="col-md-3">
          <i className="d-flex justify-content-center align-middle  mt-1"
              style={{fontSize: "2.5em", color: "#000"}}>
              <FontAwesomeIcon icon={faNoteSticky} />
            </i>
          </div>
          <div className="col-md-9">
          <h5 className=" text-center">Наклейки</h5>
          </div>
        </div>
      </div>

      {/* Картка 6 */}
      <div className="card-price col-md-3 col-sm-5 m-3 p-2 border bg-info rounded" >
        <div className="row">
          <div className="col-md-3">
          <i className="d-flex justify-content-center align-middle mt-1"
              style={{fontSize: "2.5em", color: "#000"}}>
              <FontAwesomeIcon icon={faDoorClosed} />
            </i>
          </div>
          <div className="col-md-9">
          <h5 className=" text-center">Хенгери</h5>
          </div>
        </div>
      </div>

      {/* Картка 7 */}
      <div className="card-price col-md-3 col-sm-5 m-3 p-2 border bg-info rounded" >
        <div className="row">
          <div className="col-md-3">
          <i className="d-flex justify-content-center align-middle  mt-1"
              style={{fontSize: "2.5em", color: "#000"}}>
              <FontAwesomeIcon icon={faTape} />
            </i>
          </div>
          <div className="col-md-9">
          <h5 className=" text-center">Самоклейка</h5>
          </div>
        </div>
      </div>

      {/* Картка 8 */}
      <div className="card-price col-md-3 col-sm-5 m-3 p-2 border bg-info rounded" >
        <div className="row">
          <div className="col-md-3">
          <i className="d-flex justify-content-center align-middle mt-1"
              style={{fontSize: "2.5em", color: "#000"}}>
              <FontAwesomeIcon icon={faRectangleAd} />
            </i>
          </div>
          <div className="col-md-9">
          <h5 className=" text-center">Банер</h5>
          </div>
        </div>
      </div>
      
    </div>

    <section id="more"></section>
          {visitcardEdit && <VisitcardEditPrice />}
          {flyerEdit && <FlyerEditPrice />}
          {calendarEdit && <CalendarEditPrice />}

        </div>
      </div>
    </>
  );
};
export default PoligraphChangePrice;
