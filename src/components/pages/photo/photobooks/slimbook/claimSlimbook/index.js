import React, { useState } from "react";
import classNames from "classnames";
import "../../tabstyle.css"
import { ShowClaim30x30 } from "../../ShowClaim/showClaim30x30";
import { ShowClaim20x30 } from "../../ShowClaim/showClaim20x30";
import { ShowClaim18x24 } from "../../ShowClaim/showClaim18x24";
import { ShowClaim23x23 } from "../../ShowClaim/showClaim23x23";
import { ShowClaim29x19 } from "../../ShowClaim/showClaim29x19";
import { ShowClaim19x19 } from "../../ShowClaim/showClaim19x19";
import { ShowClaim15x15 } from "../../ShowClaim/showClaim15x15";

const ClaimSlimbook = () => {
  const [show30x30, setShow30x30] = useState(false);
  const [show20x30, setShow20x30] = useState(false);
  const [show18x24, setShow18x24] = useState(false);
  const [show23x23, setShow23x23] = useState(false);
  const [show29x19, setShow29x19] = useState(false);
  const [show19x19, setShow19x19] = useState(false);
  const [show15x15, setShow15x15] = useState(false);

  const handleClick30x30 = (event) => {
    setShow30x30(true);
    setShow20x30(false);
    setShow18x24(false);
    setShow23x23(false);
    setShow29x19(false);
    setShow19x19(false);
    setShow15x15(false);
  };
  const handleClick20x30 = (event) => {
    setShow30x30(false);
    setShow20x30(true);
    setShow18x24(false);
    setShow23x23(false);
    setShow29x19(false);
    setShow19x19(false);
    setShow15x15(false);
  };
  const handleClick18x24 = (event) => {
    setShow30x30(false);
    setShow20x30(false);
    setShow18x24(true);
    setShow23x23(false);
    setShow29x19(false);
    setShow19x19(false);
    setShow15x15(false);
  };
  const handleClick23x23 = (event) => {
    setShow30x30(false);
    setShow20x30(false);
    setShow18x24(false);
    setShow23x23(true);
    setShow29x19(false);
    setShow19x19(false);
    setShow15x15(false);
  };
  const handleClick29x19 = (event) => {
    setShow30x30(false);
    setShow20x30(false);
    setShow18x24(false);
    setShow23x23(false);
    setShow29x19(true);
    setShow19x19(false);
    setShow15x15(false);
  };
  const handleClick19x19 = (event) => {
    setShow30x30(false);
    setShow20x30(false);
    setShow18x24(false);
    setShow23x23(false);
    setShow29x19(false);
    setShow19x19(true);
    setShow15x15(false);
  };
  const handleClick15x15 = (event) => {
    setShow30x30(false);
    setShow20x30(false);
    setShow18x24(false);
    setShow23x23(false);
    setShow29x19(false);
    setShow19x19(false);
    setShow15x15(true);
  };
 
  
  return (
    <>
      <div className="row">
        <div className="col px-3 mb-4">
          <h1 className="text-center text-dark mt-4 mb-4">Вимоги до макету</h1>

          <div className="row">
            <div className="col-3 col-sm-2 col-md-1 col-lg-1">
              <div className="books-tab-claim">
                <button
                  className={classNames("books-tablinks-claim", show30x30 ? "active" : "")}
                  onClick={handleClick30x30}> {" "} 30x30
                </button>
                <button
                  className={classNames("books-tablinks-claim", show20x30 ? "active" : "")}
                  onClick={handleClick20x30}> {" "} 20x30
                </button>
                <button
                  className={classNames("books-tablinks-claim", show18x24 ? "active" : "")}
                  onClick={handleClick18x24}> {" "} 18x24
                </button>
                <button
                  className={classNames("books-tablinks-claim", show23x23 ? "active" : "")}
                  onClick={handleClick23x23}> {" "} 23x23
                </button>
                <button
                  className={classNames("books-tablinks-claim", show29x19 ? "active" : "")}
                  onClick={handleClick29x19}> {" "} 29x19
                </button>
                <button
                  className={classNames("books-tablinks-claim", show19x19 ? "active" : "")}
                  onClick={handleClick19x19}> {" "} 19x19
                </button>
                <button
                  className={classNames("books-tablinks-claim", show15x15 ? "active" : "")}
                  onClick={handleClick15x15}> {" "} 15x15
                </button>
              </div>
            </div>
            <div className="col-9 col-sm-10 col-md-11 col-lg-11">
              <div className="books-tabcontent-claim-7 mb-4 overflow-auto">
                {!show30x30 &&
                  !show20x30 &&
                  !show18x24 &&
                  !show23x23 &&
                  !show29x19 &&
                  !show19x19 &&
                  !show15x15 &&
                  (
                    <>
                      {ShowClaim30x30()}
                    </>
                  )}
                {show30x30 && (<>{ShowClaim30x30()}</>)}
                {show18x24 && (<>{ShowClaim18x24()}</>)}
                {show20x30 && (<>{ShowClaim20x30()}</>)}
                {show23x23 && (<>{ShowClaim23x23()}</>)}
                {show29x19 && (<>{ShowClaim29x19()}</>)}
                {show19x19 && (<>{ShowClaim19x19()}</>)}
                {show15x15 && (<>{ShowClaim15x15()}</>)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ClaimSlimbook;
