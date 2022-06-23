import {
  PHOTO_FND,
  PHOTO_PHOTOPRINT,
  PHOTO_PHOTOBOOKS,
  PHOTO_SCAN,
  PHOTO_DUPLICATE,
  PHOTO_RESTORATION,
  PHOTO_BACKGROUND,
  PHOTO_ADDITION,
  PHOTO_BOTTLE,
  PHOTO_PHOTOPICTURE
} from "../actionTypes";

export const PhotoFnd = () => (dispatch) => {
  dispatch({ type: PHOTO_FND });
};
export const PhotoPhotoprint = () => (dispatch) => {
  dispatch({ type: PHOTO_PHOTOPRINT });
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
export const PhotoRestoration = () => (dispatch) => {
  dispatch({ type: PHOTO_RESTORATION });
};
export const PhotoBackground = () => (dispatch) => {
  dispatch({ type: PHOTO_BACKGROUND });
};
export const PhotoAddition = () => (dispatch) => {
  dispatch({ type: PHOTO_ADDITION });
};
export const PhotoBottle = () => (dispatch) => {
  dispatch({ type: PHOTO_BOTTLE });
};
export const PhotoPhotopicture = () => (dispatch) => {
  dispatch({ type: PHOTO_PHOTOPICTURE });
};
