import React, { Component, Suspense } from "react";
import Layout from "./Layout";
import { Switch, Route } from "react-router-dom";
import AdminRoutes from "../../../routes/AdminRoutes";

const AdminLayout = () => {
    return (
      <Layout>
        <Suspense fallback={<div>Загрузка...</div>}>
          <Switch>
            {AdminRoutes.map((route, index) => {
              return route.component ? (
                <Route
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  name={route.name}
                  render={props => <route.component {...props} />}
                />
              ) : null;
            })}
          </Switch>
        </Suspense>
      </Layout>
    );
}

export default AdminLayout;
