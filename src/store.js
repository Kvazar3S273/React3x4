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
import visitcardReducer from "./reducers/editPoligraphReducers/visitcardReducer";
import xeroxReducer from "./reducers/editCompReducers/xeroxReducer";
import blackprintReducer from "./reducers/editCompReducers/blackPrintReducer";
import colorprintReducer from "./reducers/editCompReducers/colorPrintReducer";
import scanReducer from "./reducers/editCompReducers/scanReducer";
import laminateReducer from "./reducers/editCompReducers/laminateReducer";
import binderReducer from "./reducers/editCompReducers/binderReducer";
import usbflashReducer from "./reducers/editCompReducers/usbFlashReducer";
import vhsReducer from "./reducers/editCompReducers/vhsReducer";
import discprintReducer from "./reducers/editCompReducers/discprintReducer";
import emailReducer from "./reducers/editCompReducers/emailReducer";
import flyerReducer from "./reducers/editPoligraphReducers/flyerReducer";
import calendarReducer from "./reducers/editPoligraphReducers/calendarReducer";
import birkaReducer from "./reducers/editPoligraphReducers/birkaReducer";
import stickerReducer from "./reducers/editPoligraphReducers/stickerReducer";
import hangerReducer from "./reducers/editPoligraphReducers/hangerReducer";
import banerReducer from "./reducers/editPoligraphReducers/banerReducer";
import oracalReducer from "./reducers/editPoligraphReducers/oracalReducer";
import pvcReducer from "./reducers/editPoligraphReducers/pvcReducer";

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
    bottle: bottleReducer,
    xerox: xeroxReducer,
    blackprint: blackprintReducer,
    colorprint: colorprintReducer,
    scan: scanReducer,
    laminate: laminateReducer,
    binder: binderReducer,
    usbflash: usbflashReducer,
    vhs: vhsReducer,
    discprint: discprintReducer,
    email: emailReducer,
    visitcard: visitcardReducer,
    flyer: flyerReducer,
    calendar: calendarReducer,
    birka: birkaReducer,
    sticker: stickerReducer,
    hanger: hangerReducer,
    baner: banerReducer,
    oracal: oracalReducer,
    pvc: pvcReducer

});

const enhancers = [];

const store = createStore(
    rootReducer,
    {},
    compose(applyMiddleware(...middleware), ...enhancers)
);
export default store;