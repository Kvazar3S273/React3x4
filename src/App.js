import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./components/pages/home";
import PhotoPage from "./components/pages/photo";
import CompPage from "./components/pages/comp";
import ContactsPage from "./components/pages/contacts";
import RegisterPage from "./components/auth/register";
import LoginPage from "./components/auth/login";
import DefaultLayout from "./components/containers/DefaultLayout/DefaultLayout";
import AdminLayout from "./components/containers/AdminLayout/AdminLayout";

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

          {/* <Route exact path="/photo/fnd">
                 <FNDPage />
               </Route>

               <Route exact path="/photo/photobooks">
                 <PhotobooksPage />
               </Route>

               <Route exact path="/photo/photoprint">
                 <PhotoprintPage />
               </Route>

               <Route exact path="/photo/scan">
                 <ScanPage />
               </Route> */}

          <Route exact path="/comp" element={<CompPage />} />

          {/* <Route exact path="/comp/xerox">
                 <Xerox />
               </Route>

               <Route exact path="/poligraph">
                 <PoligraphPage />
               </Route> */}

          <Route exact path="/contacts" element={<ContactsPage />} />
        </Route>

        <Route path="/admin" element={<AdminLayout />}>
          {/* <Route path="/admin/index" element={<MainPanel />} />
          <Route path="/admin/users" element={<Users />} />
          <Route path="/admin/prices" element={<Prices />} />
          <Route path="/admin/ad" element={<Advertise />} /> */}
        </Route>

      </Routes>
    </>
  );
};

export default App;
