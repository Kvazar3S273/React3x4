import React from "react";
import { Outlet } from "react-router-dom";
import "./style.css";
import Navigation from "./Navigation";
import Topbar from "./Topbar";
import MainPanel from "./MainPanel";

const AdminLayout = () => {
  return (
    <>
      <main>
        {<Outlet />}
        <div className="adminContainer">
          <Navigation />

          <div className="main">
            <Topbar />
            <MainPanel/>
          </div>
        </div>
      </main>
    </>
  );
};

export default AdminLayout;
