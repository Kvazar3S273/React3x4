import { GET_BLACKPRINT } from "../../constants/actionTypes";

const initialState = {
  listblackprints: [],
};

function blackprintReducer(state = initialState, action) {
  const { type, data } = action;
  console.log("Reducer blackprint data :", data);

  switch (type) {
    case GET_BLACKPRINT: {
      return {
        listblackprints: data,
      };
    }

    default:
      return state;
  }
}
export default blackprintReducer;
