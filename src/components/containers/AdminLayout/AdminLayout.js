import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./style.css";
// import logo from "../../../../src/3x4logo.png";
import user from "../../../../src/user.jpg";
import customer1 from "../../../images/adminpanel/customers/customer1.jpg";
import customer2 from "../../../images/adminpanel/customers/customer2.jpg";
import customer3 from "../../../images/adminpanel/customers/customer3.jpg";
import customer4 from "../../../images/adminpanel/customers/customer4.jpg";
import customer5 from "../../../images/adminpanel/customers/customer5.jpg";
import customer6 from "../../../images/adminpanel/customers/customer6.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAd,
  faArrowRightFromBracket,
  faCamera,
  faGear,
  faInfoCircle,
  faMoneyBillTrendUp,
  faSearch,
  faUserCircle,
  faEye,
  faCartPlus,
  faComment,
  faCircleDollarToSlot,
  faBars

} from "@fortawesome/free-solid-svg-icons";

const AdminLayout = () => {
  function toggleMenu() {
    let toggle = document.querySelector(".toggle");
    let navigation = document.querySelector(".navigation");
    let main = document.querySelector(".main");
    toggle.classList.toggle("active");
    navigation.classList.toggle("active");
    main.classList.toggle("active");
  }
  return (
    <>
      <main>
        {<Outlet />}
        <div className="adminContainer">
          <div className="navigation">
            <ul>
              <li>
                <a>
                  {/* <img className="logo" src={logo} alt="logo"/> */}
                  <span className="icon">
                    <i style={{ color: "#03a9f4", fontSize: "35px" }}>
                      <FontAwesomeIcon icon={faCamera} />
                    </i>
                  </span>
                  <span
                    className="title"
                    style={{ color: "#03a9f4", fontSize: "20px" }}
                  >
                    3х4 Фотокопіцентр
                  </span>
                </a>
              </li>
              <li>
                <a>
                  <Link className="navLink" aria-current="page" to="#">
                    <span className="icon">
                      <i>
                        <FontAwesomeIcon icon={faGear} />
                      </i>
                    </span>
                    <span className="title">Панель керування</span>
                  </Link>
                </a>
              </li>
              <li>
                <a>
                  <Link className="navLink" aria-current="page" to="#">
                    <span className="icon">
                      <i>
                        <FontAwesomeIcon icon={faUserCircle} />
                      </i>
                    </span>
                    <span className="title">Користувачі</span>
                  </Link>
                </a>
              </li>
              <li>
                <a>
                  <Link className="navLink" aria-current="page" to="#">
                    <span className="icon">
                      <i>
                        <FontAwesomeIcon icon={faMoneyBillTrendUp} />
                      </i>
                    </span>
                    <span className="title">Управління цінами</span>
                  </Link>
                </a>
              </li>
              <li>
                <a>
                  <Link className="navLink" aria-current="page" to="#">
                    <span className="icon">
                      <i>
                        <FontAwesomeIcon icon={faAd} />
                      </i>
                    </span>
                    <span className="title">Управління рекламою</span>
                  </Link>
                </a>
              </li>
              <li>
                <a>
                  <Link className="navLink" aria-current="page" to="#">
                    <span className="icon">
                      <i>
                        <FontAwesomeIcon icon={faInfoCircle} />
                      </i>
                    </span>
                    <span className="title">Зміна інформації</span>
                  </Link>
                </a>
              </li>
              <li>
                <a>
                  <Link className="navLink" aria-current="page" to="#">
                    <span className="icon">
                      <i>
                        <FontAwesomeIcon icon={faArrowRightFromBracket} />
                      </i>
                    </span>
                    <span className="title">Вихід</span>
                  </Link>
                </a>
              </li>
            </ul>
          </div>

          <div className="main">
            <div className="topbar">
              <div className="toggle" onClick={toggleMenu}>
                <label>
                  <i>
                    <FontAwesomeIcon icon={faBars} />
                  </i>
                </label>
              </div>
              <div className="search">
                <label>
                  <input type="text" placeholder="Search here" />
                  <i>
                    <FontAwesomeIcon icon={faSearch} />
                  </i>
                </label>
              </div>
              <div className="user">
                <img src={user} alt="user" />
              </div>
            </div>

            <div className="cardBox">
              <div className="card">
                <div className="row">
                  <div className="col-9">
                    <div className="numbers">1,042</div>
                    <div className="cardName">Daily Views</div>
                  </div>
                  <div className="col-3 iconBox">
                    <i>
                      <FontAwesomeIcon icon={faEye} />
                    </i>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="row">
                  <div className="col-9">
                    <div className="numbers">80</div>
                    <div className="cardName">Sales</div>
                  </div>
                  <div className="col-3 iconBox">
                    <i>
                      <FontAwesomeIcon icon={faCartPlus} />
                    </i>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="row">
                  <div className="col-9">
                    <div className="numbers">208</div>
                    <div className="cardName">Comments</div>
                  </div>
                  <div className="col-3 iconBox">
                    <i>
                      <FontAwesomeIcon icon={faComment} />
                    </i>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="row">
                  <div className="col-9">
                    <div className="numbers">$6,042</div>
                    <div className="cardName">Earning</div>
                  </div>
                  <div className="col-3 iconBox">
                    <i>
                      <FontAwesomeIcon icon={faCircleDollarToSlot} />
                    </i>
                  </div>
                </div>
              </div>
            </div>

            <div className="details">
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
                        <span className="status inprogress">
                          Очікує відправки
                        </span>
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
                        <span className="status inprogress">
                          Очікує відправки
                        </span>
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
              
              <div className="recentCustomers">
                <div className="cardHeader">
                  <h2>Recent Customers</h2>
                </div>
                <table>
                  <tbody>
                    <tr>
                      <td width={"60px"}><div className="imgBx"><img src={customer1}/></div></td>
                      <td><h4>Орест<br/><span>Коломия</span></h4></td>
                    </tr>
                    <tr>
                      <td width={"60px"}><div className="imgBx"><img src={customer2}/></div></td>
                      <td><h4>Васілій<br/><span>Бахмут</span></h4></td>
                    </tr>
                    <tr>
                      <td width={"60px"}><div className="imgBx"><img src={customer3}/></div></td>
                      <td><h4>Пилип<br/><span>Черкаси</span></h4></td>
                    </tr>
                    <tr>
                      <td width={"60px"}><div className="imgBx"><img src={customer4}/></div></td>
                      <td><h4>Параска<br/><span>Надвірна</span></h4></td>
                    </tr>
                    <tr>
                      <td width={"60px"}><div className="imgBx"><img src={customer5}/></div></td>
                      <td><h4>Лев<br/><span>Стрий</span></h4></td>
                    </tr>
                    <tr>
                      <td width={"60px"}><div className="imgBx"><img src={customer6}/></div></td>
                      <td><h4>Гіван<br/><span>Сарни</span></h4></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default AdminLayout;
