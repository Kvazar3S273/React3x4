import React from "react";

const Binder = () => {
  return (
    <div className="row mt-3 mb-3">
      <div className="col py-3" style={{ backgroundColor: "#e0e3e5" }}>
        <h1 className="text-center">Брошурування</h1>
        <div className="row m-3 p-2">
          <div className="col-md-4">
            <img
              className="photo-service"
              src="/images/services/comp/compbinder.jpg"
              alt="Брошурування"
            />
          </div>
          <div className="col-md-8 px-3">
            <p>
              Брошурування - це зшивання рефератів, курсових, звітів та інших 
              документів на пластикову пружину з додаванням спереду прозорої, 
              а ззаду - цупкої кольорової обкладинки*. Таке зшивання дозволяє 
              потім додати або забрати будь-яку кількість сторінок при потребі.  
            </p>
            <h3 className="text-center text-danger">Вартість брошурування</h3>
            <table className="table table-striped text-center">
              <thead>
                <tr>
                  <th scope="col">Кількість сторінок**</th>
                  <th scope="col">Ціна, грн</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">до 20</th>
                  <td>30</td>
                </tr>
                <tr>
                  <th scope="row">21-40</th>
                  <td>35</td>
                </tr>
                <tr>
                  <th scope="row">41-60</th>
                  <td>40</td>
                </tr>
                <tr>
                  <th scope="row">61-80</th>
                  <td>45</td>
                </tr>
                <tr>
                  <th scope="row">кожних +20 сторінок</th>
                  <td>+5</td>
                </tr>
                <tr>
                  <th scope="row">додавання сторінок</th>
                  <td>від 8 грн (10 шт)</td>
                </tr>
              </tbody>
            </table>
            <p>
              * ціна враховує зшивання зі стандартними обкладинками, 
              ціна за зшивку інших варіантів розраховується окремо
            </p>
            <p>
              ** ціни вказані для звичайного офісного паперу 80 г/м.кв.,
              для цупкого паперу кількість множиться на 2 
              </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Binder;
