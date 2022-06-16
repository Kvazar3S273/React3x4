import { SHOW_USERS, SHOW_PRICES } from "../actionTypes";

export const ShowUsers = () => (dispatch) => {
  dispatch({ type: SHOW_USERS });
};

export const ShowPrices = () => (dispatch) => {
    dispatch({ type: SHOW_PRICES });
  };
