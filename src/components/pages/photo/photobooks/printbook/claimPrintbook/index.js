import React, { useState } from "react";
import classNames from "classnames";
import "../../tabstyle.css"
import { ShowClaim23x23Print } from "../../ShowClaim/showClaim23x23";
import { ShowClaim24x32Print } from "../../ShowClaim/showClaim24x32";

const ClaimPrintbook = () => {
  const [show23x23, setShow23x23] = useState(false);
  const [show24x32, setShow24x32] = useState(false);
  const [show30x30, setShow30x30] = useState(false);
  const [show20x30, setShow20x30] = useState(false);
  const [show30x20, setShow30x20] = useState(false);
  const [show20x20, setShow20x20] = useState(false);
  const [show15x20, setShow15x20] = useState(false);
  const [show20x15, setShow20x15] = useState(false);

  const handleClick23x23 = (event) => {
    setShow23x23(true);
    setShow24x32(false);
    setShow30x30(false);
    setShow20x30(false);
    setShow30x20(false);
    setShow20x20(false);
    setShow15x20(false);
    setShow20x15(false);
  };
  const handleClick24x32 = (event) => {
    setShow23x23(false);
    setShow24x32(true);
    setShow30x30(false);
    setShow20x30(false);
    setShow30x20(false);
    setShow20x20(false);
    setShow15x20(false);
    setShow20x15(false);
  };
  const handleClick30x30 = (event) => {
    setShow23x23(false);
    setShow24x32(false);
    setShow30x30(true);
    setShow20x30(false);
    setShow30x20(false);
    setShow20x20(false);
    setShow15x20(false);
    setShow20x15(false);
  };
  const handleClick20x30 = (event) => {
    setShow23x23(false);
    setShow24x32(false);
    setShow30x30(false);
    setShow20x30(true);
    setShow30x20(false);
    setShow20x20(false);
    setShow15x20(false);
    setShow20x15(false);
  };
  const handleClick30x20 = (event) => {
    setShow23x23(false);
    setShow24x32(false);
    setShow30x30(false);
    setShow20x30(false);
    setShow30x20(true);
    setShow20x20(false);
    setShow15x20(false);
    setShow20x15(false);
  };
  const handleClick20x20 = (event) => {
    setShow23x23(false);
    setShow24x32(false);
    setShow30x30(false);
    setShow20x30(false);
    setShow30x20(false);
    setShow20x20(true);
    setShow15x20(false);
    setShow20x15(false);
  };
  const handleClick15x20 = (event) => {
    setShow23x23(false);
    setShow24x32(false);
    setShow30x30(false);
    setShow20x30(false);
    setShow30x20(false);
    setShow20x20(false);
    setShow15x20(true);
    setShow20x15(false);
  };
  const handleClick20x15 = (event) => {
    setShow23x23(false);
    setShow24x32(false);
    setShow30x30(false);
    setShow20x30(false);
    setShow30x20(false);
    setShow20x20(false);
    setShow15x20(false);
    setShow20x15(true);
  };
  
 
  
  return (
    <>
      <div className="row">
        <div className="col px-3 mb-4">
          <h1 className="text-center text-dark mt-4 mb-4">Вимоги до макету</h1>

          <div className="books-tab-claim">
            <button
              className={classNames("books-tablinks-claim", show23x23 ? "active" : "")}
              onClick={handleClick23x23}> {" "} 23x23
            </button>
            <button
              className={classNames("books-tablinks-claim", show24x32 ? "active" : "")}
              onClick={handleClick24x32}> {" "} 24x32
            </button>
            <button
              className={classNames("books-tablinks-claim", show30x30 ? "active" : "")}
              onClick={handleClick30x30}> {" "} 30x30
            </button>
            <button
              className={classNames("books-tablinks-claim", show20x30 ? "active" : "")}
              onClick={handleClick20x30}> {" "} 20x30
            </button>
            <button
              className={classNames("books-tablinks-claim", show30x20 ? "active" : "")}
              onClick={handleClick30x20}> {" "} 30x20
            </button>
            <button
              className={classNames("books-tablinks-claim", show20x20 ? "active" : "")}
              onClick={handleClick20x20}> {" "} 20x20
            </button>
            <button
              className={classNames("books-tablinks-claim", show15x20 ? "active" : "")}
              onClick={handleClick15x20}> {" "} 15x20
            </button>
            <button
              className={classNames("books-tablinks-claim", show20x15 ? "active" : "")}
              onClick={handleClick20x15}> {" "} 20x15
            </button>
            
          </div>

          <div className="books-tabcontent-claim-print mb-4 overflow-auto">
            {
              !show23x23 &&
              !show24x32 &&
              !show30x30 &&
              !show20x30 &&
              !show30x20 &&
              !show20x20 &&
              !show15x20 &&
              !show20x15 &&
              (
                <>
                  {ShowClaim23x23Print()}
                </>
              )}
            {show23x23 && (<>{ShowClaim23x23Print()}</>)}
            {show24x32 && (<>{ShowClaim24x32Print()}</>)}
          </div>
        </div>

      </div>
      
    </>
  );
};
export default ClaimPrintbook;
