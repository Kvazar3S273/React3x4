import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalculator
} from "@fortawesome/free-solid-svg-icons";

const CalculatingPole = () => {

  return (
    <>
      <div className="row">
        <div
          className="col py-3 mt-3 mb-3"
          style={{ backgroundColor: "#CDE8F2" }}
        >
          <div className="row">
            <div className="col-12 col-sm-8 col-md-8 col-lg-8 p-5">
              
              <div className="row">
                
                <div className="col-3 col-sm-2 col-md-2">
                  <i
                    className="d-flex justify-content-center text-danger"
                    style={{ fontSize: "4.5em" }}
                  >
                    <FontAwesomeIcon icon={faCalculator} />
                  </i>
                </div>
                
                <div className="col-9 col-sm-10 col-md-10">
                  <h4 className="text-danger">
                    Розрахунок вартості друку фотокниги
                  </h4>
                  <p>
                    *Окремо розраховується вартість розробки дизайну (див.
                    Додаткові послуги)
                  </p>
                </div>

              </div>

            </div>

            <div className="col-12 col-sm-4 col-md-4 col-lg-4 text-center">
              <img
                src="images/services/photo/photobooks/calc.png"
                alt="Розрахунок"
              />
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default CalculatingPole;
