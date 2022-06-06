import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const RecentOrders = () => {
  return (
    <div className="recentOrders">
      <div className="cardHeader">
        <h2>Recent Orders</h2>
        <a>
          {" "}
          <Link className="btn" aria-current="page" to="#">
            View All
          </Link>{" "}
        </a>
      </div>
      <table>
        <thead>
          <tr>
            <td>Назва</td>
            <td>Ціна</td>
            <td>Оплата</td>
            <td>Статус</td>
          </tr>
        </thead>
        <thead>
          <tr>
            <td>Телефон</td>
            <td>$250</td>
            <td>Оплачено</td>
            <td>
              <span className="status delivered">Доставляється</span>
            </td>
          </tr>
          <tr>
            <td>Годинник</td>
            <td>$150</td>
            <td>Очікує оплати</td>
            <td>
              <span className="status return">Повернення</span>
            </td>
          </tr>
          <tr>
            <td>Самокат</td>
            <td>$450</td>
            <td>Оплачено</td>
            <td>
              <span className="status inprogress">Очікує відправки</span>
            </td>
          </tr>
          <tr>
            <td>Навушники</td>
            <td>$70</td>
            <td>Оплачено</td>
            <td>
              <span className="status delivered">Доставлено</span>
            </td>
          </tr>
          <tr>
            <td>Телефон</td>
            <td>$250</td>
            <td>Оплачено</td>
            <td>
              <span className="status pending">Доставляється</span>
            </td>
          </tr>
          <tr>
            <td>Годинник</td>
            <td>$150</td>
            <td>Очікує оплати</td>
            <td>
              <span className="status return">Повернення</span>
            </td>
          </tr>
          <tr>
            <td>Самокат</td>
            <td>$450</td>
            <td>Оплачено</td>
            <td>
              <span className="status inprogress">Очікує відправки</span>
            </td>
          </tr>
          <tr>
            <td>Навушники</td>
            <td>$70</td>
            <td>Оплачено</td>
            <td>
              <span className="status delivered">Доставлено</span>
            </td>
          </tr>
        </thead>
      </table>
    </div>
  );
};
export default RecentOrders;
