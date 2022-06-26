import React, { Component } from "react";

const Bottle = () => {
  return (
    <div className="row mt-3 mb-3">
      <div className="col py-3" style={{ backgroundColor: "#e0e3e5" }}>
        <h1 className="text-center">Етикетки на пляшку</h1>
        <div className="row m-3 p-2">
          <div className="col-md-4">
            <img
              className="photo-service"
              src="/images/services/photoservice5.jpg"
            />
          </div>
          <div className="col-md-8 px-3">
            <p>
            Хай не залишаться байдужими всі гості на святкуванні весілля або ювілею, 
            побачивши ваш оригінальний подарунок – пляшку з етикеткою, на якій буде 
            нанесено фотографію винуватців свята – молодят або ювіляра. Етикетка 
            друкується на фотопапері з клейкою основою. 
            </p>
            <div className="row">
              <div className="col-md-2"></div>
              <div className="col-md-8">
                <h3 className="text-center text-danger">Вартість виготовлення етикеток</h3>
                <table className="table table-striped text-center">
                  <thead>
                    <tr>
                      <th scope="col">Послуга</th>
                      <th scope="col">Ціна, грн</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">Етикетка по шаблону</th>
                      <td>150</td>
                    </tr>
                    <tr>
                      <th scope="row">Індивідуальний дизайн	</th>
                      <td>250</td>
                    </tr>
                    <tr>
                      <th scope="row">Кожна наступна	</th>
                      <td>40</td>
                    </tr>
                    <tr>
                      <th scope="row">Поклейка на пляшку	</th>
                      <td>40</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="col-md-2"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Bottle;
