import React from "react";

const Duplicate = () => {
  return (
    <div className="row mt-3 mb-3">
      <div className="col py-3" style={{ backgroundColor: "#e0e3e5" }}>
        <h1 className="text-center">Дублікати фотографій</h1>
        <div className="row m-3 p-2">
          <div className="col-md-4">
            <img
              className="photo-service"
              src="/images/services/photo/photoservice5.jpg"
              alt="Дублікати"
            />
          </div>
          <div className="col-md-8 px-3">
            <p>
              Якщо Ви втратили фотоплівку з негативами або оригінальний файл, 
              з яких було надруковано чудову фотографію, але маєте бажання 
              зробити копії з цієї фотокартки - сучасні технічні можливості 
              дадуть Вам змогу зробити це. При дублюванні фотографій, звичайно, 
              якість їх дещо відрізнятиметься, але, з іншого боку, в деяких 
              випадках це дає змогу зробити знімки навіть гарнішими, застосувавши 
              корекції кольору та чіткості.
            </p>
            <h3 className="text-center text-danger">Ціни на дублікати</h3>
            <table className="table table-striped text-center">
              <thead>
                <tr>
                  <th scope="col">Формат</th>
                  <th scope="col">Ціна за перший</th>
                  <th scope="col">Кожен наступний</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">10х15</th>
                  <td>15,00</td>
                  <td>5,00</td>
                </tr>
                <tr>
                  <th scope="row">13х18</th>
                  <td>20,00</td>
                  <td>10,00</td>
                </tr>
                <tr>
                  <th scope="row">15х21</th>
                  <td>22,00</td>
                  <td>11,00</td>
                </tr>
                <tr>
                  <th scope="row">20х30</th>
                  <td>36,00</td>
                  <td>21,00</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Duplicate;
