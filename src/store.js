import { composeWithDevTools } from "@redux-devtools/extension";
import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import { connectRouter, routerMiddleware } from 'connected-react-router';
import thunk from "redux-thunk";
import { createBrowserHistory } from 'history';
import authReducer from "./reducers/authReducer";

const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');
export const history = createBrowserHistory({ basename: baseUrl });

const middleware = [
    thunk,
    routerMiddleware(history)
];

const rootReducer = combineReducers({
    auth: authReducer,
    router: connectRouter(history)
});

const enhancers = [];

const store = createStore(
    rootReducer,
    {},
    //composeWithDevTools(applyMiddleware(...middleware))
    compose(applyMiddleware(...middleware), ...enhancers)
);
export default store;