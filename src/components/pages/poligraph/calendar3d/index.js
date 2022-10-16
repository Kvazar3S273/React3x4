import React from "react";

const Calendar3d = () => {
  return (
    <div className="row mt-3 mb-3">
      <div className="col py-3">
        <h1 className="text-center">Об'ємні календарі</h1>

        {/* Таблиця Варіанти календарів */}
        <div className="row" style={{overflowX:"auto"}}>
          <h3 className="text-center text-danger my-4">Варіанти календарів:</h3>
          <div className="col">
            <div className="row">
              <div className="col-md-1"></div>
              <div className="col-md-10">
                <table className="table text-center">
                  <tbody>
                    <tr>
                      <th>Висічні</th>
                      <th>Перекидні настільні</th>
                      <th>Перекидні на люверсі</th>
                      <th>Перекидні на ригелі</th>
                      <th>Квартальні</th>
                    </tr>
                    <tr>
                      <td>
                        <img
                          className="tabsimgkatalog"
                          src="/images/services/poligraph/kalendar/vysichnyj.png"
                        />
                      </td>
                      <td>
                        <img
                          className="tabsimgkatalog"
                          src="/images/services/poligraph/kalendar/nastil_perikidnyj.png"
                        />
                      </td>
                      <td>
                        <img
                          className="tabsimgkatalog"
                          src="/images/services/poligraph/kalendar/liuvers.png"
                        />
                      </td>
                      <td>
                        <img
                          className="tabsimgkatalog"
                          src="/images/services/poligraph/kalendar/rigel.png"
                        />
                      </td>
                      <td>
                        <img
                          className="tabsimgkatalog"
                          src="/images/services/poligraph/kalendar/kvartal.png"
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

        <div className="row">
          <div className="col-md-1"></div>
          <div className="col-md-10">
            <p className="mx-5 mt-4">
              Мінімальний тираж - <b>1 шт</b>
            </p>
            <p className="mx-5">
              Для кожного виду календарів є великий перелік опцій, таких як:
              формат, тип паперу для обкладинки, внутрішнього блоку, підложки,
              розміри рекламного поля, декілька видів ламінування, різні види
              пружинки.
            </p>
            <p className="mx-5">
              Розрахунок ціни на друк календарів проводиться після запиту. Для
              узгодження ціни потрібно обговорити параметри календаря і тоді ми
              розрахуємо для Вас вартість виготовлення даної продукції.
            </p>
          </div>
          <div className="col-md-1"></div>
        </div>

      </div>
    </div>
  );
};
export default Calendar3d;
