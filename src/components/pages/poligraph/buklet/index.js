import React from "react";
import "../other/styles.css";

const Buklet = () => {
  return (
    <div className="row mb-3">
      <div className="col py-3">
        <h1 className="text-center">Буклети</h1>
        
        {/* Прайс */}
        <div className="row">
          <h3 className="text-center text-danger my-4">
            Можливі варіанти складання:
          </h3>
          {/* Таблиця 1 */}
          <div className="col">
            <div className="row">
              <div className="col-md-1"></div>
              <div className="col-md-10">
                <table className="table text-center">
                  <tbody>
                    <tr>
                      <td>
                        <img className="tabsimg" src="/images/services/poligraph/buklet/falz_1.png" />
                        <p>Книжка 1 складання</p>
                      </td>
                      <td>
                        <img className="tabsimg" src="/images/services/poligraph/buklet/falz_2.png" />
                        <p>Намотка 2 складання</p>
                      </td>
                      <td>
                        <img className="tabsimg" src="/images/services/poligraph/buklet/falz_3.png" />
                        <p>Вікно 2 складання</p>
                      </td>
                      <td>
                        <img className="tabsimg" src="/images/services/poligraph/buklet/falz_4.png" />
                        <p>Гармошка 2 складання</p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <img className="tabsimg" src="/images/services/poligraph/buklet/falz_5.png" />
                        <p>Намотка 4 складання</p>
                      </td>
                      <td>
                        <img className="tabsimg" src="/images/services/poligraph/buklet/falz_6.png" />
                        <p>Гармошка 3 складання</p>
                      </td>
                      <td>
                        <img className="tabsimg" src="/images/services/poligraph/buklet/falz_7.png" />
                        <p>Вікно 3 складання</p>
                      </td>
                      <td>
                        <img className="tabsimg" src="/images/services/poligraph/buklet/falz_8.png" />
                        <p>Асиметричний 1 складання</p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <img className="tabsimg" src="/images/services/poligraph/buklet/falz_9.png" />
                        <p>Комбінований 2 складання</p>
                      </td>
                      <td>
                        <img className="tabsimg" src="/images/services/poligraph/buklet/falz_10.png" />
                        <p>Гармошка 4 складання</p>
                      </td>
                      <td>
                        <img className="tabsimg" src="/images/services/poligraph/buklet/falz_11.png" />
                        <p>Гармошка 5 складань</p>
                      </td>
                      <td></td>
                    </tr>
                  </tbody>
                </table>




                
              </div>
              <div className="col-md-1"></div>
            </div>
          </div>
        </div>


      </div>
    </div>
  );
};
export default Buklet;
