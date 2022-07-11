import React from "react";
import { useSelector } from "react-redux";
import Other from "./other/index";
// import "./style.css";
import ServiceCardsMain from "./serviceCardsMain";
import ServiceCardsOther from "./serviceCardsOther";

const ServicePoligraphCards = () => {
  const { isPoligraphOther } = useSelector((state) => state.poligraph);

  return (
    <>
      <div className="row">
        {/* Бордовий блок для карток */}
        <div className="col py-4" style={{ background: "#883A3A" }}>
          {/* Рядок для карток */}
          <div className="row gx-5 justify-content-center">
            <h1 className="text-light text-center">Поліграфічні послуги</h1>
            <p className="text-light text-center">
              Ми друкуємо різну поліграфічну продукцію, зокрема:
            </p>
            <ServiceCardsMain />
            {isPoligraphOther ? 
            <>
              <ServiceCardsOther />
              <Other/>
            </> : ""}
          </div>
        </div>
      </div>

      <section id="other"></section>
      <Other/>
      <section id="component"></section>

    </>
  );
};

export default ServicePoligraphCards;
