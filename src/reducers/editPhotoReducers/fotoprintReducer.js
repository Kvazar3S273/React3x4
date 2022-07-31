import { GET_FOTOPRINT } from "../../constants/actionTypes";

const initialState = {
  listfotoprints: [],
};

function fotoprintReducer(state = initialState, action) {
  const { type, data } = action;
  console.log("Reducer fotoprint data :", data);

  switch (type) {
    case GET_FOTOPRINT: {
      return {
        listfotoprints: data,
      };
    }

    default:
      return state;
  }
}
export default fotoprintReducer;
