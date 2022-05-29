import React, { Component } from "react";
import { Outlet } from 'react-router-dom';
// import Layout from "./Layout";
import Header from "../../navbar";
// import { Switch, Route } from "react-router-dom";
// import DefaultRoutes from "../../../routes/DefaultRoutes";

const DefaultLayout = () => {
    return (
      <>
      <Header />
          <div className="container">
              {<Outlet/>}
          </div>
    </>
    );
}

export default DefaultLayout;
