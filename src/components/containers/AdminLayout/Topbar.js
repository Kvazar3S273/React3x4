import React from "react";
import "./style.css";
import user from "../../../../src/user.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Topbar = () => {
  function toggleMenu() {
    let toggle = document.querySelector(".toggle");
    let navigation = document.querySelector(".navigation");
    let main = document.querySelector(".main");
    toggle.classList.toggle("active");
    navigation.classList.toggle("active");
    main.classList.toggle("active");
  }
  return (
    <div className="topbar">
      <div className="toggle" onClick={toggleMenu}>
        <label>
          <i>
            <FontAwesomeIcon icon={faBars} />
          </i>
        </label>
      </div>
      {/* <div className="search">
                <label>
                  <input type="text" placeholder="Search here" />
                  <i>
                    <FontAwesomeIcon icon={faSearch} />
                  </i>
                </label>
              </div> */}
      <div className="user">
        <img src={user} alt="user" />
      </div>
    </div>
  );
};
export default Topbar;
