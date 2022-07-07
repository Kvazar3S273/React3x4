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

const ServiceCardsMain = () => {

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
      {/* Картка 1 */}
      <div
        className="col-6 col-sm-4 col-md-2 m-2 p-1 border bg-light rounded"
        onClick={handleClickVisitcard}
      >
        <HashLink smooth to={"/poligraph#component"} style={{ color: "#000" }}>
          <div className="card">
            <img
              src="/images/services/poligraph/vizitka.png"
              className="card-img-top"
              alt="Візитки"
            />
            <div className="card-body-photo">
              <h6 className="card-title text-center">Візитки</h6>
            </div>
          </div>
        </HashLink>
      </div>

      {/* Картка 2 */}
      <div
        className="col-6 col-sm-4 col-md-2 m-2 p-1 border bg-light rounded"
        onClick={handleClickFlyer}
      >
        <HashLink smooth to={"/poligraph#component"} style={{ color: "#000" }}>
          <div className="card">
            <img
              src="/images/services/poligraph/flyer.png"
              className="card-img-top"
              alt="Листівки, флаєри"
            />
            <div className="card-body-photo">
              <h6 className="card-title text-center">Листівки, флаєри</h6>
            </div>
          </div>
        </HashLink>
      </div>

      {/* Картка 3 */}
      <div
        className="col-6 col-sm-4 col-md-2 m-2 p-1 border bg-light rounded"
        onClick={handleClickCalendar}
      >
        <HashLink smooth to={"/poligraph#component"} style={{ color: "#000" }}>
          <div className="card">
            <img
              src="/images/services/poligraph/calendarik.png"
              className="card-img-top"
              alt="Календарі"
            />
            <div className="card-body-photo">
              <h6 className="card-title text-center">Календарики</h6>
            </div>
          </div>
        </HashLink>
      </div>

      {/* Картка 4 */}
      <div
        className="col-6 col-sm-4 col-md-2 m-2 p-1 border bg-light rounded"
        onClick={handleClickTag}
      >
        <HashLink smooth to={"/poligraph#component"} style={{ color: "#000" }}>
          <div className="card">
            <img
              src="/images/services/poligraph/birka.png"
              className="card-img-top"
              alt="Цінники, бірки"
            />
            <div className="card-body-photo">
              <h6 className="card-title text-center">Цінники, бірки</h6>
            </div>
          </div>
        </HashLink>
      </div>

      {/* Картка 5 */}
      <div
        className="col-6 col-sm-4 col-md-2 m-2 p-1 border bg-light rounded"
        onClick={handleClickSticker}
      >
        <HashLink smooth to={"/poligraph#component"} style={{ color: "#000" }}>
          <div className="card">
            <img
              src="/images/services/poligraph/naklejka.png"
              className="card-img-top"
              alt="Наклейки"
            />
            <div className="card-body-photo">
              <h6 className="card-title text-center">Наклейки</h6>
            </div>
          </div>
        </HashLink>
      </div>

      {/* Картка 6 */}
      <div
        className="col-6 col-sm-4 col-md-2 m-2 p-1 border bg-light rounded"
        onClick={handleClickHanger}
      >
        <HashLink smooth to={"/poligraph#component"} style={{ color: "#000" }}>
          <div className="card">
            <img
              src="/images/services/poligraph/henger.png"
              className="card-img-top"
              alt="Хенгери"
            />
            <div className="card-body-photo">
              <h6 className="card-title text-center">Хенгери</h6>
            </div>
          </div>
        </HashLink>
      </div>

      {/* Картка 7 */}
      <div
        className="col-6 col-sm-4 col-md-2 m-2 p-1 border bg-light rounded"
        onClick={handleClickOracal}
      >
        <HashLink smooth to={"/poligraph#component"} style={{ color: "#000" }}>
          <div className="card">
            <img
              src="/images/services/poligraph/oracal.png"
              className="card-img-top"
              alt="Самоклейка плівка"
            />
            <div className="card-body-photo">
              <h6 className="card-title text-center">Самоклейка плівка</h6>
            </div>
          </div>
        </HashLink>
      </div>

      {/* Картка 8 */}
      <div
        className="col-6 col-sm-4 col-md-2 m-2 p-1 border bg-light rounded"
        onClick={handleClickBaner}
      >
        <HashLink smooth to={"/poligraph#component"} style={{ color: "#000" }}>
          <div className="card">
            <img
              src="/images/services/poligraph/bnr.png"
              className="card-img-top"
              alt="Банер"
            />
            <div className="card-body-photo">
              <h6 className="card-title text-center">Банер</h6>
            </div>
          </div>
        </HashLink>
      </div>

      {/* Картка 9 */}
      <div
        className="col-6 col-sm-4 col-md-2 m-2 p-1 border bg-light rounded"
        onClick={handleClickPvc}
      >
        <HashLink smooth to={"/poligraph#component"} style={{ color: "#000" }}>
          <div className="card">
            <img
              src="/images/services/poligraph/tablichka.png"
              className="card-img-top"
              alt="Друк на ПВХ"
            />
            <div className="card-body-photo">
              <h6 className="card-title text-center">Друк на ПВХ</h6>
            </div>
          </div>
        </HashLink>
      </div>

      {/* Картка 10 */}
      <div
        className="col-6 col-sm-4 col-md-2 m-2 p-1 border bg-light rounded"
        onClick={handleClickOther}
        style={{cursor:"pointer"}}
      >
        {/* <HashLink smooth to={'/poligraph#component'} style={{color:"#000"}}> */}
        <div className="card">
          <img
            src="/images/services/poligraph/other.png"
            className="card-img-top"
            alt="Інша поліграфія"
          />
          <div className="card-body-photo">
            <h6 className="card-title text-center">Інша поліграфія</h6>
          </div>
        </div>
        {/* </HashLink> */}
      </div>
    </>
  );
  };

export default ServiceCardsMain;