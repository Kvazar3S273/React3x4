import { 
  SHOW_USERS, 
  SHOW_PRICES, 
  SHOW_ADVERTISE, 
  SHOW_INFO, 
  NOT_SHOW_MENU,
  PHOTO_FND,
  PHOTO_FOTOPRINT,
  PHOTO_PHOTOBOOKS,
  PHOTO_SCAN,
  PHOTO_DUPLICATE,
  PHOTO_RESTORATION,
  PHOTO_BACKGROUND,
  PHOTO_ADDITION,
  PHOTO_BOTTLE,
  PHOTO_PHOTOPICTURE,
  COMP_XEROX,
  COMP_SCAN,
  COMP_LAMINATE,
  COMP_BINDER,
  COMP_USBFLASH,
  COMP_DISCPRINT,
  COMP_EMAIL
} from "../actionTypes";

export const ShowUsers = () => (dispatch) => {
  dispatch({ type: SHOW_USERS });
};
export const ShowPrices = () => (dispatch) => {
  dispatch({ type: SHOW_PRICES });
};
export const ShowAdvertise = () => (dispatch) => {
  dispatch({ type: SHOW_ADVERTISE });
};
export const ShowInfo = () => (dispatch) => {
  dispatch({ type: SHOW_INFO });
};
export const NotShowMenu = () => (dispatch) => {
  dispatch({ type: NOT_SHOW_MENU });
};


export const PhotoFnd = () => (dispatch) => {
  dispatch({ type: PHOTO_FND });
};
export const PhotoFotoprint = () => (dispatch) => {
  dispatch({ type: PHOTO_FOTOPRINT });
};
export const PhotoPhotobooks = () => (dispatch) => {
  dispatch({ type: PHOTO_PHOTOBOOKS });
};
export const PhotoScan = () => (dispatch) => {
  dispatch({ type: PHOTO_SCAN });
};
export const PhotoDuplicate = () => (dispatch) => {
  dispatch({ type: PHOTO_DUPLICATE });
};
export const PhotoAddition = () => (dispatch) => {
  dispatch({ type: PHOTO_ADDITION });
};
export const PhotoRestoration = () => (dispatch) => {
  dispatch({ type: PHOTO_RESTORATION });
};
export const PhotoBackground = () => (dispatch) => {
  dispatch({ type: PHOTO_BACKGROUND });
};
export const PhotoBottle = () => (dispatch) => {
  dispatch({ type: PHOTO_BOTTLE });
};
export const PhotoPhotopicture = () => (dispatch) => {
  dispatch({ type: PHOTO_PHOTOPICTURE });
};


export const CompXerox = () => (dispatch) => {
  dispatch({ type: COMP_XEROX });
};
export const CompScan = () => (dispatch) => {
  dispatch({ type: COMP_SCAN });
};
export const CompLaminate = () => (dispatch) => {
  dispatch({ type: COMP_LAMINATE });
};
export const CompBinder = () => (dispatch) => {
  dispatch({ type: COMP_BINDER });
};
export const CompUsbflash = () => (dispatch) => {
  dispatch({ type: COMP_USBFLASH });
};
export const CompDiscprint = () => (dispatch) => {
  dispatch({ type: COMP_DISCPRINT });
};
export const CompEmail = () => (dispatch) => {
  dispatch({ type: COMP_EMAIL });
};