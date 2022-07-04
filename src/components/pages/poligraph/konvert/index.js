import React from "react";

const Konvert = () => {
  return (
    <div className="row mt-3 mb-3">
      <div className="col py-3">
        <h1 className="text-center">Конверти</h1>
        <div className="row m-3 p-2">
          <div className="col-md-4">
            <img
              className="photo-service"
              src="/images/services/comp/compdiscprint.jpg"
              alt="Друк на дисках"
            />
          </div>
          <div className="col-md-8 px-3">
            <p>
              Ми здійснюємо друк на дисках струменевими принтерами. 
              Для друку підходять виключно спеціальні диски з білою 
              поверхнею (Printable). Друк не включає в себе розробку 
              макета, проте за додаткову плату ця послуга також може бути надана.  
            </p>
            <h3 className="text-center text-danger">Вартість послуги</h3>
            <table className="table table-striped text-center">
              <thead>
                <tr>
                  <th scope="col">Послуга</th>
                  <th scope="col">Ціна, грн</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Друк на диску</th>
                  <td>40</td>
                </tr>
                <tr>
                  <th scope="row">Розробка макету</th>
                  <td>від 50 грн</td>
                </tr>
                
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Konvert;
