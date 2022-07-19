import React from "react";

const FotoprintEditPrice = () => {
  return (
    <div className="row mt-3 mb-3">
      <div className="col py-3" style={{ backgroundColor: "#e0e3e5" }}>
        <h1 className="text-center">Фотодрук</h1>

        {/* Прайс */}
        <div className="row">
          <div className="col-md-2 "></div>
          <div className="col-md-8">
            <h3 className="text-center text-danger">
                Редагування вартості друку фотографій
            </h3>
            <table className="table table-striped text-center">
              <thead>
                <tr>
                  <th scope="col">Формат</th>
                  <th scope="col">Точні розміри, мм</th>
                  <th scope="col" style={{ background: "#E1A3B3" }}>Ціна, грн</th>
                </tr>
              </thead>
              <tbody>
                
                <tr>
                  <th scope="row">10x15</th>
                  <td>102x152</td>
                  <td style={{ background: "#E1A3B3" }}>5,00</td>
                </tr>
                <tr>
                  <th scope="row">13x18</th>
                  <td>127x178</td>
                  <td style={{ background: "#E1A3B3" }}>10,00</td>
                </tr>
                <tr>
                  <th scope="row">15x21</th>
                  <td>152x216</td>
                  <td style={{ background: "#E1A3B3" }}>11,00</td>
                </tr>
                <tr>
                  <th scope="row">20x30</th>
                  <td>203x305</td>
                  <td style={{ background: "#E1A3B3" }}>21,00</td>
                </tr>
                <tr>
                  <th scope="row">30x40</th>
                  <td>305x420</td>
                  <td style={{ background: "#E1A3B3" }}>42,00</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="col-md-2"></div>
        </div>
        
      </div>
    </div>
  );
};
export default FotoprintEditPrice;
