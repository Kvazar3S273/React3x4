import "./App.css";
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Navbar from "./components/navbar";
import RegisterPage from "./components/auth/register";
import LoginPage from "./components/auth/login";
import ContactsPage from "./components/pages/contacts";
import PoligraphPage from "./components/pages/poligraph";
import CompPage from "./components/pages/comp";
import PhotoPage from "./components/pages/photo";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Navbar />
        {/* <div className="container"> */}
          <Switch>
            <Route exact path="/login">
              <LoginPage />
            </Route>

            <Route exact path="/register">
              <RegisterPage />
            </Route>

            <Route exact path="/photo">
              <PhotoPage />
            </Route>

            <Route exact path="/comp">
              <CompPage />
            </Route>

            <Route exact path="/poligraph">
              <PoligraphPage />
            </Route>

            <Route exact path="/contacts">
              <ContactsPage />
            </Route>

                        
          </Switch>
        {/* </div> */}
      </Router>
    );
  }
}

export default App;
