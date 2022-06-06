import React from "react";
import "./style.css";
import customer1 from "../../../images/adminpanel/customers/customer1.jpg";
import customer2 from "../../../images/adminpanel/customers/customer2.jpg";
import customer3 from "../../../images/adminpanel/customers/customer3.jpg";
import customer4 from "../../../images/adminpanel/customers/customer4.jpg";
import customer5 from "../../../images/adminpanel/customers/customer5.jpg";
import customer6 from "../../../images/adminpanel/customers/customer6.jpg";

const RecentCustomers = () => {
  return (
    <div className="recentCustomers">
      <div className="cardHeader">
        <h2>Recent Customers</h2>
      </div>
      <table>
        <tbody>
          <tr>
            <td width={"60px"}>
              <div className="imgBx">
                <img src={customer1} />
              </div>
            </td>
            <td>
              <h4>
                Орест
                <br />
                <span>Коломия</span>
              </h4>
            </td>
          </tr>
          <tr>
            <td width={"60px"}>
              <div className="imgBx">
                <img src={customer2} />
              </div>
            </td>
            <td>
              <h4>
                Васілій
                <br />
                <span>Бахмут</span>
              </h4>
            </td>
          </tr>
          <tr>
            <td width={"60px"}>
              <div className="imgBx">
                <img src={customer3} />
              </div>
            </td>
            <td>
              <h4>
                Пилип
                <br />
                <span>Черкаси</span>
              </h4>
            </td>
          </tr>
          <tr>
            <td width={"60px"}>
              <div className="imgBx">
                <img src={customer4} />
              </div>
            </td>
            <td>
              <h4>
                Параска
                <br />
                <span>Надвірна</span>
              </h4>
            </td>
          </tr>
          <tr>
            <td width={"60px"}>
              <div className="imgBx">
                <img src={customer5} />
              </div>
            </td>
            <td>
              <h4>
                Лев
                <br />
                <span>Стрий</span>
              </h4>
            </td>
          </tr>
          <tr>
            <td width={"60px"}>
              <div className="imgBx">
                <img src={customer6} />
              </div>
            </td>
            <td>
              <h4>
                Гіван
                <br />
                <span>Сарни</span>
              </h4>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default RecentCustomers;
