import React from "react";
import { Outlet, Link } from "react-router-dom";
import "./style.css";
// import logo from "../../../../src/3x4logo.png";

import Navigation from "./Navigation";
import Topbar from "./Topbar";
import RecentOrders from "./RecentOrders";
import RecentCustomers from "./RecentCustomers";
import Cardbox from "./Cardbox";
import MainPage from "./MainPage";

const AdminLayout = () => {
  return (
    <>
      <main>
        {<Outlet />}
        <div className="adminContainer">
          <Navigation />
          <div className="main">
            <Topbar />

            <MainPage />


            {/* <Cardbox /> */}
            {/* <div className="details">
              <RecentOrders />
              <RecentCustomers />
            </div> */}
          </div>
        </div>
      </main>
    </>
  );
};

export default AdminLayout;
