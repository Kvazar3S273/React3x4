import { SHOW_USERS, SHOW_PRICES, SHOW_ADVERTISE, SHOW_INFO } from "../actionTypes";

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
