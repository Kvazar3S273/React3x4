import React from "react";

const Menu = () => {
  return (
    <div className="row mt-3 mb-3">
      <div className="col py-3">
        <h1 className="text-center">Меню</h1>

        {/* Таблиця Доступні види */}
        <div className="row">
          <h3 className="text-center text-danger my-4">Доступні види:</h3>
          <div className="col">
            <div className="row">
              <div className="col-md-1"></div>
              <div className="col-md-10">
                <table className="table text-center table-striped">
                  <tbody>
                    <tr>
                      <th>У вигляді сета</th>
                      <th>У вигляді листа</th>
                      <th>Книжка 1 складання</th>
                      <th>Асиметричний 1 складання</th>
                      <th>Намотка 2 складання</th>
                      <th>Вікно 2 складання</th>
                    </tr>
                    <tr>
                      <td>
                        <img
                          className="tabsimg"
                          src="/images/services/poligraph/menu/menu1.png"
                        />
                      </td>
                      <td>
                        <img
                          className="tabsimg"
                          src="/images/services/poligraph/menu/menu2.png"
                        />
                      </td>
                      <td>
                        <img
                          className="tabsimg"
                          src="/images/services/poligraph/menu/menu3.png"
                        />
                      </td>
                      <td>
                        <img
                          className="tabsimg"
                          src="/images/services/poligraph/menu/menu4.png"
                        />
                      </td>
                      <td>
                        <img
                          className="tabsimg"
                          src="/images/services/poligraph/menu/menu5.png"
                        />
                      </td>
                      <td>
                        <img
                          className="tabsimg"
                          src="/images/services/poligraph/menu/menu6.png"
                        />
                      </td>
                    </tr>
                    <tr>
                      <th>Гармошка 2 складання</th>
                      <th>Намотка 3 складання</th>
                      <th>Гармошка 3 складання</th>
                      <th>Вікно 3 складання</th>
                      <th>На скобі</th>
                      <th>На пружині</th>
                    </tr>
                    <tr>
                      <td>
                        <img
                          className="tabsimg"
                          src="/images/services/poligraph/menu/menu7.png"
                        />
                      </td>
                      <td>
                        <img
                          className="tabsimg"
                          src="/images/services/poligraph/menu/menu8.png"
                        />
                      </td>
                      <td>
                        <img
                          className="tabsimg"
                          src="/images/services/poligraph/menu/menu9.png"
                        />
                      </td>
                      <td>
                        <img
                          className="tabsimg"
                          src="/images/services/poligraph/menu/menu10.png"
                        />
                      </td>
                      <td>
                        <img
                          className="tabsimg"
                          src="/images/services/poligraph/menu/menu11.png"
                        />
                      </td>
                      <td>
                        <img
                          className="tabsimg"
                          src="/images/services/poligraph/menu/menu12.png"
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="col-md-1"></div>
            </div>
          </div>
        </div>

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
              Мінімальний тираж - <b>10 шт</b>
            </p>
            <p className="mx-5">
              Розрахунок ціни на друк меню проводиться після запиту. Вкажіть
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
export default Menu;
