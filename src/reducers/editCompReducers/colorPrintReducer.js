import { GET_COLORPRINT } from "../../constants/actionTypes";

const initialState = {
  listcolorprints: [],
};

function colorprintReducer(state = initialState, action) {
  const { type, data } = action;
  console.log("Reducer colorprint data :", data);

  switch (type) {
    case GET_COLORPRINT: {
      return {
        listcolorprints: data,
      };
    }

    default:
      return state;
  }
}
export default colorprintReducer;
