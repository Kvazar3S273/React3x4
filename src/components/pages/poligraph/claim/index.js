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
        <div className="col px-3 mb-4">
          <h1 className="text-center text-dark mt-4 mb-4">Вимоги до макету</h1>

          <div className="tab-claim">
            <button
              className={classNames("tablinks-claim", showSizes ? "active" : "")}
              onClick={handleClickSizes}> Розміри макету
            </button>
            <button
              className={classNames("tablinks-claim", showFormat ? "active" : "")}
              onClick={handleClickFormat}> Формат файлів
            </button>
            <button
              className={classNames("tablinks-claim", showColor ? "active" : "")}
              onClick={handleClickColor}> Колір
            </button>
            <button
              className={classNames("tablinks-claim", showFont ? "active" : "")}
              onClick={handleClickFont}> Шрифт
            </button>
            <button
              className={classNames("tablinks-claim", showWide ? "active" : "")}
              onClick={handleClickWide}> Широкоформатний друк
            </button>
          </div>

          <div className="tabcontent-claim mb-4 overflow-auto">
            {!showSizes &&
              !showColor &&
              !showFont &&
              !showFormat &&
              !showWide && 
              <>
                <h4 className="m-3 text-center text-danger">Розміри макету</h4>
                <div className="row">
                  <div className="col-md-6">
                    <img
                      src="/images/services/poligraph/maket_visitka.jpg"
                      className="m-2"
                      style={{ width: "95%" }}
                    />
                  </div>
                  <div className="col-md-6">
                    <p className="m-3 mt-0">
                      Макет повинен бути зроблений з припуском по <b>2 мм з кожного боку.</b><br />
                      Важлива інформація (текст, логотип тощо) повинна знаходитись не ближче
                       ніж <b>за 5 мм</b> до краю макета з врахуванням припуску. <br />
                      Всі елементи навиліт (фото або фоновий малюнок) 
                      повинні займати всю площу малюнка. <br />
                      Файли <b>не повинні містити</b> міток розрізу, хрестів суміщення, шкал
                      або будь-яких інших елементів, які не мають бути
                      надруковані.
                    </p>
                  </div>
                </div>
              </>
              }
            {showSizes && (
              <>
                <h4 className="m-3 text-center text-danger">Розміри макету</h4>
                <div className="row">
                  <div className="col-md-6">
                    <img
                      src="/images/services/poligraph/maket_visitka.jpg"
                      className="m-2"
                      style={{ width: "95%" }}
                    />
                  </div>
                  <div className="col-md-6">
                    <p className="m-3 mt-0">
                      Макет повинен бути зроблений з припуском по 2 мм з кожного боку.<br />
                      Важлива інформація (текст, логотип тощо) повинна знаходитись не ближче
                       ніж за 5 мм до краю макета з врахуванням припуску. <br />
                      Всі елементи навиліт (фото або фоновий малюнок) 
                      повинні займати всю площу малюнка. <br />
                      Файли не повинні містити міток розрізу, хрестів суміщення, шкал
                      або будь-яких інших елементів, які не мають бути
                      надруковані.
                    </p>
                  </div>
                </div>
              </>
            )}
            {showFormat && (
              <>
                <h4 className="m-3 text-center text-danger">Формат файлів</h4>
                <p className="m-3">
                  Файли приймаються в форматах TIF, JPG, PDF. <br />
                  Не приймаються:
                  GIF, BMP, PICT, DOC, XLS та інші.<br />
                  Всі шари повинні бути зведені, не повинні містити альфа-каналів. <br />
                  Кольорова модель - CMYK.<br />
                  Профіль - US Web coated SWOP2 або інший. <br />
                  Для TIF формату - файл не повинен бути зжатим. <br />
                  Роздільна здатність - 300 dpi
                  </p>
              </>
            )}
            {showColor && (
              <>
                <h4 className="m-3 text-center text-danger">Колір</h4>
                <p className="m-3">
                  CMYK або градації сірого, 8 біт/канал <br />
                  Мінімальна барвистість 20% <br />
                  Максимальна барвистість 300% <br />
                  Насичений чорний С-50 M-50 Y-50 K-100 <br />
                  Дрібний текст С-0 M-0 Y-0 K-100 <br />
                  Сірий не більше С-0 M-0 Y-0 K-80
                </p>
              </>
            )}
            {showFont && (
              <>
                <h4 className="m-3 text-center text-danger">Шрифт</h4>
                <p className="m-3">
                  Розмір шрифта для друку на світлому фоні не менше 5 пт. <br />
                  Розмір шрифта для друку на темному фоні не менше 6 пт. <br />
                  Мінімальна товщина ліній 0,2мм.
                </p>
              </>
            )}
            {showWide && (
              <>
                <h4 className="m-3 text-center text-danger">Широкоформатний друк</h4>
                <p className="m-3">
                Розмір макету повинен бути 1:1<br />
                Важлива інформація повинна розміщуватись не ближче як по 5 мм з кожного краю<br />
                Файли не повинні містити міток розрізу, хрестів суміщення, шкал або будь-яких 
                інших елементів, які не мають бути надруковані.<br />
                Для банерів з люверсами - всі важливі елементи повинні знаходитись 
                не ближе ніж 5 см від краю готового виробу.<br />
                Роздільна здатність для друку, по якості:<br />
                720dpi : 75-120 px/inch;<br />
                1080dpi : 100-120 px/inch;<br />
                1440dpi : 150 px/inch;<br />
                УФ : 150 px/inch;<br />
                1440 Фото: 150 px/inch<br />
                1440 Латекс: 150 px/inch
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
