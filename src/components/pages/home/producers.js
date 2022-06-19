import React from "react";
import "./index.css";

const Producers = () => {
  return (
    <div className="row">
      <div
        className="col rounded  mt-3"
        style={{ backgroundColor: "#132855" }}
      >
        <div className="row justify-content-center">
          <div className="container">
            <div>
              <h1 className="text-light text-center mt-2">Виробники</h1>
              <p className="text-light text-center">
                Ми користуємось витратними матеріалами тільки перевірених
                виробників <br />
                щоб забезпечити високу якість нашої продукції
              </p>

              <div className="row justify-content-center mb-3">
                <div className="col-10 col-sm-5 col-md-3 producer">
                  <img className="img-partners" src="/images/partners/partner1.png" alt="Epson"/>
                </div>
                <div className="col-10 col-sm-5 col-md-3 producer">
                  <img className="img-partners" src="/images/partners/partner2.png" alt="Videx"/>
                </div>
                <div className="col-10 col-sm-5 col-md-3 producer">
                  <img className="img-partners" src="/images/partners/partner3.png" alt="WWM"/>
                </div>
                <div className="col-10 col-sm-5 col-md-3 producer">
                  <img className="img-partners" src="/images/partners/partner4.png" alt="GP" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Producers;
