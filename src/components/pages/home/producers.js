import React from "react";
import "./index.css";

const Producers = () => {
  return (
    <div className="row">
      <div className="col rounded py-3 mt-3" style={{backgroundColor:"#132855"}}>
        <div className="row gx-4 justify-content-center">
            {/* <img className="bg-img" src="/images/partners/partner_bg.png" alt="..."/> */}
          <div className="container" 
          // style={{position: "relative"}}
          >
                  <div 
                  // style={{position: "absolute", top:"45%", left:"50%", width:"80%", transform: "translate(-50%, -50%)"}}
                  >
                    <h1 className="text-light text-center">Виробники</h1>
                    <p className="text-light text-center">
                      Ми користуємось витратними матеріалами тільки перевірених
                      виробників <br/>щоб забезпечити високу якість нашої продукції
                    </p>
                
                    <div className="row">
                      <div className="col mx-4">
                        <img className="img-partners" src="/images/partners/partner1.png" alt="..."/>
                      </div>
                      <div className="col mx-4">
                        <img className="img-partners" src="/images/partners/partner2.png" alt="..."/>
                      </div>
                      <div className="col mx-4">
                        <img className="img-partners" src="/images/partners/partner3.png" alt="..."/>
                      </div>
                      <div className="col mx-4">
                        <img className="img-partners" src="/images/partners/partner4.png" alt="..."/>
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
