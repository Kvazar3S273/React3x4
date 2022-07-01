import React from "react";
import "react-slideshow-image/dist/styles.css";
// import "../style.css"

const Visitcard = () => {

  return (
    <div className="row mt-3 mb-3">
      <div className="col py-3" style={{ backgroundColor: "#e0e3e5" }}>
        <h1 className="text-center">Візитки</h1>

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

        

    
      </div>
    </div>
  );
};
export default Visitcard;