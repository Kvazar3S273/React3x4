import React, { Component } from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { GetBottles } from "../../../../constants/actions/photoActions/bottle";

const Bottle = () => {

  const dispatch = useDispatch();
  const{listbottles}= useSelector(state => state.bottle);
  useEffect(() => {
          dispatch(GetBottles());           
      }, []);

  return (
    <div className="row mt-3 mb-3">
      <div className="col py-3" style={{ backgroundColor: "#e0e3e5" }}>
        <h1 className="text-center">Етикетки на пляшку</h1>
        <div className="row m-3 p-2">
          <div className="col-md-4">
            <img
              className="photo-service"
              src="/images/services/photo/photoservice5.jpg"
              alt="Етикетки"
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
                  {listbottles &&
                  listbottles.map((item) => (
                    <tr key={item.id}>
                      <td>{item.service}</td>
                      <td>{item.price}</td>
                    </tr>
                  ))}
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
