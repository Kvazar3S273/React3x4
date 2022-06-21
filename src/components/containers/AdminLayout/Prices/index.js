import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserCircle,
  faMoneyBillTrendUp,
  faAd,
  faInfoCircle,
  faCamera,
  faComputer,
  faPrint,
} from "@fortawesome/free-solid-svg-icons";
import PhotoChangePrice from "./photoChangePrice";
import CompChangePrice from "./compChangePrice";
import PoligraphChangePrice from "./poligraphChangePrice";

const Prices = () => {
  return (
    <>
      <div>
        <div className="container p-3">
          <h1 className="text-center">Керування цінами</h1>
          
          <div className="row justify-content-center">

      {/* Картка 1 */}
      <div className="card-price col m-3 p-2 border bg-warning rounded" >
        <div className="row">
          <div className="col-md-3">
          <i className="d-flex justify-content-center align-middle mt-1"
              style={{ fontSize: "2.5em", color: "#000" }}>
              <FontAwesomeIcon icon={faCamera} />
            </i>
          </div>
          <div className="col-md-9">
          <h5 className="text-center">Фотопослуги</h5>
          </div>
        </div>
      </div>

      {/* Картка 2 */}
      <div className="card-price col m-3 p-2 border bg-warning rounded" >
        <div className="row">
          <div className="col-md-3">
          <i className="d-flex justify-content-center align-middle  mt-1"
              style={{fontSize: "2.5em", color: "#000"}}>
              <FontAwesomeIcon icon={faComputer} />
            </i>
          </div>
          <div className="col-md-9">
          <h5 className=" text-center">Комп'ютерні послуги</h5>
          </div>
        </div>
      </div>

      {/* Картка 3 */}
      <div className="card-price col m-3 p-2 border bg-warning rounded" >
        <div className="row">
          <div className="col-md-3">
          <i className="d-flex justify-content-center align-middle mt-1"
              style={{fontSize: "2.5em", color: "#000"}}>
              <FontAwesomeIcon icon={faPrint} />
            </i>
          </div>
          <div className="col-md-9">
          <h5 className=" text-center">Поліграфія</h5>
          </div>
        </div>
      </div>
      
      <PhotoChangePrice/>
      <CompChangePrice/>
      <PoligraphChangePrice/>
      
    </div>


        </div>
      </div>
    </>
  );
};
export default Prices;
