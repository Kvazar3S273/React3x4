import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import authReducer from "./reducers/authReducer";
import showReducer from "./reducers/showReducer";
import fotoReducer from "./reducers/fotoReducer";
import compReducer from "./reducers/compReducer";
import poligraphReducer from "./reducers/poligraphReducer";

// const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');
// export const history = createBrowserHistory({ basename: baseUrl });

const middleware = [
    thunk,
    // routerMiddleware(history)
];

const rootReducer = combineReducers({
    auth: authReducer,
    show: showReducer,
    foto: fotoReducer,
    comp: compReducer,
    poligraph: poligraphReducer
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