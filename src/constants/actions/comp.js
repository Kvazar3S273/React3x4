import { 
  COMP_XEROX,
  COMP_SCAN,
  COMP_LAMINATE,
  COMP_BINDER,
  COMP_USBFLASH,
  COMP_DISCPRINT,
  COMP_EMAIL
} from "../actionTypes";

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