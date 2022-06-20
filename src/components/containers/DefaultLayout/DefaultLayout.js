import React, { Component } from "react";
import { Outlet } from 'react-router-dom';
import Footer from "../../footer/footer";
// import Layout from "./Layout";
import Header from "../../navbar";
// import { Switch, Route } from "react-router-dom";
// import DefaultRoutes from "../../../routes/DefaultRoutes";

const DefaultLayout = () => {
    return (
      <>
      <Header />
      <main>
          {/* <div className="container"> */}
              {<Outlet/>}
          {/* </div> */}
      </main>
      <Footer/>
    </>
    );
}

export default DefaultLayout;
