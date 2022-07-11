import React from "react";
// import "./style.css";
import { useDispatch } from "react-redux";
import { 
  CompXerox,
  CompScan,
  CompLaminate,
  CompBinder,
  CompUsbflash,
  CompDiscprint,
  CompEmail
} from "../../../constants/actions/comp";
import { HashLink } from 'react-router-hash-link';

const ServiceCompCards = () => {

  const dispatch = useDispatch();

  const handleClickXerox = () => { dispatch(CompXerox()); }
  const handleClickScaner = () => { dispatch(CompScan()); }
  const handleClickLaminate = () => { dispatch(CompLaminate()); }
  const handleClickBinder = () => { dispatch(CompBinder()); }
  const handleClickUsbflash = () => { dispatch(CompUsbflash()); }
  const handleClickDiscprint = () => { dispatch(CompDiscprint()); }
  const handleClickEmail = () => { dispatch(CompEmail()); }
    
  return (
    <>
      {/* Рядок для темно-сірого блока */}
      <div className="row">
        {/* Темно-сірий блок для карток */}
        <div className="col py-4" style={{background:"#4D4D4D"}}>
          {/* Рядок для карток */}

          <div className="row gx-5 justify-content-center">
            <h1 className="text-light text-center">Комп'ютерні послуги</h1>
            <p className="text-light text-center">Пропонуємо Вам наступні комп'ютерні послуги:</p>
            
            {/* Картка 1 */}
            <div className="col-6 col-sm-4 col-md-2 m-2 p-1 border bg-light rounded "
            onClick={handleClickXerox}>
              <HashLink smooth to={'/comp#component'} style={{color:"#000"}}>
              <div className="card" >
                <img
                  src="/images/services/comp/comp1.png"
                  className="card-img-top"
                  alt="Ксерокопії та друк"
                />
                <div className="card-body-photo">
                  <h6 className="card-title text-center">Ксерокопії та друк</h6>
                </div>
              </div>
              </HashLink>
            </div>

            {/* Картка 2 */}
            <div className="col-6 col-sm-4 col-md-2 m-2 p-1 border bg-light rounded "
            onClick={handleClickScaner}>
              <HashLink smooth to={'/comp#component'} style={{color:"#000"}}>
              <div className="card" >
                <img
                  src="/images/services/comp/comp2.png"
                  className="card-img-top"
                  alt="Сканування"
                  />
                <div className="card-body-photo">
                  <h6 className="card-title text-center">Сканування</h6>
                </div>
              </div>
              </HashLink>
            </div>
            
            {/* Картка 3 */}
            <div className="col-6 col-sm-4 col-md-2 m-2 p-1 border bg-light rounded "
            onClick={handleClickLaminate}>
            <HashLink smooth to={'/comp#component'} style={{color:"#000"}}>
              <div className="card" >
                <img
                  src="/images/services/comp/comp3.png"
                  className="card-img-top"
                  alt="Ламінування"
                />
                <div className="card-body-photo">
                  <h6 className="card-title text-center">Ламінування</h6>
                </div>
              </div>
              </HashLink>
            </div>
            
            {/* Картка 4 */}
            <div className="col-6 col-sm-4 col-md-2 m-2 p-1 border bg-light rounded "
            onClick={handleClickBinder}>
            <HashLink smooth to={'/comp#component'} style={{color:"#000"}}>
              <div className="card" >
                <img
                  src="/images/services/comp/comp4.png"
                  className="card-img-top"
                  alt="Брошурування"
                  />
                <div className="card-body-photo">
                  <h6 className="card-title text-center">Брошурування</h6>
                </div>
              </div>
              </HashLink>
            </div>
            
            {/* Картка 5 */}
            <div className="col-6 col-sm-4 col-md-2 m-2 p-1 border bg-light rounded "
            onClick={handleClickUsbflash}>
            <HashLink smooth to={'/comp#component'} style={{color:"#000"}}>
              <div className="card" >
                <img
                  src="/images/services/comp/comp5.png"
                  className="card-img-top"
                  alt="Запис цифрових носіїв"
                />
                <div className="card-body-photo">
                  <h6 className="card-title text-center">Запис цифрових носіїв</h6>
                </div>
              </div>
            </HashLink>
            </div>

            {/* Картка 6 */}
            <div className="col-6 col-sm-4 col-md-2 m-2 p-1 border bg-light rounded "
            onClick={handleClickDiscprint}>
              <HashLink smooth to={'/comp#component'} style={{color:"#000"}}>
              <div className="card" >
                <img
                  src="/images/services/comp/comp6.png"
                  className="card-img-top"
                  alt="Друк на дисках"
                />
                <div className="card-body-photo">
                  <h6 className="card-title text-center">Друк на дисках</h6>
                </div>
              </div>
              </HashLink>
            </div>

            {/* Картка 7 */}
            <div className="col-6 col-sm-4 col-md-2 m-2 p-1 border bg-light rounded "
            onClick={handleClickEmail}>
              <HashLink smooth to={'/comp#component'} style={{color:"#000"}}>
              <div className="card" >
                <img
                  src="/images/services/comp/comp7.png"
                  className="card-img-top"
                  alt="Послуги електронної пошти"
                />
                <div className="card-body-photo">
                  <h6 className="card-title text-center">Послуги електронної пошти</h6>
                </div>
              </div>
            </HashLink>
            </div>
            
            
          </div>
        </div>
      </div>
      
      <section id="component">
      </section>
    </>
  );
  };

export default ServiceCompCards;
