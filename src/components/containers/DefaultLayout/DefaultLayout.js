import React, { Component, Suspense } from "react";
import Layout from "./Layout";
import { Switch, Route } from "react-router-dom";
import DefaultRoutes from "../../../routes/DefaultRoutes";

class DefaultLayout extends Component {
  render() {
    return (
      <Layout>
        <Suspense fallback={<div>Загрузка...</div>}>
          <Switch>
            {DefaultRoutes.map((route, index) => {
              return route.component ? (
                <Route
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  name={route.name}
                  render={(props) => <route.component {...props} />}
                />
              ) : null;
            })}
          </Switch>
        </Suspense>
      </Layout>
    );
  }
}

export default DefaultLayout;
