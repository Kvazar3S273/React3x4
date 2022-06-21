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
  faUser,
  faImage,
  faFileExport,
  faCopy,
  faWineBottle,
  faPhotoFilm,
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
              <FontAwesomeIcon icon={faUser} />
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
              <FontAwesomeIcon icon={faPhotoFilm} />
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
              <FontAwesomeIcon icon={faFileExport} />
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
              <FontAwesomeIcon icon={faCopy} />
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
              <FontAwesomeIcon icon={faImage} />
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
              <FontAwesomeIcon icon={faWineBottle} />
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
              <FontAwesomeIcon icon={faImage} />
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
              <FontAwesomeIcon icon={faWineBottle} />
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
