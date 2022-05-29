import "./App.css";
import React from "react";
//import { Switch, Route } from "react-router";
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
// const DefaultLayout = React.lazy(()=>import('./components/containers/DefaultLayout'));
// const AdminLayout = React.lazy(()=>import('./components/containers/AdminLayout'));
import DefaultLayout from "./components/containers/DefaultLayout/DefaultLayout";
import AdminLayout from "./components/containers/AdminLayout/AdminLayout";
// import { useSelector } from "react-redux";

const App = () => {
  // const { isAuth, username } = useSelector((redux) => redux.auth);
    return (
      <>

      {/* <h1>Hello</h1> */}
      <Routes>
        <Route path="/" element={<DefaultLayout/>}>
          <Route index element={<HomePage/>}/>
            
               <Route exact path="/login" element={<LoginPage/>}/>
               <Route exact path="/register" element={<RegisterPage/>}/>
               <Route exact path="/photo" element={<PhotoPage/>}/>

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

               <Route exact path="/comp" element={<CompPage/>}/>

               {/* <Route exact path="/comp/xerox">
                 <Xerox />
               </Route>

               <Route exact path="/poligraph">
                 <PoligraphPage />
               </Route> */}

               <Route exact path="/contacts" element={<ContactsPage/>}/>
        </Route>
        <Route path="/admin" element={<AdminLayout/>}>
          <Route path="/admin/users" element={<h1>Users</h1>}/>
        </Route>
      </Routes>




        {/* <Suspense fallback={<div>Загрузка...</div>}>
          <Switch>
            <Route path="/admin" name="Admin" render = {props => <AdminLayout {...props} /> } />
            <Route path="/" name="Default" render = {props => <DefaultLayout {...props} /> } />
          </Switch>
        </Suspense> */}
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
}

export default App;
