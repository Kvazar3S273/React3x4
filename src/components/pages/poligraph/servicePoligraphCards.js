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
import ServiceCardsMain from "./serviceCardsMain";
import ServiceCardsOther from "./serviceCardsOther";

const ServicePoligraphCards = () => {

  // const dispatch = useDispatch();

  // const handleClickVisitcard = () => { dispatch(PoligraphVisitcard()); }
  // const handleClickFlyer = () => { dispatch(PoligraphFlyer()); }
  // const handleClickCalendar = () => { dispatch(PoligraphCalendar()); }
  // const handleClickTag = () => { dispatch(PoligraphTag()); }
  // const handleClickSticker = () => { dispatch(PoligraphSticker()); }
  // const handleClickHanger = () => { dispatch(PoligraphHanger()); }
  // const handleClickOracal = () => { dispatch(PoligraphOracal()); }
  // const handleClickBaner = () => { dispatch(PoligraphBaner()); }
  // const handleClickPvc = () => { dispatch(PoligraphPvc()); }
  // const handleClickOther = () => { dispatch(PoligraphOther()); }
 
    
  return (
    <>
      <div classNameName="row">
        {/* Бордовий блок для карток */}
        <div className="col py-4" style={{ background: "#883A3A" }}>
          
          {/* Рядок для карток */}
          <div className="row gx-5 justify-content-center">
            <h1 className="text-light text-center">Поліграфічні послуги</h1>
            <p className="text-light text-center">
              Ми друкуємо різну поліграфічну продукцію, зокрема:
            </p>

            <ServiceCardsMain />
            <ServiceCardsOther />
          </div>
        </div>
      </div>

      <section id="component"></section>
    </>
  );
  };

export default ServicePoligraphCards;
