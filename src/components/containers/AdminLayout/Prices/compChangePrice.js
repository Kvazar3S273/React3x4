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

const CompChangePrice = () => {
  return (
    <>
      <div>
        <div className="container p-3">
          <h1 className="text-center">Комп'ютерні послуги</h1>
          
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
          <h5 className="text-center">Копії/друк</h5>
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
              <FontAwesomeIcon icon={faFileExport} />
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
              <FontAwesomeIcon icon={faCopy} />
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
              <FontAwesomeIcon icon={faImage} />
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
              <FontAwesomeIcon icon={faWineBottle} />
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
              <FontAwesomeIcon icon={faWineBottle} />
            </i>
          </div>
          <div className="col-md-9">
          <h5 className=" text-center">Послуги Email</h5>
          </div>
        </div>
      </div>
      
    </div>


        </div>
      </div>
    </>
  );
};
export default CompChangePrice;
