import React from "react";
import "../other/styles.css";

const Buklet = () => {
  return (
    <div className="row mb-3">
      <div className="col py-3">
        <h1 className="text-center">Буклети</h1>

        {/* Таблиця Варіанти складання */}
        <div className="row" style={{overflowX:"auto"}}>
          <h3 className="text-center text-danger my-4">
            Можливі варіанти складання:
          </h3>
          <div className="col">
            <div className="row">
              <div className="col-md-1"></div>
              <div className="col-md-10">
                <table className="table text-center">
                  <tbody>
                    <tr>
                      <td>
                        <img
                          className="tabsimg"
                          src="/images/services/poligraph/buklet/falz_1.png"
                        />
                        <p>Книжка 1 складання</p>
                      </td>
                      <td>
                        <img
                          className="tabsimg"
                          src="/images/services/poligraph/buklet/falz_8.png"
                        />
                        <p>Асиметричний 1 складання</p>
                      </td>
                      <td>
                        <img
                          className="tabsimg"
                          src="/images/services/poligraph/buklet/falz_2.png"
                        />
                        <p>Намотка 2 складання</p>
                      </td>
                      <td>
                        <img
                          className="tabsimg"
                          src="/images/services/poligraph/buklet/falz_5.png"
                        />
                        <p>Намотка 4 складання</p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <img
                          className="tabsimg"
                          src="/images/services/poligraph/buklet/falz_4.png"
                        />
                        <p>Гармошка 2 складання</p>
                      </td>
                      <td>
                        <img
                          className="tabsimg"
                          src="/images/services/poligraph/buklet/falz_6.png"
                        />
                        <p>Гармошка 3 складання</p>
                      </td>
                      <td>
                        <img
                          className="tabsimg"
                          src="/images/services/poligraph/buklet/falz_10.png"
                        />
                        <p>Гармошка 4 складання</p>
                      </td>
                      <td>
                        <img
                          className="tabsimg"
                          src="/images/services/poligraph/buklet/falz_11.png"
                        />
                        <p>Гармошка 5 складань</p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <img
                          className="tabsimg"
                          src="/images/services/poligraph/buklet/falz_3.png"
                        />
                        <p>Вікно 2 складання</p>
                      </td>
                      <td>
                        <img
                          className="tabsimg"
                          src="/images/services/poligraph/buklet/falz_7.png"
                        />
                        <p>Вікно 3 складання</p>
                      </td>
                      <td>
                        <img
                          className="tabsimg"
                          src="/images/services/poligraph/buklet/falz_9.png"
                        />
                        <p>Комбінований 2 складання</p>
                      </td>
                      <td></td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="col-md-1"></div>
            </div>
          </div>
        </div>

        {/* Таблиця Доступні формати */}
        <div className="row" style={{overflowX:"auto"}}>
          <h3 className="text-center text-danger my-4">Доступні формати:</h3>
          <div className="col">
            <div className="row">
              <div className="col-md-1"></div>
              <div className="col-md-10">
                <table className="table text-center table-striped">
                  <tbody>
                    <tr>
                      <th>Євро</th>
                      <th>Міні</th>
                      <th>A6</th>
                      <th>A5</th>
                      <th>A4</th>
                    </tr>
                    <tr>
                      <td>99x210 мм</td>
                      <td>99x99 мм</td>
                      <td>105x148 мм</td>
                      <td>148x210 мм</td>
                      <td>210x297 мм</td>
                    </tr>
                    <tr>
                      <th>1/2 A6</th>
                      <th>1/2 A5</th>
                      <th>1/2 A4</th>
                      <th>1/2 A3</th>
                      <th></th>
                    </tr>
                    <tr>
                      <td>52x148 мм</td>
                      <td>74x210 мм</td>
                      <td>105x297 мм</td>
                      <td>148x420 мм</td>
                      <td></td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="col-md-1"></div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-1"></div>
          <div className="col-md-10">
            <p className="mx-5 mt-4">
              Мінімальний тираж - <b>25 шт</b>
            </p>
            <p className="mx-5">
              Розрахунок ціни на друк буклетів проводиться після запиту. Вкажіть
              варіант складання, вид матеріалу, формат і необхідність покриття і
              ми розрахуємо для Вас вартість виготовлення даної продукції.
            </p>
          </div>
          <div className="col-md-1"></div>
        </div>
      </div>
    </div>
  );
};
export default Buklet;
