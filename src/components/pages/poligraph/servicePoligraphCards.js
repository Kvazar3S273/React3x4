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
        {/* Темно-сірий блок для карток */}
        <div className="col py-4" style={{ background: "#2F302F" }}>
          {/* Рядок для карток */}
          <div className="row gx-5 justify-content-center">
            <h1 className="text-light text-center">Поліграфічні послуги</h1>
            <p className="text-light text-center">
              Ми друкуємо різну поліграфічну продукцію, зокрема:
            </p>
            <ServiceCardsMain />
            {isPoligraphOther ? (
              <>
                <ServiceCardsOther />
              </>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>

      <section id="component"></section>

    </>
  );
};

export default ServicePoligraphCards;
