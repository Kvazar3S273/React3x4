import React, { useState } from "react";
import classNames from "classnames";
import "../../tabstyle.css";
import { ShowClaim20x30Planshet } from "../../ShowClaim/showClaim20x30";
import { ShowClaim18x24Planshet } from "../../ShowClaim/showClaim18x24";
import { ShowClaim23x23Planshet } from "../../ShowClaim/showClaim23x23";
import { ShowClaim29x19Planshet } from "../../ShowClaim/showClaim29x19";
import { ShowClaim19x19Planshet } from "../../ShowClaim/showClaim19x19";
import { ShowClaimTrumo } from "../../ShowClaim/showClaimTrumo";
import { ShowClaimTrio } from "../../ShowClaim/showClaimTrio";

const ClaimPlanshet = () => {
  const [showTrumo, setShowTrumo] = useState(false);
  const [showTrio, setShowTrio] = useState(false);
  const [show20x30, setShow20x30] = useState(false);
  const [show18x24, setShow18x24] = useState(false);
  const [show29x19, setShow29x19] = useState(false);
  const [show23x23, setShow23x23] = useState(false);
  const [show19x19, setShow19x19] = useState(false);

  const handleClickTrumo = (event) => {
    setShowTrumo(true);
    setShowTrio(false);
    setShow20x30(false);
    setShow18x24(false);
    setShow29x19(false);
    setShow23x23(false);
    setShow19x19(false);
  };
  const handleClickTrio = (event) => {
    setShowTrumo(false);
    setShowTrio(true);
    setShow20x30(false);
    setShow18x24(false);
    setShow29x19(false);
    setShow23x23(false);
    setShow19x19(false);
  };
  const handleClick20x30 = (event) => {
    setShowTrumo(false);
    setShowTrio(false);
    setShow20x30(true);
    setShow18x24(false);
    setShow29x19(false);
    setShow23x23(false);
    setShow19x19(false);
  };
  const handleClick18x24 = (event) => {
    setShowTrumo(false);
    setShowTrio(false);
    setShow20x30(false);
    setShow18x24(true);
    setShow29x19(false);
    setShow23x23(false);
    setShow19x19(false);
  };
  const handleClick29x19 = (event) => {
    setShowTrumo(false);
    setShowTrio(false);
    setShow20x30(false);
    setShow18x24(false);
    setShow29x19(true);
    setShow23x23(false);
    setShow19x19(false);
  };
  const handleClick23x23 = (event) => {
    setShowTrumo(false);
    setShowTrio(false);
    setShow20x30(false);
    setShow18x24(false);
    setShow29x19(false);
    setShow23x23(true);
    setShow19x19(false);
  };
  const handleClick19x19 = (event) => {
    setShowTrumo(false);
    setShowTrio(false);
    setShow20x30(false);
    setShow18x24(false);
    setShow29x19(false);
    setShow23x23(false);
    setShow19x19(true);
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
                  className={classNames("books-tablinks-claim", showTrumo ? "active" : "")}
                  onClick={handleClickTrumo}> {" "} Трюмо
                </button>
                <button
                  className={classNames("books-tablinks-claim", showTrio ? "active" : "")}
                  onClick={handleClickTrio}> {" "} Тріо
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
                  className={classNames("books-tablinks-claim", show29x19 ? "active" : "")}
                  onClick={handleClick29x19}> {" "} 29x19
                </button>
                <button
                  className={classNames("books-tablinks-claim", show23x23 ? "active" : "")}
                  onClick={handleClick23x23}> {" "} 23x23
                </button>
                <button
                  className={classNames("books-tablinks-claim", show19x19 ? "active" : "")}
                  onClick={handleClick19x19}> {" "} 19x19
                </button>
              </div>
            </div>
            <div className="col-9 col-sm-10 col-md-11 col-lg-11" style={{overflowX:"auto"}}>
              <div className="books-tabcontent-claim-7 mb-4 overflow-auto">
                {!showTrumo &&
                  !showTrio &&
                  !show20x30 &&
                  !show18x24 &&
                  !show23x23 &&
                  !show29x19 &&
                  !show19x19 && (
                  <>
                    {ShowClaimTrumo()}
                  </>
                  )}
                {showTrumo && <>{ShowClaimTrumo()}</>}
                {showTrio && <>{ShowClaimTrio()}</>}
                {show18x24 && <>{ShowClaim18x24Planshet()}</>}
                {show20x30 && <>{ShowClaim20x30Planshet()}</>}
                {show23x23 && <>{ShowClaim23x23Planshet()}</>}
                {show29x19 && <>{ShowClaim29x19Planshet()}</>}
                {show19x19 && <>{ShowClaim19x19Planshet()}</>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ClaimPlanshet;