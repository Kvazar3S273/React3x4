import React from "react";

const Bloknot = () => {
  return (
    <div className="row mt-3 mb-3">
      <div className="col py-3">
        <h1 className="text-center">Блокноти</h1>

        {/* Таблиця Доступні формати */}
        <div className="row" style={{overflowX:"auto"}}>
          <h3 className="text-center text-danger my-4">Доступні формати:</h3>
          <div className="col">
            <div className="row">
              <div className="col-md-2"></div>
              <div className="col-md-8">
                <table className="table text-center table-striped">
                  <tbody>
                    <tr>
                      <th>Євро</th>
                      <th>A6</th>
                      <th>A5</th>
                      <th>A4</th>
                    </tr>
                    <tr>
                      <td>99x210 мм</td>
                      <td>105x148 мм</td>
                      <td>148x210 мм</td>
                      <td>210x297 мм</td>
                    </tr>
                    <tr>
                      <th>A6 квадрат</th>
                      <th>A5 квадрат</th>
                      <th>A4 квадрат</th>
                      <th></th>
                    </tr>
                    <tr>
                      <td>105x105 мм</td>
                      <td>148x148 мм</td>
                      <td>210x210 мм</td>
                      <td></td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="col-md-2"></div>
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
              Для кожного виду блокнотів є великий перелік опцій, таких як:
              формат, тип паперу для обкладинки, внутрішнього блоку, підложки,
              декілька видів ламінування, різні види пружинки.
              <br />
              Розрахунок ціни на друк блокнотів проводиться після запиту. Для
              узгодження ціни потрібно обговорити параметри блокнота і тоді ми
              розрахуємо для Вас вартість виготовлення даної продукції.
            </p>
          </div>
          <div className="col-md-1"></div>
        </div>

      </div>
    </div>
  );
};
export default Bloknot;
