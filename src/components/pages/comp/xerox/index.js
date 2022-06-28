import React from "react";
import "react-slideshow-image/dist/styles.css";
import { Slide, Zoom } from "react-slideshow-image";
import "../style.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faPrint,
    faImage,
    faFileWord,
    faEye,
    faMoneyBill1

} from "@fortawesome/free-solid-svg-icons";

const Xerox = () => {
  

  return (
    <div className="row mt-3 mb-3">
      <div className="col py-3" style={{ backgroundColor: "#e0e3e5" }}>
        <h1 className="text-center">Ксерокопії та друк</h1>

        {/* Головна фотка */}
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-8">
            <img className="comp-service" src="/images/services/xerox.jpg" />
          </div>
          <div className="col-md-2"></div>
        </div>

        {/* Текст */}
        <div className="row m-3 p-2">
          <div className="col-md-1"></div>
          <div className="col-md-10 px-3">
            <p>
              Ми здійснюємо друк та робимо ксерокопії на папері формату А4. В
              наявності для друку завжди є звичайний офісний папір (80 г/м.кв.),
              цупкий папір (190 г/м.кв.), фотопапір (від 110 до 220 г/м.кв.), а
              також кольоровий папір та кольоровий картон. Чорно-білий друк
              здійснюється лазерними принтерами, кольоровий - струменевими в
              режимі фотоякості.
            </p>
          </div>
          <div className="col-md-1"></div>
        </div>

        {/* Ми друкуємо з */}
        <div className="container mb-4">
          <h1 className="text-center">Ми друкуємо з:</h1>
          <div className="row ">
            <div className="col-md-3 col-sm-6 text-center">
              <h3>
                <span className="badge bg-warning m-3 p-5">
                  ВСІХ <br />
                  КОМПАКТ
                  <br /> ДИСКІВ
                </span>
              </h3>
            </div>
            <div className="col-md-3 col-sm-6 text-center">
              <h3>
                <span className="badge  bg-success m-3 p-5">
                  ВСІХ <br />
                  USB-ФЛЕШ
                  <br />
                  НОСІЇВ
                </span>
              </h3>
            </div>
            <div className="col-md-3 col-sm-6 text-center">
              <h3>
                <span className="badge bg-danger m-3 p-5">
                  БУДЬ-ЯКИХ <br /> КАРТ
                  <br /> ПАМ'ЯТІ
                </span>
              </h3>
            </div>
            <div className="col-md-3 col-sm-6 text-center">
              <h3>
                <span className="badge  bg-primary m-3 p-5">
                  TELEGRAM
                  <br /> VIBER <br />
                  E-MAIL
                </span>
              </h3>
            </div>
          </div>
        </div>

        {/* Прайс */}
        <div className="row">
          <h3 className="text-center text-danger my-4">
            Вартість друку та копій:
          </h3>
          {/* Таблиця 1 */}
          <div className="col">
            <div className="row">
              <div className="col-md-3"></div>
              <div className="col-md-6">
                <h5 className="text-center my-4">Для чорно-білих копій</h5>
                <table className="table table-primary  table-striped text-center">
                  <thead>
                    <tr>
                      <th scope="col">Вид документа</th>
                      <th scope="col">Ціна, грн</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">Односторонній</th>
                      <td>2</td>
                    </tr>
                    <tr>
                      <th scope="row">Двосторонній</th>
                      <td>3</td>
                    </tr>
                    <tr>
                      <th scope="row">Паспорт (3 стор.)</th>
                      <td>4</td>
                    </tr>
                    <tr>
                      <th scope="row">Паспорт (4 стор.)</th>
                      <td>5</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="col-md-3"></div>
            </div>
          </div>
        </div>

        {/* Таблиця 2 */}
        <div className="col">
          <div className="row">
            <div className="col-md-2"></div>
            <div className="col-md-8">
              <h5 className="text-center my-4">
                Для чорно-білого друку на різних видах паперу
              </h5>
              <table className="table table-primary table-striped text-center">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      rowSpan={2}
                      style={{ verticalAlign: "middle" }}
                    >
                      Матеріал для друку
                    </th>
                    <th scope="col" colSpan={2}>
                      Ціна, грн
                    </th>
                  </tr>
                  <tr>
                    <th scope="col">Текст</th>
                    <th scope="col">Заливка 100%</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">Звичайний папір</th>
                    <td>2</td>
                    <td>4</td>
                  </tr>
                  <tr>
                    <th scope="row">Цупкий папір</th>
                    <td>4</td>
                    <td>7</td>
                  </tr>
                  <tr>
                    <th scope="row">Кольоровий папір</th>
                    <td>5</td>
                    <td>8</td>
                  </tr>
                  <tr>
                    <th scope="row">Кольоровий картон</th>
                    <td>6</td>
                    <td>9</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="col-md-2"></div>
          </div>
        </div>

        {/* Таблиця 3 */}
        <div className="col">
          <div className="row mb-3">
            <div className="col-md-1"></div>
            <div className="col-md-10">
              <h5 className="text-center my-4">
                Для кольорового друку на різних видах паперу та при різній
                заливці*
              </h5>
              <table className="table table-primary table-striped text-center">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      rowSpan={2}
                      style={{ verticalAlign: "middle" }}
                    >
                      Матеріал для друку
                    </th>
                    <th scope="col" colSpan={3}>
                      Ціна при різній заливці, грн
                    </th>
                  </tr>
                  <tr>
                    <th scope="col">25%</th>
                    <th scope="col">50%</th>
                    <th scope="col">100%</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">Звичайний папір</th>
                    <td>7</td>
                    <td>8</td>
                    <td>9</td>
                  </tr>
                  <tr>
                    <th scope="row">Цупкий папір</th>
                    <td>9</td>
                    <td>10</td>
                    <td>11</td>
                  </tr>
                  <tr>
                    <th scope="row">Кольоровий папір</th>
                    <td>9</td>
                    <td>10</td>
                    <td>11</td>
                  </tr>
                  <tr>
                    <th scope="row">Кольоровий картон</th>
                    <td>10</td>
                    <td>11</td>
                    <td>12</td>
                  </tr>
                  <tr>
                    <th scope="row">Самоклейка звичайна</th>
                    <td>12</td>
                    <td>12</td>
                    <td>12</td>
                  </tr>
                  <tr>
                    <th scope="row">Фотопапір тонкий</th>
                    <td>16</td>
                    <td>16</td>
                    <td>16</td>
                  </tr>
                  <tr>
                    <th scope="row">Фотопапір цупкий</th>
                    <td>18</td>
                    <td>18</td>
                    <td>18</td>
                  </tr>
                  <tr>
                    <th scope="row">Фотопапір самоклейка</th>
                    <td>20</td>
                    <td>20</td>
                    <td>20</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="col-md-1"></div>
          </div>
        </div>

        {/* Заливка */}
        <div className="row">
          <div className="col py-4" style={{ background: "#373737" }}>
            <div className="row gx-5 p-4 justify-content-center">
              <h1 className="text-light text-center">Заливка документа</h1>
              <p className="text-light text-center">
                *Що означає "різна заливка"?
              </p>
              {/* Картка 1 */}
              <div className="col-7 col-sm-5 col-md-3 col-lg-2 m-2 p-3 border bg-light rounded ">
                <div className="card">
                  <img
                    src="/images/services/text.jpg"
                    className="card-img-top"
                    alt="Фотопослуги"
                  />
                  <div className="card-body">
                    <h5 className="card-title text-center">
                      Текст
                    </h5>
                    <p className="card-text">
                    Звичайний текст невеликого розміру шрифтів без будь-яких малюнків
                    </p>
                  </div>
                </div>
              </div>

              {/* Картка 2 */}
              <div className="col-7 col-sm-5 col-md-3 col-lg-2 m-2 p-3 border bg-light rounded ">
                <div className="card">
                  <img
                    src="/images/services/25.jpg"
                    className="card-img-top"
                    alt="Комп'ютерні послуги"
                  />
                  <div className="card-body">
                    <h5 className="card-title text-center">Заливка 25%</h5>
                    <p className="card-text">
                    Присутній текст і малюнки, які займають не більше 25% площі сторінки
                    </p>
                  </div>
                </div>
              </div>
              {/* Картка 3 */}
              <div className="col-7 col-sm-5 col-md-3 col-lg-2 m-2 p-3 border bg-light rounded ">
                <div className="card">
                  <img
                    src="/images/services/50.jpg"
                    className="card-img-top"
                    alt="Поліграфія"
                  />
                  <div className="card-body">
                    <h5 className="card-title text-center">Заливка 50%</h5>
                    <p className="card-text">
                    Малюнки, що є в тексті, в сукупності займають не більше 50% площі
                    </p>
                  </div>
                </div>
              </div>
              {/* Картка 4 */}
              <div className="col-7 col-sm-5 col-md-3 col-lg-2 m-2 p-3 border bg-light rounded ">
                <div className="card">
                  <img
                    src="/images/services/50.jpg"
                    className="card-img-top"
                    alt="Поліграфія"
                  />
                  <div className="card-body">
                    <h5 className="card-title text-center">Заливка 100%</h5>
                    <p className="card-text">
                    Документ містить 1 або більше малюнків, які заповнюють весь аркуш
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Xerox;