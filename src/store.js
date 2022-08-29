import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import authReducer from "./reducers/authReducer";
import loginReducer from "./reducers/loginReducer";
import showReducer from "./reducers/showReducer";
import fotoReducer from "./reducers/fotoReducer";
import compReducer from "./reducers/compReducer";
import poligraphReducer from "./reducers/poligraphReducer";
import fndReducer from "./reducers/editPhotoReducers/fndReducer"
import fotoprintReducer from "./reducers/editPhotoReducers/fotoprintReducer";
import photoscanReducer from "./reducers/editPhotoReducers/photoscanReducer";
import duplicateReducer from "./reducers/editPhotoReducers/duplicateReducer";
import photopictureReducer from "./reducers/editPhotoReducers/photopictureReducer";
import bottleReducer from "./reducers/editPhotoReducers/bottleReducer";

const middleware = [
    thunk
];

const rootReducer = combineReducers({
    auth: authReducer,
    login: loginReducer,
    show: showReducer,
    foto: fotoReducer,
    comp: compReducer,
    poligraph: poligraphReducer,
    fnd: fndReducer,
    fotoprint: fotoprintReducer,
    photoscan: photoscanReducer,
    duplicate: duplicateReducer,
    photopicture: photopictureReducer,
    bottle: bottleReducer
});

const enhancers = [];

const store = createStore(
    rootReducer,
    {},
    compose(applyMiddleware(...middleware), ...enhancers)
);
export default store;