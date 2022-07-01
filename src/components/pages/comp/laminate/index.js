import React from "react";

const Laminate = () => {
  return (
    <div className="row mt-3 mb-3">
      <div className="col py-3" style={{ backgroundColor: "#e0e3e5" }}>
        <h1 className="text-center">Ламінування документів</h1>
        <div className="row m-3 p-2">
          <div className="col-md-4">
            <img
              className="photo-service"
              src="/images/services/comp/complaminate.jpg"
              alt="Ламінування"
            />
          </div>
          <div className="col-md-8 px-3">
            <p>
            Конвертне ламінування документів від посвідчення розміром як візитна 
            картка до аркушів формату А4. Переламіновуємо старі потрепані посвідчення.
            Ламінація документів надійно захищає їх від пошкоджень і сприяє 
            довготривалому зберіганню. 
            Не ламінуємо пластикові посвідчення, товсті документи (грубші за 0,7 мм) та книжки. 
            </p>
            <h3 className="text-center text-danger">Вартість ламінування</h3>
            <table className="table table-striped text-center">
              <thead>
                <tr>
                  <th scope="col">Формат</th>
                  <th scope="col">Ціна, грн</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">А4, 20х30, свідоцтва</th>
                  <td>20</td>
                </tr>
                <tr>
                  <th scope="row">А4, 125 мкм</th>
                  <td>30</td>
                </tr>
                <tr>
                  <th scope="row">А5, 15х21</th>
                  <td>17</td>
                </tr>
                <tr>
                  <th scope="row">А6, 10х15</th>
                  <td>15</td>
                </tr>
                <tr>
                  <th scope="row">менше за А6</th>
                  <td>12</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Laminate;
