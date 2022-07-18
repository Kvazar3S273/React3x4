import React from "react";
// import "./style.css";
import { useDispatch } from "react-redux";

import { HashLink } from 'react-router-hash-link';

const ServicePhotoBookCards = () => {

  return (
    <>
      <div className="row">

        <div className="col-md-1 py-4"></div>
        <div className="col-md-10 py-4">
          {/* Рядок для карток */}

          <div className="row gx-5 justify-content-center">
            {/* Картка 1 */}
            <div className="col-6 col-sm-4 col-md-3 m-3 p-2 border bg-light rounded ">
            {/* onClick={handleClickXerox}> */}
              <HashLink smooth to={'/comp#component'} style={{color:"#000"}}>
              <div className="card" >
                <img
                  src="/images/services/photo/photobooks/unibook-menu.png"
                  className="card-img-top"
                  alt="UniBook"
                />
                <div className="card-body-photo">
                  <h6 className="card-title text-center">UniBook</h6>
                </div>
              </div>
              </HashLink>
            </div>

            {/* Картка 2 */}
            <div className="col-6 col-sm-4 col-md-3 m-3 p-2 border bg-light rounded ">
            {/* onClick={handleClickScaner}> */}
              <HashLink smooth to={'/comp#component'} style={{color:"#000"}}>
              <div className="card" >
                <img
                  src="/images/services/photo/photobooks/slimbook-menu.png"
                  className="card-img-top"
                  alt="SlimBook"
                  />
                <div className="card-body-photo">
                  <h6 className="card-title text-center">SlimBook</h6>
                </div>
              </div>
              </HashLink>
            </div>
            
            {/* Картка 3 */}
            <div className="col-6 col-sm-4 col-md-3 m-3 p-2 border bg-light rounded ">
            {/* onClick={handleClickLaminate}> */}
            <HashLink smooth to={'/comp#component'} style={{color:"#000"}}>
              <div className="card" >
                <img
                  src="/images/services/photo/photobooks/bambook-menu.png"
                  className="card-img-top"
                  alt="BamBook"
                />
                <div className="card-body-photo">
                  <h6 className="card-title text-center">BamBook</h6>
                </div>
              </div>
              </HashLink>
            </div>
            
            {/* Картка 4 */}
            <div className="col-6 col-sm-4 col-md-3 m-3 p-2 border bg-light rounded ">
            {/* onClick={handleClickBinder}> */}
            <HashLink smooth to={'/comp#component'} style={{color:"#000"}}>
              <div className="card" >
                <img
                  src="/images/services/photo/photobooks/photobook-menu.png"
                  className="card-img-top"
                  alt="PhotoBook"
                  />
                <div className="card-body-photo">
                  <h6 className="card-title text-center">PhotoBook</h6>
                </div>
              </div>
              </HashLink>
            </div>
            
            {/* Картка 5 */}
            <div className="col-6 col-sm-4 col-md-3 m-3 p-2 border bg-light rounded ">
            {/* onClick={handleClickUsbflash}> */}
            <HashLink smooth to={'/comp#component'} style={{color:"#000"}}>
              <div className="card" >
                <img
                  src="/images/services/photo/photobooks/printbook-menu.png"
                  className="card-img-top"
                  alt="PrintBook"
                />
                <div className="card-body-photo">
                  <h6 className="card-title text-center">PrintBook</h6>
                </div>
              </div>
            </HashLink>
            </div>

            {/* Картка 6 */}
            <div className="col-6 col-sm-4 col-md-3 m-3 p-2 border bg-light rounded ">
            {/* onClick={handleClickDiscprint}> */}
              <HashLink smooth to={'/comp#component'} style={{color:"#000"}}>
              <div className="card" >
                <img
                  src="/images/services/photo/photobooks/planshet_menu.png"
                  className="card-img-top"
                  alt="Планшет"
                />
                <div className="card-body-photo">
                  <h6 className="card-title text-center">Планшет</h6>
                </div>
              </div>
              </HashLink>
            </div>
            
            
          </div>
        </div>
      <div className="col-md-1 py-4"></div>
      </div>
      
      <section id="component">
      </section>
    </>
  );
};

export default ServicePhotoBookCards;
