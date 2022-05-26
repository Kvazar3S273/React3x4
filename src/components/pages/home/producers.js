import React from "react";
import "./index.css";

const Producers = () => {
  return (
    <div className="row">
      <div className="col rounded py-3">
        <div className="row gx-4 justify-content-center">
          <div className="container" style={{position: "relative"}}>
            <img
              className="bg-img"
              src="/images/partners/partner_bg.png"
              alt="..."
            />
            <div style={{position: "absolute", top:"30%", left:"50%", transform: "translate(-50%, -50%)"}}>
              <h1 className="text-light text-center">Виробники</h1>
              <p className="text-light text-center">
                Ми користуємось витратними матеріалами тільки перевірених
                виробників
              </p>
              <p className="text-light text-center">
                щоб забезпечити високу якість нашої продукції
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Producers;
