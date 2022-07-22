import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import authReducer from "./reducers/authReducer";
import loginReducer from "./reducers/loginReducer";
import showReducer from "./reducers/showReducer";
import fotoReducer from "./reducers/fotoReducer";
import compReducer from "./reducers/compReducer";
import poligraphReducer from "./reducers/poligraphReducer";
import fndReducer from "./reducers/editPhotoReducers/fndReducer"
// const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');
// export const history = createBrowserHistory({ basename: baseUrl });

const middleware = [
    thunk,
    // routerMiddleware(history)
];

const rootReducer = combineReducers({
    auth: authReducer,
    login: loginReducer,
    show: showReducer,
    foto: fotoReducer,
    comp: compReducer,
    poligraph: poligraphReducer,
    fnd: fndReducer
    // router: connectRouter(history)
});

const enhancers = [];

const store = createStore(
    rootReducer,
    {},
    //composeWithDevTools(applyMiddleware(...middleware))
    compose(applyMiddleware(...middleware), ...enhancers)
);
export default store;