import React from "react";

const Home = React.lazy(() => import("../components/pages/home"));
const Login = React.lazy(() => import("../components/auth/login"));
const Register = React.lazy(() => import("../components/auth/register"));
const Comp = React.lazy(() => import("../components/pages/comp"));
const Photo = React.lazy(() => import("../components/pages/photo"));
const Poligraph = React.lazy(() => import("../components/pages/poligraph"));
const Contacts = React.lazy(() => import("../components/pages/contacts"));

const defaultRoutes = [
  { path: "/", exact: true, name: "Головна", component: Home },
  { path: "/login", exact: true, name: "Вхід", component: Login },
  { path: "/register", exact: true, name: "Реєстрація", component: Register },
  { path: "/comp", exact: true, name: "Комп'ютерні послуги", component: Comp },
  { path: "/photo", exact: true, name: "Фотопослуги", component: Photo },
  { path: "/poligraph", exact: true, name: "Поліграфія", component: Poligraph },
  { path: "/contacts", exact: true, name: "Контакти", component: Contacts }
];
export default defaultRoutes;