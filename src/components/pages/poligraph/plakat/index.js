import React from "react";

const Plakat = () => {
  return (
    <div className="row mt-3 mb-3">
      <div className="col py-3">
        <h1 className="text-center">Плакати</h1>

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
                      <th>A3</th>
                      <th>A2</th>
                      <th>A1</th>
                      <th>B3</th>
                      <th>B2</th>
                      <th>B1</th>
                    </tr>
                    <tr>
                      <td>420x297 мм</td>
                      <td>594x420 мм</td>
                      <td>841x594 мм</td>
                      <td>490x340 мм</td>
                      <td>690x480 мм</td>
                      <td>980x680 мм</td>
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
              Розрахунок ціни на друк плакатів проводиться після запиту. Вкажіть
              формат, вид матеріалу і ми розрахуємо для Вас вартість
              виготовлення даної продукції.
            </p>
          </div>
          <div className="col-md-1"></div>
        </div>

      </div>
    </div>
  );
};
export default Plakat;
