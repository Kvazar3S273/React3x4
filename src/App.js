import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./components/pages/home";
import PhotoPage from "./components/pages/photo";
import FNDPage from "./components/pages/photo/fnd";
import PhotobooksPage from "./components/pages/photo/photobooks";
import PhotoprintPage from "./components/pages/photo/photoprint";
import ScanPage from "./components/pages/photo/scan";
import CompPage from "./components/pages/comp";
import PoligraphPage from "./components/pages/poligraph";
import ContactsPage from "./components/pages/contacts";
import RegisterPage from "./components/auth/register";
import LoginPage from "./components/auth/login";
import Header from "./components/navbar";
import Xerox from "./components/pages/comp/xerox";
import DefaultLayout from "./components/containers/DefaultLayout/DefaultLayout";
import AdminLayout from "./components/containers/AdminLayout/AdminLayout";
import MainPage from "./components/containers/AdminLayout/MainPage";
import Users from "./components/containers/AdminLayout/Users";
import Prices from "./components/containers/AdminLayout/Prices";
import Advertise from "./components/containers/AdminLayout/Advertise";
import MainPanel from "./components/containers/AdminLayout/MainPanel";

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
          <Route path="/admin/index" element={<MainPanel />} />
          <Route path="/admin/users" element={<Users />} />
          <Route path="/admin/prices" element={<Prices />} />
          <Route path="/admin/ad" element={<Advertise />} />
        </Route>

      </Routes>
    </>
    // <Router>
    //   <Header />
    //   <main>

    //       <Switch>
    //         <Route exact path="/">
    //           <HomePage />
    //         </Route>

    //         <Route exact path="/login">
    //           <LoginPage />
    //         </Route>

    //         <Route exact path="/register">
    //           <RegisterPage />
    //         </Route>

    //         <Route exact path="/photo">
    //           <PhotoPage />
    //         </Route>

    //         <Route exact path="/photo/fnd">
    //           <FNDPage />
    //         </Route>

    //         <Route exact path="/photo/photobooks">
    //           <PhotobooksPage />
    //         </Route>

    //         <Route exact path="/photo/photoprint">
    //           <PhotoprintPage />
    //         </Route>

    //         <Route exact path="/photo/scan">
    //           <ScanPage />
    //         </Route>

    //         <Route exact path="/comp">
    //           <CompPage />
    //         </Route>

    //         <Route exact path="/comp/xerox">
    //           <Xerox />
    //         </Route>

    //         <Route exact path="/poligraph">
    //           <PoligraphPage />
    //         </Route>

    //         <Route exact path="/contacts">
    //           <ContactsPage />
    //         </Route>
    //       </Switch>

    //   </main>
    //   <Footer2 />
    // </Router>
  );
};

export default App;
