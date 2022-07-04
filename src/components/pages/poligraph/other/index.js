import React, { useState } from "react";
import "react-slideshow-image/dist/styles.css";
import "./styles.css";
import Visitcard from "../visitcard";

const Other = () => {
  return (
    <>
      <div className="row">
        {/* Бордовий блок для карток */}
        <div className="col px-3 mt-4 mb-4" style={{ background: "#4D4D4D"}}>
          <h1 className="text-center text-light mt-4 mb-4">Інша поліграфія</h1>

          <div className="tab ">
            <button className="tablinks"> Буклети </button>
            <button className="tablinks active"> Плакати </button>
            <button className="tablinks"> Брошури </button>
            <button className="tablinks"> Об'ємні календарі </button>
            <button className="tablinks"> Меню </button>
            <button className="tablinks"> Блокноти </button>
            <button className="tablinks"> Пластикові картки </button>
            <button className="tablinks"> Блоки для запису </button>
            <button className="tablinks"> Конверти </button>
            <button className="tablinks"> Фірмові папки </button>
          </div>

          <div className="tabcontent mb-4">
            <h3>Буклети</h3>
            <p>Тут інформація про буклети</p>
            {/* <Visitcard /> */}
            
          </div>

          
        </div>
      </div>
    </>
  );
};
export default Other;
