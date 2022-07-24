import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import classNames from "classnames";
import "./tabstyle.css"
import MakeFancyboxBamBook24x32 from "../MakeFancyboxBamBook24x32";
import MakeFancyboxBamBook20x30 from "../MakeFancyboxBamBook20x30";
const ClaimBambook = () => {
  const [show30x30, setShow30x30] = useState(false);
  const [show24x32, setShow24x32] = useState(false);
  const [show20x30, setShow20x30] = useState(false);
  const [show19x19, setShow19x19] = useState(false);
  const [show23x23, setShow23x23] = useState(false);
  const [show23x18, setShow23x18] = useState(false);

  const handleClick30x30 = (event) => {
    setShow30x30(true);
    setShow24x32(false);
    setShow20x30(false);
    setShow19x19(false);
    setShow23x23(false);
    setShow23x18(false);
  };
  const handleClick24x32 = (event) => {
    setShow30x30(false);
    setShow24x32(true);
    setShow20x30(false);
    setShow19x19(false);
    setShow23x23(false);
    setShow23x18(false);
  };
  const handleClick20x30 = (event) => {
    setShow30x30(false);
    setShow24x32(false);
    setShow20x30(true);
    setShow19x19(false);
    setShow23x23(false);
    setShow23x18(false);
  };
  const handleClick19x19 = (event) => {
    setShow30x30(false);
    setShow24x32(false);
    setShow20x30(false);
    setShow19x19(true);
    setShow23x23(false);
    setShow23x18(false);
  };
  const handleClick23x23 = (event) => {
    setShow30x30(false);
    setShow24x32(false);
    setShow20x30(false);
    setShow19x19(false);
    setShow23x23(true);
    setShow23x18(false);
  };
  const handleClick23x18 = (event) => {
    setShow30x30(false);
    setShow24x32(false);
    setShow20x30(false);
    setShow19x19(false);
    setShow23x23(false);
    setShow23x18(true);
  };
  

  return (
    <>
      <div className="row">
        <div className="col px-3 mb-4">
          <h1 className="text-center text-dark mt-4 mb-4">Вимоги до макету</h1>

          <div className="books-tab-claim">
            <button
              className={classNames("books-tablinks-claim", show30x30 ? "active" : "")}
              onClick={handleClick30x30}> {" "} 30x30
            </button>
            <button
              className={classNames("books-tablinks-claim", show24x32 ? "active" : "")}
              onClick={handleClick24x32}> {" "} 24x32
            </button>
            <button
              className={classNames("books-tablinks-claim", show20x30 ? "active" : "")}
              onClick={handleClick20x30}> {" "} 20x30
            </button>
            <button
              className={classNames("books-tablinks-claim", show19x19 ? "active" : "")}
              onClick={handleClick19x19}> {" "} 19x19
            </button>
            <button
              className={classNames("books-tablinks-claim", show23x23 ? "active" : "")}
              onClick={handleClick23x23}> {" "} 23x23
            </button>
            <button
              className={classNames("books-tablinks-claim", show23x18 ? "active" : "")}
              onClick={handleClick23x18}> {" "} 23x18
            </button>
          </div>

          <div className="books-tabcontent-claim mb-4 overflow-auto">
            {!show30x30 &&
              !show24x32 &&
              !show20x30 &&
              !show19x19 &&
              !show23x23 &&
              !show23x18 && (
                <>
                  <h4 className="m-3 text-center text-danger">BamBook 30x30</h4>
                  <div className="row">
                    <div className="col-md-6"></div>
                    <div className="col-md-6"></div>
                  </div>
                </>
              )}
            {show30x30 && (
              <>
                <h4 className="m-3 text-center text-danger">BamBook 30x30</h4>
                <div className="row">
                  <div className="col-md-6"></div>
                  <div className="col-md-6"></div>
                </div>
              </>
            )}
            {show24x32 && (
              <>
                <h4 className="m-3 text-center text-danger">BamBook 24x32</h4>
                <div className="row">
                  <div className="col-md-8">
                    <h3>Вимоги до файлів</h3>
                    
                    <table class="table table-striped">
                      
                      <tbody>
                        <tr>
                          <th scope="row" className="text-success">Формат файлу</th>
                          <td>JPG (максимальна якість)</td>
                        </tr>
                        <tr>
                          <th scope="row" className="text-success">Колірна модель</th>
                          <td>RGB, профіль sRGB IEC61966</td>
                        </tr>
                        <tr>
                          <th scope="row" className="text-success">Розширення</th>
                          <td>300 dpi(точок на дюйм)</td>
                        </tr>
                        <tr>
                          <th scope="row" className="text-success">Файл обкладинки для 3-25 розворотів</th>
                          <td>502 х 346 мм (5929 x 4087 пікселів)</td>
                        </tr>
                        <tr>
                          <th scope="row" className="text-success">Файл обкладинки для 26-40 розворотів</th>
                          <td>516 х 346 мм (6094 x 4087 пікселів)</td>
                        </tr>
                        <tr>
                          <th scope="row" className="text-success">Файл розвороту</th>
                          <td>454 х 316 мм (5362 x 3732 пікселів)</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="col-md-4">
                    <MakeFancyboxBamBook24x32 />
                  </div>
                </div>
              </>
            )}
            {show20x30 && (
              <>
                <h4 className="m-3 text-center text-danger">BamBook 20x30</h4>
                <div className="row">
                  <div className="col-md-8">
                  <h3>Вимоги до файлів</h3>
                    
                    <table class="table table-striped">
                      
                      <tbody>
                        <tr>
                          <th scope="row" className="text-success">Формат файлу</th>
                          <td>JPG (максимальна якість)</td>
                        </tr>
                        <tr>
                          <th scope="row" className="text-success">Колірна модель</th>
                          <td>RGB, профіль sRGB IEC61966</td>
                        </tr>
                        <tr>
                          <th scope="row" className="text-success">Розширення</th>
                          <td>300 dpi(точок на дюйм)</td>
                        </tr>
                        <tr>
                          <th scope="row" className="text-success">Файл обкладинки для 3-25 розворотів</th>
                          <td>456 х 320 мм (5386 х 3780 пікселів)</td>
                        </tr>
                        <tr>
                          <th scope="row" className="text-success">Файл обкладинки для 26-40 розворотів</th>
                          <td>469 х 320 мм (5540 х 3780 пікселів)</td>
                        </tr>
                        <tr>
                          <th scope="row" className="text-success">Файл розвороту</th>
                          <td>408 х 290 мм (4819 х 3425 пікселів)</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="col-md-4">
                    <MakeFancyboxBamBook20x30 />
                  </div>
                </div>
              </>
            )}
            {show19x19 && (
              <>
                <h4 className="m-3 text-center text-danger">BamBook 19x19</h4>
                <div className="row">
                  <div className="col-md-6"></div>
                  <div className="col-md-6"></div>
                </div>
              </>
            )}
            {show23x23 && (
              <>
                <h4 className="m-3 text-center text-danger">BamBook 23x23</h4>
                <div className="row">
                  <div className="col-md-6"></div>
                  <div className="col-md-6"></div>
                </div>
              </>
            )}
            {show23x18 && (
              <>
                <h4 className="m-3 text-center text-danger">BamBook 23x18</h4>
                <div className="row">
                  <div className="col-md-6"></div>
                  <div className="col-md-6"></div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
export default ClaimBambook;
