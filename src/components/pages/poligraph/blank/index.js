import React from "react";

const Blank = () => {
  return (
    <div className="row mt-3 mb-3">
      <div className="col py-3">
        <h1 className="text-center">Бланки</h1>

        {/* Таблиця Доступні формати */}
        <div className="row" style={{overflowX:"auto"}}>
          <h3 className="text-center text-danger my-4">Доступні формати:</h3>
          <div className="col">
            <div className="row">
              <div className="col-md-3"></div>
              <div className="col-md-6">
                <table className="table text-center table-striped">
                  <tbody>
                    <tr>
                      <th>A4</th>
                      <th>A3</th>
                    </tr>
                    <tr>
                      <td>210x297 мм</td>
                      <td>297x420 мм</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="col-md-3"></div>
            </div>
          </div>
        </div>

        {/* Таблиця Доступні матеріали */}
        <div className="row" style={{overflowX:"auto"}}>
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
                      <td>Офсет 80</td>
                      <td></td>
                      <td></td>
                      <td></td>
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
              Розрахунок ціни на друк бланків проводиться після запиту. Вкажіть
              формат, вид матеріалу, необхідність покриття і ми розрахуємо для
              Вас вартість виготовлення даної продукції.
            </p>
          </div>
          <div className="col-md-1"></div>
        </div>

      </div>
    </div>
  );
};
export default Blank;
