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
            <div className="row">
              <h3 className="text-center">Збільшити ціну на %</h3>
                <div className="col">Збільшити ціну на</div>
              <div className="col">
              <input
                id="percentValue"
                style={{
                  width: "100px",
                  height: "35px",
                  textAlign: "center",
                }}
              />
              %
              </div>
              <div className="col">
              <button 
              type="button" 
              class="btn btn-primary" 
              data-bs-toggle="modal" 
              data-bs-target="#exampleModal">Збільшити</button>
              </div>

                {/* Modal */}
              <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="exampleModalLabel">Попередження</h5>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                      Ви справді плануєте збільшити ціну на ...%?
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Ні</button>
                      <button type="button" class="btn btn-primary">Так, збільшити</button>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Laminate;
