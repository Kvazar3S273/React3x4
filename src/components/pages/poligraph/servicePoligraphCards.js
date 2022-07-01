import React from "react";
// import "./style.css";
import { HashLink } from 'react-router-hash-link';
import { useDispatch } from "react-redux";
import { 
  PoligraphVisitcard,
  PoligraphFlyer,
  PoligraphCalendar,
  PoligraphTag,
  PoligraphSticker,
  PoligraphHanger,
  PoligraphOracal,
  PoligraphBaner,
  PoligraphPvc,
  PoligraphOther
} from "../../../constants/actions/poligraph";

const ServicePoligraphCards = () => {

  const dispatch = useDispatch();

  const handleClickVisitcard = () => { dispatch(PoligraphVisitcard()); }
  const handleClickFlyer = () => { dispatch(PoligraphFlyer()); }
  const handleClickCalendar = () => { dispatch(PoligraphCalendar()); }
  const handleClickTag = () => { dispatch(PoligraphTag()); }
  const handleClickSticker = () => { dispatch(PoligraphSticker()); }
  const handleClickHanger = () => { dispatch(PoligraphHanger()); }
  const handleClickOracal = () => { dispatch(PoligraphOracal()); }
  const handleClickBaner = () => { dispatch(PoligraphBaner()); }
  const handleClickPvc = () => { dispatch(PoligraphPvc()); }
  const handleClickOther = () => { dispatch(PoligraphOther()); }
    
    
  return (
    <>
      {/* Рядок для темно-сірого блока */}
      <div classNameName="row">
        {/* Темно-сірий блок для карток */}
        <div className="col py-4" style={{background:"#883A3A"}}>
          {/* Рядок для карток */}

          <div className="row gx-5 justify-content-center">
            <h1 className="text-light text-center">Поліграфічні послуги</h1>
            <p className="text-light text-center">Ми друкуємо різну поліграфічну продукцію, зокрема:</p>
            
            {/* Картка 1 */}
            <div className="col-6 col-sm-4 col-md-2 m-2 p-1 border bg-light rounded "
            onClick={handleClickVisitcard}>
              <HashLink smooth to={'/poligraph#component'} style={{color:"#000"}}>
              <div className="card" >
                <img
                  src="/images/services/poligraph/vizitka.png"
                  className="card-img-top"
                  alt="Ксерокопії та друк"
                />
                <div className="card-body-photo">
                  <h6 className="card-title text-center">Візитки</h6>
                </div>
              </div>
              </HashLink>
            </div>

            {/* Картка 2 */}
            <div className="col-6 col-sm-4 col-md-2 m-2 p-1 border bg-light rounded "
            onClick={handleClickFlyer}>
              <HashLink smooth to={'/poligraph#component'} style={{color:"#000"}}>
              <div className="card" >
                <img
                  src="/images/services/poligraph/flyer.png"
                  className="card-img-top"
                  alt="Сканування"
                  />
                <div className="card-body-photo">
                  <h6 className="card-title text-center">Листівки, флаєри</h6>
                </div>
              </div>
              </HashLink>
            </div>
            
            {/* Картка 3 */}
            <div className="col-6 col-sm-4 col-md-2 m-2 p-1 border bg-light rounded "
            onClick={handleClickCalendar}>
            <HashLink smooth to={'/poligraph#component'} style={{color:"#000"}}>
              <div className="card" >
                <img
                  src="/images/services/poligraph/calendar.png"
                  className="card-img-top"
                  alt="Ламінування"
                />
                <div className="card-body-photo">
                  <h6 className="card-title text-center">Календарі</h6>
                </div>
              </div>
              </HashLink>
            </div>
            
            {/* Картка 4 */}
            <div className="col-6 col-sm-4 col-md-2 m-2 p-1 border bg-light rounded "
            onClick={handleClickTag}>
            <HashLink smooth to={'/poligraph#component'} style={{color:"#000"}}>
              <div className="card" >
                <img
                  src="/images/services/poligraph/birka.png"
                  className="card-img-top"
                  alt="Брошурування"
                  />
                <div className="card-body-photo">
                  <h6 className="card-title text-center">Цінники, бірки</h6>
                </div>
              </div>
              </HashLink>
            </div>
            
            {/* Картка 5 */}
            <div className="col-6 col-sm-4 col-md-2 m-2 p-1 border bg-light rounded "
            onClick={handleClickSticker}>
            <HashLink smooth to={'/poligraph#component'} style={{color:"#000"}}>
              <div className="card" >
                <img
                  src="/images/services/poligraph/naklejka.png"
                  className="card-img-top"
                  alt="Запис цифрових носіїв"
                />
                <div className="card-body-photo">
                  <h6 className="card-title text-center">Наклейки</h6>
                </div>
              </div>
            </HashLink>
            </div>

            {/* Картка 6 */}
            <div className="col-6 col-sm-4 col-md-2 m-2 p-1 border bg-light rounded "
            onClick={handleClickHanger}>
              <HashLink smooth to={'/poligraph#component'} style={{color:"#000"}}>
              <div className="card" >
                <img
                  src="/images/services/poligraph/henger.png"
                  className="card-img-top"
                  alt="Друк на дисках"
                />
                <div className="card-body-photo">
                  <h6 className="card-title text-center">Хенгери</h6>
                </div>
              </div>
              </HashLink>
            </div>

            {/* Картка 7 */}
            <div className="col-6 col-sm-4 col-md-2 m-2 p-1 border bg-light rounded "
            onClick={handleClickOracal}>
              <HashLink smooth to={'/poligraph#component'} style={{color:"#000"}}>
              <div className="card" >
                <img
                  src="/images/services/poligraph/oracal.png"
                  className="card-img-top"
                  alt="Послуги електронної пошти"
                />
                <div className="card-body-photo">
                  <h6 className="card-title text-center">Самоклейка плівка</h6>
                </div>
              </div>
            </HashLink>
            </div>

            {/* Картка 8 */}
            <div className="col-6 col-sm-4 col-md-2 m-2 p-1 border bg-light rounded "
            onClick={handleClickBaner}>
              <HashLink smooth to={'/poligraph#component'} style={{color:"#000"}}>
              <div className="card" >
                <img
                  src="/images/services/poligraph/bnr.png"
                  className="card-img-top"
                  alt="Послуги електронної пошти"
                />
                <div className="card-body-photo">
                  <h6 className="card-title text-center">Банер</h6>
                </div>
              </div>
            </HashLink>
            </div>

            {/* Картка 9 */}
            <div className="col-6 col-sm-4 col-md-2 m-2 p-1 border bg-light rounded "
            onClick={handleClickPvc}>
              <HashLink smooth to={'/poligraph#component'} style={{color:"#000"}}>
              <div className="card" >
                <img
                  src="/images/services/poligraph/tablichka.png"
                  className="card-img-top"
                  alt="Послуги електронної пошти"
                />
                <div className="card-body-photo">
                  <h6 className="card-title text-center">Друк на ПВХ</h6>
                </div>
              </div>
            </HashLink>
            </div>

            {/* Картка 10 */}
            <div className="col-6 col-sm-4 col-md-2 m-2 p-1 border bg-light rounded "
            onClick={handleClickOther}>
              <HashLink smooth to={'/poligraph#component'} style={{color:"#000"}}>
              <div className="card" >
                <img
                  src="/images/services/poligraph/card.png"
                  className="card-img-top"
                  alt="Послуги електронної пошти"
                />
                <div className="card-body-photo">
                  <h6 className="card-title text-center">Інша поліграфія</h6>
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

export default ServicePoligraphCards;
