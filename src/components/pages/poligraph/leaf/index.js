import React from "react";

const Leaf = () => {
  return (
    <div className="row mt-3 mb-3">
      <div className="col py-3">
        <h1 className="text-center">Блоки для запису</h1>

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
                      <th>Квадрат 1</th>
                      <th>Квадрат 2</th>
                      <th>Євро</th>
                      <th>A6</th>
                      <th>A5</th>
                      <th>A4</th>
                    </tr>
                    <tr>
                      <td>90x90 мм</td>
                      <td>99x99 мм</td>
                      <td>99x210 мм</td>
                      <td>105x148 мм</td>
                      <td>148x210 мм</td>
                      <td>210x297 мм</td>
                    </tr>
                    <tr>
                      <th>A3</th>
                      <th>1/2 A6</th>
                      <th>1/2 A5</th>
                      <th>1/2 A4</th>
                      <th>1/2 A3</th>
                      <th></th>
                    </tr>
                    <tr>
                      <td>297x420 мм</td>
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

        {/* Таблиця Доступні матеріали */}
        <div className="row">
          <h3 className="text-center text-danger my-4">Доступні матеріали:</h3>
          <div className="col">
            <div className="row">
              <div className="col-md-1"></div>
              <div className="col-md-10">
                <table className="table text-center">
                  <tbody>
                    <tr>
                      <th rowSpan={2} style={{ verticalAlign: "middle" }}>
                        Крейда, г/м.кв.{" "}
                      </th>
                      <td>90</td>
                      <td>115</td>
                      <td>130</td>
                      <td>150</td>
                      <td>170</td>
                    </tr>
                    <tr>
                      <td>200</td>
                      <td>250</td>
                      <td>300</td>
                      <td>350</td>
                      <td>450</td>
                    </tr>
                    <tr>
                      <th rowSpan={2} style={{ verticalAlign: "middle" }}>
                        Покриття
                      </th>
                      <td>відсутнє</td>
                      <td>Гл лам 1+0</td>
                      <td>Гл лам 1+1</td>
                      <td>Мат лам 1+0</td>
                      <td>Мат лам 1+1</td>
                    </tr>
                    <tr>
                      <td>Soft лам 1+0</td>
                      <td>Soft лам 1+1 </td>
                      <td>УФ лак 1+0</td>
                      <td>Гібрид 1+0</td>
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
              Мінімальний тираж - <b>100 шт</b>
            </p>
            <p className="mx-5">
              Розрахунок ціни на друк листівок для запису проводиться після
              запиту. Вкажіть щільність паперу, формат і необхідність покриття і
              ми розрахуємо для Вас вартість виготовлення даної продукції.
            </p>
          </div>
          <div className="col-md-1"></div>
        </div>
        
      </div>
    </div>
  );
};
export default Leaf;
