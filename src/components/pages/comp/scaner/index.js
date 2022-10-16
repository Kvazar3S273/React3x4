import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from "react";
import { GetScans } from "../../../../constants/actions/compActions/scan";

const Scaner = () => {

  const dispatch = useDispatch();
  const { listscans } = useSelector(state => state.scan);
  useEffect(() => {
          dispatch(GetScans());           
      }, []);

  return (
    <div className="row mt-3 mb-3">
      <div className="col py-3" style={{ backgroundColor: "#e0e3e5" }}>
        <h1 className="text-center">Сканування документів</h1>
        <div className="row m-3 p-2">
          <div className="col-md-4">
            <img
              className="photo-service"
              src="/images/services/comp/compscaner.jpg"
              alt="Сканування"
            />
          </div>
          <div className="col-md-8 px-3">
            <p>
              Сканування документів до А4 розміру та збереження в форматах *.jpg 
              або *.pdf. 
            </p>
            <p>
              Додаткова послуга: відправка ваших сканованих документів на електронну 
              пошту. Один лист вміщує до 18 Мб інформації. Якщо об'єм сканованих 
              документів перевищує 18 Мб, то він розбивається на декілька листів. 
            </p>
            <h3 className="text-center text-danger">Вартість сканування</h3>
            <div className="row" style={{overflowX:"auto"}}>
              <table className="table table-striped text-center">
                <thead>
                  <tr>
                    <th scope="col">Послуга</th>
                    <th scope="col">Ціна, грн</th>
                  </tr>
                </thead>
                <tbody>
                {listscans &&
                    listscans.map((item) => (
                      <tr key={item.id}>
                        <td>{item.service}</td>
                        <td> {item.price} </td>
                      </tr>
                    ))}
                </tbody>
            </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Scaner;
