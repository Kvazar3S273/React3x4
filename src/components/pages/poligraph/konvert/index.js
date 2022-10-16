import React from "react";
import "../other/styles.css";

const Konvert = () => {
  return (
    <div className="row mt-3 mb-3">
      <div className="col py-3">
        <h1 className="text-center">Конверти</h1>

        {/* Таблиця Доступні формати */}
        <div className="row">
          <h3 className="text-center text-danger my-4">Доступні формати:</h3>
          <div className="col">
            <div className="row">
              <div className="col-md-1"></div>
              <div className="col-md-10">
                <table className="table text-center table-striped">
                  <tbody>
                    <tr>
                      <th>Євро</th>
                      <th>С6</th>
                      <th>С5</th>
                      <th>С4</th>
                    </tr>
                    <tr>
                      <td>
                        <img
                          className="tabsimg"
                          src="/images/services/poligraph/konvert/euro.png"
                        />
                      </td>
                      <td>
                        <img
                          className="tabsimg"
                          src="/images/services/poligraph/konvert/c6.png"
                        />
                      </td>
                      <td>
                        <img
                          className="tabsimg"
                          src="/images/services/poligraph/konvert/c5.png"
                        />
                      </td>
                      <td>
                        <img
                          className="tabsimg"
                          src="/images/services/poligraph/konvert/c4.png"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>220x110 мм</td>
                      <td>162x114 мм</td>
                      <td>229x162 мм</td>
                      <td>324x229 мм</td>
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
              Розрахунок ціни на друк конвертів проводиться після запиту.
              Вкажіть формат і необхідну кількість і ми розрахуємо для Вас
              вартість виготовлення даної продукції.
            </p>
          </div>
          <div className="col-md-1"></div>
        </div>
        
      </div>
    </div>
  );
};
export default Konvert;
