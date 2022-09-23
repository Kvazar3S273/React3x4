import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCamera,
  faComputer,
  faPrint
} from "@fortawesome/free-solid-svg-icons";
import PhotoChangePrice from "../Prices/PhotoChange/photoChangePrice";
import CompChangePrice from "./CompChange/compChangePrice";
import PoligraphChangePrice from "./PoligraphChange/poligraphChangePrice";
import "./style.css";
import ModalPercent from "./ModalPercent";

const Prices = () => {

  const [showPhotoChangePrice, setPhotoChangePrice] = useState(false);
  const [showCompChangePrice, setCompChangePrice] = useState(false);
  const [showPoligraphChangePrice, setPoligraphChangePrice] = useState(false);

  const handleClickPhoto = (event) => {
    // 👇️ щоб по кліку відкривалось і по наступному закривалось
    // setPhotoChangePrice((current) => !current);
    // 👇️ щоб по кліку тільки відкривалось
    setPhotoChangePrice(true);
    setCompChangePrice(false);
    setPoligraphChangePrice(false);
  };
  const handleClickComp = (event) => {
    // setCompChangePrice((current) => !current);
    setPhotoChangePrice(false);
    setCompChangePrice(true);
    setPoligraphChangePrice(false);
  };
  const handleClickPoligraph = (event) => {
    // setCompChangePrice((current) => !current);
    setPhotoChangePrice(false);
    setCompChangePrice(false);
    setPoligraphChangePrice(true);
  };


  return (
    <>
      <div>
        <div className="container p-3">
          <h1 className="text-center">Керування цінами</h1>
            <div className="row justify-content-center">

              {/* Картка 1 */}
              <div 
                className="card-price col m-3 p-2 border bg-warning rounded" 
                onClick={handleClickPhoto}>
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
              <div 
                className="card-price col m-3 p-2 border bg-warning rounded" 
                onClick={handleClickComp}>
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
              <div 
                className="card-price col m-3 p-2 border bg-warning rounded" 
                onClick={handleClickPoligraph}>
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
      
              {showPhotoChangePrice && <PhotoChangePrice />}
              {showCompChangePrice && <CompChangePrice />}
              {showPoligraphChangePrice && <PoligraphChangePrice />}
      
           

            </div>
        </div>
      </div>
    </>
  );
};
export default Prices;
