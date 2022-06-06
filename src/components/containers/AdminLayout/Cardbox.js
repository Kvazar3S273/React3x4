import React from "react";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faCartPlus,
  faComment,
  faCircleDollarToSlot
} from "@fortawesome/free-solid-svg-icons";

const Cardbox = () => {
  return (
    <div className="cardBox">
      <div className="card">
        <div className="row">
          <div className="col-9">
            <div className="numbers">1,042</div>
            <div className="cardName">Daily Views</div>
          </div>
          <div className="col-3 iconBox">
            <i>
              <FontAwesomeIcon icon={faEye} />
            </i>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="row">
          <div className="col-9">
            <div className="numbers">80</div>
            <div className="cardName">Sales</div>
          </div>
          <div className="col-3 iconBox">
            <i>
              <FontAwesomeIcon icon={faCartPlus} />
            </i>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="row">
          <div className="col-9">
            <div className="numbers">208</div>
            <div className="cardName">Comments</div>
          </div>
          <div className="col-3 iconBox">
            <i>
              <FontAwesomeIcon icon={faComment} />
            </i>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="row">
          <div className="col-9">
            <div className="numbers">$6,042</div>
            <div className="cardName">Earning</div>
          </div>
          <div className="col-3 iconBox">
            <i>
              <FontAwesomeIcon icon={faCircleDollarToSlot} />
            </i>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Cardbox;
