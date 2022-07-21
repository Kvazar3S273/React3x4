import {
  PHOTO_FND,
  PHOTO_FOTOPRINT,
  PHOTO_PHOTOBOOKS,
  PHOTO_PHOTOBOOKS_BAMBOOK,
  PHOTO_PHOTOBOOKS_PHOTOBOOK,
  PHOTO_PHOTOBOOKS_PLANSHET,
  PHOTO_PHOTOBOOKS_PRINTBOOK,
  PHOTO_PHOTOBOOKS_SLIMBOOK,
  PHOTO_PHOTOBOOKS_UNIBOOK,
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
export const PhotoFotoprint = () => (dispatch) => {
  dispatch({ type: PHOTO_FOTOPRINT });
};
export const PhotoPhotobooks = () => (dispatch) => {
  dispatch({ type: PHOTO_PHOTOBOOKS });
};
export const PhotoPhotobooksUniBook = () => (dispatch) => {
  dispatch({ type: PHOTO_PHOTOBOOKS_UNIBOOK });
};
export const PhotoPhotobooksSlimBook = () => (dispatch) => {
  dispatch({ type: PHOTO_PHOTOBOOKS_SLIMBOOK });
};
export const PhotoPhotobooksPhotoBook = () => (dispatch) => {
  dispatch({ type: PHOTO_PHOTOBOOKS_PHOTOBOOK });
};
export const PhotoPhotobooksPrintBook = () => (dispatch) => {
  dispatch({ type: PHOTO_PHOTOBOOKS_PRINTBOOK });
};
export const PhotoPhotobooksBamBook = () => (dispatch) => {
  dispatch({ type: PHOTO_PHOTOBOOKS_BAMBOOK });
};
export const PhotoPhotobooksPlanshet = () => (dispatch) => {
  dispatch({ type: PHOTO_PHOTOBOOKS_PLANSHET });
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
