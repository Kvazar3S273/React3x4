import { composeWithDevTools } from "@redux-devtools/extension";
import { createStore, combineReducers } from "redux";
import thunk from "redux-thunk";
import authReducer from "./reducers/authReducer";
import { applyMiddleware } from 'redux';

const middleware = [thunk];

const rootReducer = combineReducers({
    auth: authReducer
});

const store = createStore(
    rootReducer,
    {},
    composeWithDevTools(applyMiddleware(...middleware))
);
export default store;