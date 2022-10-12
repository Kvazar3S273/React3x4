import { GET_USBFLASH } from "../../constants/actionTypes";

const initialState = {
  listusbflashes: [],
};

function usbflashReducer(state = initialState, action) {
  const { type, data } = action;
  console.log("Reducer usbflash data :", data);

  switch (type) {
    case GET_USBFLASH: {
      return {
        listusbflashes: data,
      };
    }

    default:
      return state;
  }
}
export default usbflashReducer;
