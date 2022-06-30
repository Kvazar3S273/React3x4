import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import AdminLayout from "./components/containers/AdminLayout/AdminLayout";
import DefaultLayout from "./components/containers/DefaultLayout/DefaultLayout";
import HomePage from "./components/pages/home";
import PhotoPage from "./components/pages/photo";
import CompPage from "./components/pages/comp";
import PoligraphPage from "./components/pages/poligraph";
import ContactsPage from "./components/pages/contacts";
import LoginPage from "./components/auth/login";
import RegisterPage from "./components/auth/register";
import Page404 from "./components/pages/page404";

const App = () => {
  // const { isAuth, username } = useSelector((redux) => redux.auth);
  return (
    <>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route index element={<HomePage />} />

          <Route exact path="/login" element={<LoginPage />} />
          <Route exact path="/register" element={<RegisterPage />} />
          <Route exact path="/photo" element={<PhotoPage />} />
          <Route exact path="/comp" element={<CompPage />} />
          <Route exact path="/poligraph" element={<PoligraphPage />} />
          <Route exact path="/contacts" element={<ContactsPage />} />
          <Route exact path="/page404" element={<Page404 />} />
        </Route>

        <Route path="/admin" element={<AdminLayout />}>
        </Route>

      </Routes>
    </>
  );
};

export default App;
