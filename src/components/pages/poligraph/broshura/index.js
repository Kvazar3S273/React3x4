import React from "react";
import "../other/styles.css";

const Broshura = () => {
  return (
    <div className="row mt-3 mb-3">
      <div className="col py-3">
        <h1 className="text-center">Брошури і каталоги</h1>

        {/* Таблиця Доступні формати */}
        <div className="row">
          <h3 className="text-center text-danger my-4">
          Доступні формати:
          </h3>
          <div className="col">
            <div className="row">
              <div className="col-md-1"></div>
              <div className="col-md-10">
                <table className="table text-center table-striped">
                  <tbody>
                    <tr>
                      <th>Євро</th>
                      <th>A6</th>
                      <th>A5</th>
                      <th>A4</th>
                      <th>1/2 A6</th>
                      <th>1/2 A5</th>
                    </tr>
                    <tr>
                      <td>99x210 мм</td>
                      <td>105x148 мм</td>
                      <td>148x210 мм</td>
                      <td>210x297 мм</td>
                      <td>52x148 мм</td>
                      <td>74x210 мм</td>
                    </tr>
                    <tr>
                      <th>1/2 A4</th>
                      <th>1/2 A3</th>
                      <th>A6 квадрат</th>
                      <th>A5 квадрат</th>
                      <th>A4 квадрат</th>
                      <th></th>
                    </tr>
                    <tr>
                      <td>105x297 мм</td>
                      <td>148x420 мм</td>
                      <td>105x105 мм</td>
                      <td>148x148 мм</td>
                      <td>210x210 мм</td>
                      <td></td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="col-md-1"></div>
            </div>
          </div>
        </div>

        {/* Таблиця Можливі варіанти зшивання */}
        <div className="row">
          <h3 className="text-center text-danger my-4">
          Можливі варіанти зшивання:
          </h3>
          <div className="col">
            <div className="row">
              <div className="col-md-1"></div>
              <div className="col-md-10">
                
              <table className="table text-center">
                  <tbody>
                    <tr>
                      <th>Скоба</th>
                      <th>Пружина</th>
                      <th>Клей</th>
                    </tr>
                    <tr>
                      <td>
                        <img className="tabsimgkatalog" src="/images/services/poligraph/katalog/skoba.png" />
                      </td>
                      <td>
                        <img className="tabsimgkatalog" src="/images/services/poligraph/katalog/prujina.png" />
                      </td>
                      <td>
                        <img className="tabsimgkatalog" src="/images/services/poligraph/katalog/glue.png" />
                      </td>
                    </tr>
                    <tr>
                      <td>8-64 стор.</td>
                      <td>4-524 стор.</td>
                      <td>30-608 стор.</td>
                    </tr>
                    
                  </tbody>
                </table>
              

              </div>
              <div className="col-md-1"></div>
            </div>
          </div>
        </div>


        <p className="mx-5 mt-4">
          Мінімальний тираж - <b>1 шт</b>
        </p>
        <p className="mx-5">
          Розрахунок ціни на друк брошур і каталогів проводиться після запиту. 
          Для узгодження ціни потрібно обговорити параметри брошури і тоді 
          ми розрахуємо для Вас вартість виготовлення даної продукції.
        </p>

      </div>
    </div>
  );
};
export default Broshura;
