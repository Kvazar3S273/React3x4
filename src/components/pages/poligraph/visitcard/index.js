import React from "react";
import "react-slideshow-image/dist/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalculator
} from "@fortawesome/free-solid-svg-icons";

const Visitcard = () => {

  return (
    <div className="row mt-3 mb-3">
      <div className="col py-3" style={{ backgroundColor: "#e0e3e5" }}>
        <h1 className="text-center">Візитки</h1>

        {/* Головна фотка */}
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-8">
            <img
              className="comp-service"
              src="/images/services/poligraph/main_img/visitcard.jpg"
              alt="Візитки"
            />
          </div>
          <div className="col-md-2"></div>
        </div>

        {/* Текст */}
        <div className="row m-3 p-2">
          <div className="col-md-1"></div>
          <div className="col-md-10 px-3">
            <p>
              Дуже важливою частиною ділового спілкування є візитка. Перш ніж
              замовити візитки, потрібно чітко усвідомити, з якою ціллю Ви
              плануєте друк візиток, як ваша візитка повинна виглядати і яку
              інформацію містити.
            </p>
            <p>
              Візитки можуть бути стандартного формату <b>(90х50 мм)</b> або
              Євроформату <b>(85х55 мм)</b> з одно- або двостороннім друком.
              Євровізитка має свої плюси. По-перше, всі візитниці розраховані на
              картки таких розмірів, по-друге більшість портмоне мають відділи
              для кредиток. Якщо ваша кредитка буде зроблена у вигляді
              календарика, то є велика ймовірність, що клієнт носитиме її
              протягом цілого року і, користуючись щоразу календарем,
              автоматично бачитиме вашу рекламу.
            </p>
            <p>
              Ми друкуємо візитки на крейдованому папері різної щільності – від{" "}
              <b>250 г/м.кв.</b>, до <b>450 г/м.кв.</b> з глянцевим, матовим,
              ультрафіолетовим (повним або вибірковим) покриттям або без нього.
            </p>
            <p>
              Спосіб друку напряму залежить від величини тиражу. Якщо замовлено
              більше тисячі візиток, ми використовуємо офсетний друк, якщо тираж
              менший – виникає доцільність цифрового друку.
            </p>
            <p>
              <b>Вимоги до розмірів макету:</b> для звичайної візитки - 94х54мм,
              для євровізитки - 89х59мм.
            </p>
            <p>
              <b>Мінімальний тираж:</b> 100 шт
            </p>
            <p>
              <b>Термін виготовлення</b> - від 3-х робочих днів, починаючи з
              наступного дня після готовності макету.
            </p>
            <p>
              З візитками, надрукованими у нас, Ви завжди матимете стильний,
              достойний і презентабельний вигляд.
            </p>
          </div>
          <div className="col-md-1"></div>
        </div>

        {/* Прайс */}
        <div className="row">
          <h3 className="text-center text-danger my-4">Ціни на візитки:</h3>
          <p className="text-center">
            Прайс на найпоширеніші варіанти замовлення (формат - 50х90 мм, тираж
            - 1000 екз., термін - 7 роб. днів)
          </p>
          {/* Таблиця 1 */}
          <div className="col">
            <div className="row">
              <div className="col-md-3"></div>
              <div className="col-md-6">
                <table className="table table-primary  table-striped text-center">
                  <thead>
                    <tr>
                      <th scope="col">Щільність паперу</th>
                      <th scope="col">Ціна, грн</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">250</th>
                      <td>2000</td>
                    </tr>
                    <tr>
                      <th scope="row">300</th>
                      <td>3000</td>
                    </tr>
                    <tr>
                      <th scope="row">350</th>
                      <td>4000</td>
                    </tr>
                    <tr>
                      <th scope="row">450</th>
                      <td>5000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="col-md-3"></div>
            </div>
          </div>
        </div>

        <div className="row">
          <div
            className="col py-3 mt-3 mb-3"
            // style={{ backgroundColor: "#CDE8F2" }}
          >
            <div className="row">
              <div className="col-8 col-sm-8 col-md-8 col-lg-8 p-5">
                <a
                  href="http://localhost:5000/api/files/getfile/prices.xlsx"
                  target="_blank"
                >
                  <div className="row">
                    <div className="col-2 col-sm-2 col-md-2">
                      <i
                        className="d-flex justify-content-center text-dark my-3"
                        style={{ fontSize: "4.5em" }}
                      >
                        <FontAwesomeIcon icon={faCalculator} />
                      </i>
                    </div>
                    <div className="col-10 col-sm-10 col-md-10">
                      <h4 className="text-danger mt-4 mx-4">
                        Скачати повний прейскурант на друк візиток
                      </h4>
                      
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-4 col-sm-4 col-md-4 col-lg-4">
                <img
                  src="images/services/photo/photobooks/calc.png"
                  alt="Розрахунок"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
export default Visitcard;