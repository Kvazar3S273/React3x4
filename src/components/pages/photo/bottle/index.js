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
                      <th scope="col">Формат</th>
                      <th scope="col">Ціна, грн</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">20x30</th>
                      <td>410</td>
                    </tr>
                    <tr>
                      <th scope="row">30x40</th>
                      <td>580</td>
                    </tr>
                    <tr>
                      <th scope="row">40x60</th>
                      <td>770</td>
                    </tr>
                    <tr>
                      <th scope="row">50x70</th>
                      <td>1050</td>
                    </tr>
                    <tr>
                      <th scope="row">60x90</th>
                      <td>1200</td>
                    </tr>
                    <tr>
                      <th scope="row">1 кв.м.</th>
                      <td>1700</td>
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
