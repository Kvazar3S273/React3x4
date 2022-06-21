import React from "react";
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

const PoligraphChangePrice = () => {
  return (
    <>
      <div>
        <div className="container p-3">
          <h1 className="text-center">Поліграфія</h1>
          <div className="row justify-content-center">

      {/* Картка 1 */}
      <div className="card-price col-md-3 col-sm-5 m-3 p-2 border bg-info rounded" >
        <div className="row">
          <div className="col-md-3">
          <i className="d-flex justify-content-center align-middle mt-1"
              style={{ fontSize: "2.5em", color: "#000" }}>
              <FontAwesomeIcon icon={faAddressCard} />
            </i>
          </div>
          <div className="col-md-9">
          <h5 className="text-center">Візитки</h5>
          </div>
        </div>
      </div>

      {/* Картка 2 */}
      <div className="card-price col-md-3 col-sm-5 m-3 p-2 border bg-info rounded" >
        <div className="row">
          <div className="col-md-3">
          <i className="d-flex justify-content-center align-middle  mt-1"
              style={{fontSize: "2.5em", color: "#000"}}>
              <FontAwesomeIcon icon={faLayerGroup} />
            </i>
          </div>
          <div className="col-md-9">
          <h5 className=" text-center">Флаєри</h5>
          </div>
        </div>
      </div>

      {/* Картка 3 */}
      <div className="card-price col-md-3 col-sm-5 m-3 p-2 border bg-info rounded" >
        <div className="row">
          <div className="col-md-3">
          <i className="d-flex justify-content-center align-middle mt-1"
              style={{fontSize: "2.5em", color: "#000"}}>
              <FontAwesomeIcon icon={faCalendarDays} />
            </i>
          </div>
          <div className="col-md-9">
          <h5 className=" text-center">Календарі</h5>
          </div>
        </div>
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


        </div>
      </div>
    </>
  );
};
export default PoligraphChangePrice;
