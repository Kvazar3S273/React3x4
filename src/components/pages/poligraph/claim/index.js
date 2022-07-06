import React, { useState } from "react";
import "../other/styles.css";
import { useSelector, useDispatch } from "react-redux";
import classNames from "classnames";

const Claim = () => {
  const [showSizes, setShowSizes] = useState(false);
  const [showFormat, setShowFormat] = useState(false);
  const [showColor, setShowColor] = useState(false);
  const [showFont, setShowFont] = useState(false);
  const [showWide, setShowWide] = useState(false);

  const handleClickSizes = (event) => {
    // 👇️ щоб по кліку відкривалось і по наступному закривалось
    // setShowUsers((current) => !current);
    // 👇️ щоб по кліку тільки відкривалось
    setShowSizes(true);
    setShowFormat(false);
    setShowColor(false);
    setShowFont(false);
    setShowWide(false);
  };
  const handleClickFormat = (event) => {
    setShowSizes(false);
    setShowFormat(true);
    setShowColor(false);
    setShowFont(false);
    setShowWide(false);
  };
  const handleClickColor = (event) => {
    setShowSizes(false);
    setShowFormat(false);
    setShowColor(true);
    setShowFont(false);
    setShowWide(false);
  };
  const handleClickFont = (event) => {
    setShowSizes(false);
    setShowFormat(false);
    setShowColor(false);
    setShowFont(true);
    setShowWide(false);
  };
  const handleClickWide = (event) => {
    setShowSizes(false);
    setShowFormat(false);
    setShowColor(false);
    setShowFont(false);
    setShowWide(true);
  };

  return (
    <>
      <div className="row">
        {/* Бордовий блок для карток */}
        <div className="col px-3 mb-4" >
          <h1 className="text-center text-dark mt-4 mb-4">Вимоги до макету</h1>

          <div className="tab-claim">
            <button className={classNames("tablinks-claim", showSizes ? "active" : "")}
                        onClick={handleClickSizes}>Розміри макету</button>
            <button className={classNames("tablinks-claim", showFormat ? "active" : "")}
                        onClick={handleClickFormat}>Формат файлів</button>
            <button className={classNames("tablinks-claim", showColor ? "active" : "")}
                        onClick={handleClickColor}>Колір</button>
            <button className={classNames("tablinks-claim", showFont ? "active" : "")}
                        onClick={handleClickFont}>Шрифт</button>
            <button className={classNames("tablinks-claim", showWide ? "active" : "")}
                        onClick={handleClickWide}>Широкоформатний друк</button>
            {/* <button className="tablinks-claim" onClick={handleClickSizes}>Формат файлів</button>
            <button className="tablinks-claim" onClick={handleClickSizes}>Колір</button>
            <button className="tablinks-claim" onClick={handleClickSizes}>Шрифт</button>
            <button className="tablinks-claim" onClick={handleClickSizes}>Широкоформатний друк</button> */}

            {/* <button className={classNames("tablinks", isPoligraphBuklet ? "active" : "")} 
                    onClick={handleClickBuklet}> Буклети </button> */}


          </div>

          <div className="tabcontent-claim mb-4 overflow-auto">
                {
                        !showSizes && !showColor && !showFont && !showFormat && !showWide &&
                        <h3>Виберіть що-небудь зліва</h3>
                }
            {showSizes && (
              <>
                <img src="/images/services/poligraph/maket_visitka.jpg" />
                <h5>Розміри макету</h5>
                <p>
                  Макет повинен бути зроблений з припуском по 2 мм з кожного
                  боку. Важлива інформація (текст, логотип тощо) повинна
                  знаходитись не ближче ніж за 5 мм до краю макета з врахуванням
                  припуску. Всі елементи навиліт (фото або фоновий малюнок)
                  повинні займати всю площу малюнка. Файли не повинні містити
                  міток розрізу, хрестів суміщення, шкал або будь-яких інших
                  елементів, які не мають бути надруковані.
                </p>
              </>
            )}
            {showFormat && (
              <>
                <h5>Формат файлів</h5>
                <p>
                  2
                </p>
              </>
            )}
            {showColor && (
              <>
                <h5>Колір</h5>
                <p>
                  3
                </p>
              </>
            )}
            {showFont && (
              <>
                <h5>Шрифт</h5>
                <p>
                  4
                </p>
              </>
            )}
            {showWide && (
              <>
                <h5>Широкоформатний друк</h5>
                <p>
                  5
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
export default Claim;
