import React from "react";

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
                      <td>2</td>
                      <td>2</td>
                      <td>2</td>
                      <td>2</td>
                      <td>2</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>2</td>
                      <td>2</td>
                      <td>2</td>
                      <td>2</td>
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
