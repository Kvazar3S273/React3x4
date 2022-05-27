import React from "react";

const Home = React.lazy(() => import("../components/pages/home"));
const Login = React.lazy(() => import("../components/auth/login"));
const Register = React.lazy(() => import("../components/auth/register"));
const Comp = React.lazy(() => import("../components/pages/comp"));
const Photo = React.lazy(() => import("../components/pages/photo"));
const Poligraph = React.lazy(() => import("../components/pages/poligraph"));
const Contacts = React.lazy(() => import("../components/pages/contacts"));

const defaultRoutes = [
  { path: "/home", exact: true, name: "Головна", component: Home },
  { path: "/login", exact: true, name: "Вхід", component: Home },
  { path: "/register", exact: true, name: "Реєстрація", component: Home },
  { path: "/comp", exact: true, name: "Комп'ютерні послуги", component: Home },
  { path: "/photo", exact: true, name: "Фотопослуги", component: Home },
  { path: "/poligraph", exact: true, name: "Поліграфія", component: Home },
  { path: "/contacts", exact: true, name: "Контакти", component: Home }
];
export default defaultRoutes;
