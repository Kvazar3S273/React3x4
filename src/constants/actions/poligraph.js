import {
  POLIGRAPH_VISITCARD,
  POLIGRAPH_FLYER,
  POLIGRAPH_CALENDAR,
  POLIGRAPH_TAG,
  POLIGRAPH_STICKER,
  POLIGRAPH_HANGER,
  POLIGRAPH_ORACAL,
  POLIGRAPH_BANER,
  POLIGRAPH_PVC,
  POLIGRAPH_OTHER,
} from "../actionTypes";

export const PoligraphVisitcard = () => (dispatch) => {
  dispatch({ type: POLIGRAPH_VISITCARD });
};
export const PoligraphFlyer = () => (dispatch) => {
  dispatch({ type: POLIGRAPH_FLYER });
};
export const PoligraphCalendar = () => (dispatch) => {
  dispatch({ type: POLIGRAPH_CALENDAR });
};
export const PoligraphTag = () => (dispatch) => {
  dispatch({ type: POLIGRAPH_TAG });
};
export const PoligraphSticker = () => (dispatch) => {
  dispatch({ type: POLIGRAPH_STICKER });
};
export const PoligraphHanger = () => (dispatch) => {
  dispatch({ type: POLIGRAPH_HANGER });
};
export const PoligraphOracal = () => (dispatch) => {
  dispatch({ type: POLIGRAPH_ORACAL });
};
export const PoligraphBaner = () => (dispatch) => {
  dispatch({ type: POLIGRAPH_BANER });
};
export const PoligraphPvc = () => (dispatch) => {
  dispatch({ type: POLIGRAPH_PVC });
};
export const PoligraphOther = () => (dispatch) => {
  dispatch({ type: POLIGRAPH_OTHER });
};
