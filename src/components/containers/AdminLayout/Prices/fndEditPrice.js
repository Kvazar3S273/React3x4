import React from "react";
import { useEffect,useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { GetFnds } from "../../../../constants/actions/photoActions/fnd";

const FndEditPrice = () => {

  const dispatch = useDispatch();
  const{listfnds}= useSelector(state => state.fnd);
  useEffect(() => {
          dispatch(GetFnds());           
      }, []);

  return (
    <div className="row mt-3 mb-3">
      <div className="col py-3" style={{ backgroundColor: "#e0e3e5" }}>
        <h1 className="text-center">Фото на документи</h1>

        {/* Прайс */}
        <div className="row">
          <div className="col-md-1 "></div>
          <div className="col-md-10">
            <h4 className="text-center text-danger">
              Редагування вартості фотографій на документи
            </h4>
            <table className="table table-striped text-center">
              <thead>
                <tr>
                  <th scope="col">Документ</th>
                  <th scope="col">К-сть</th>
                  <th scope="col" style={{ background: "#E1A3B3" }}>
                    Ціна, грн
                  </th>
                  <th scope="col" style={{ background: "#E8BAC6" }}>Архів, грн</th>
                  <th scope="col">Редагування</th>
                </tr>
              </thead>
              <tbody>
                
              {listfnds && listfnds.map((item) =>
                            <tr key={item.id}>
                                <td>
                                   {item.title}
                                </td>
                                <td>{item.qty}</td>
                                <td style={{ background: "#E1A3B3" }}>
                                  <input 
                                  id={item.id} 
                                  value={item.price}
                                  style={{width:"60px", 
                                  height:"40px", 
                                  textAlign:"center", 
                                  borderRadius: "7px"}}/>
                                </td>
                                <td style={{ background: "#E8BAC6" }}>
                                  <input 
                                  id={item.id} 
                                  value={item.archivePice}
                                  style={{width:"60px", 
                                  height:"40px", 
                                  textAlign:"center", 
                                  borderRadius: "7px"}}/>
                                </td>
                                {/* <td style={{ background: "#E1A3B3" }}> {item.price} </td>                        */}
                                {/* <td style={{ background: "#E8BAC6" }}> {item.archivePice} </td>  */}
                                <td> 
                                  <button 
                                  className="btn btn-primary" 
                                  style={{width:"60px", height:"40px"}}>
                                    Save
                                  </button> </td> 
                            </tr>)}
                
                {/* <tr>
                  <th scope="row">
                    Паспорт
                    <br />
                    Посвідчення водія
                    <br />
                    Медична довідка
                    <br />
                    Фото абітурієнта
                    <br />
                    Інші посвідчення
                  </th>
                  <td>2</td>
                  <td style={{ background: "#E1A3B3" }}>60</td>
                  <td style={{ background: "#E8BAC6" }}>40</td>
                </tr>
                <tr>
                  <th scope="row">
                    Пенсійне посвідчення
                    <br />
                    Фото 4х6
                  </th>
                  <td>2</td>
                  <td style={{ background: "#E1A3B3" }}>60</td>
                  <td style={{ background: "#E8BAC6" }}>40</td>
                </tr>
                <tr>
                  <th scope="row">Учнівський квиток</th>
                  <td>2</td>
                  <td style={{ background: "#E1A3B3" }}>55</td>
                  <td style={{ background: "#E8BAC6" }}>35</td>
                </tr>
                <tr>
                  <th scope="row">
                    Віза
                    <br />
                    Дитячий проїзний за кордон
                    <br />
                    Посвідка на ПМП
                  </th>
                  <td>2</td>
                  <td style={{ background: "#E1A3B3" }}>70</td>
                  <td style={{ background: "#E8BAC6" }}>48</td>
                </tr>
                <tr>
                  <th scope="row">
                    Віза США
                    <br />
                    Грін карта
                  </th>
                  <td>1</td>
                  <td style={{ background: "#E1A3B3" }}>80</td>
                  <td style={{ background: "#E8BAC6" }}>56</td>
                </tr>
                <tr>
                  <th scope="row">
                    Спеціальний формат
                    <br />
                    9х12, 9х13, 10х15
                  </th>
                  <td>1</td>
                  <td style={{ background: "#E1A3B3" }}>60</td>
                  <td style={{ background: "#E8BAC6" }}>40</td>
                </tr> */}
              </tbody>
            </table>
          </div>
          <div className="col-md-1"></div>
        </div>
        
      </div>
    </div>
  );
};
export default FndEditPrice;
