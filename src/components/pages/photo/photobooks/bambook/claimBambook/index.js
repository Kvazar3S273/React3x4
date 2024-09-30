import React, { useState } from "react";
import classNames from "classnames";
import "../../tabstyle.css"
import { ShowClaim30x30 } from "../../ShowClaim/showClaim30x30";
import { ShowClaim20x30 } from "../../ShowClaim/showClaim20x30";
// import { ShowClaim24x32 } from "../../ShowClaim/showClaim24x32";
import { ShowClaim19x19 } from "../../ShowClaim/showClaim19x19";
import { ShowClaim23x23 } from "../../ShowClaim/showClaim23x23";
import { ShowClaim29x19 } from "../../ShowClaim/showClaim29x19";

const ClaimBambook = () => {
  const [show30x30, setShow30x30] = useState(false);
  // const [show24x32, setShow24x32] = useState(false);
  const [show20x30, setShow20x30] = useState(false);
  const [show29x19, setShow29x19] = useState(false);
  const [show19x19, setShow19x19] = useState(false);
  const [show23x23, setShow23x23] = useState(false);

  const handleClick30x30 = (event) => {
    setShow30x30(true);
    // setShow24x32(false);
    setShow20x30(false);
    setShow29x19(false);
    setShow19x19(false);
    setShow23x23(false);
  };
  // const handleClick24x32 = (event) => {
  //   setShow30x30(false);
  //   setShow24x32(true);
  //   setShow20x30(false);
  //   setShow29x19(false);
  //   setShow19x19(false);
  //   setShow23x23(false);
  // };
  const handleClick20x30 = (event) => {
    setShow30x30(false);
    // setShow24x32(false);
    setShow20x30(true);
    setShow29x19(false);
    setShow19x19(false);
    setShow23x23(false);
  };
  const handleClick29x19 = (event) => {
    setShow30x30(false);
    // setShow24x32(false);
    setShow20x30(false);
    setShow29x19(true);
    setShow19x19(false);
    setShow23x23(false);
  };
  const handleClick19x19 = (event) => {
    setShow30x30(false);
    // setShow24x32(false);
    setShow20x30(false);
    setShow29x19(false);
    setShow19x19(true);
    setShow23x23(false);
  };
  const handleClick23x23 = (event) => {
    setShow30x30(false);
    // setShow24x32(false);
    setShow20x30(false);
    setShow29x19(false);
    setShow19x19(false);
    setShow23x23(true);
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
                  className={classNames("books-tablinks-claim", show30x30 ? "active" : "") }
                  onClick={handleClick30x30}> {" "} 30x30
                </button>
                {/* <button
                  className={classNames("books-tablinks-claim", show24x32 ? "active" : "")}
                  onClick={handleClick24x32}> {" "} 24x32
                </button> */}
                <button
                  className={classNames("books-tablinks-claim", show20x30 ? "active" : "")}
                  onClick={handleClick20x30}> {" "} 20x30
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
                  className={classNames("books-tablinks-claim", show23x23 ? "active" : "")}
                  onClick={handleClick23x23}> {" "} 23x23
                </button>
              </div>
            </div>
            <div className="col-9 col-sm-10 col-md-11 col-lg-11" style={{overflowX:"auto"}}>
              <div className="books-tabcontent-claim-6 mb-4 overflow-auto">
                {!show30x30 &&
                  // !show24x32 &&
                  !show20x30 &&
                  !show29x19 &&
                  !show19x19 &&
                  !show23x23 &&
                  (
                    <>
                      {ShowClaim30x30()}
                    </>
                  )}
                {show30x30 && (<>{ShowClaim30x30()}</>)}
                {/* {show24x32 && (<>{ShowClaim24x32()}</>)} */}
                {show20x30 && (<>{ShowClaim20x30()}</>)}
                {show29x19 && (<>{ShowClaim29x19()}</>)}
                {show19x19 && (<>{ShowClaim19x19()}</>)}
                {show23x23 && (<>{ShowClaim23x23()}</>)}
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
};
export default ClaimBambook;
