import { GET_BOTTLE } from "../../constants/actionTypes";

const initialState = {
  listbottles: [],
};

function bottleReducer(state = initialState, action) {
  const { type, data } = action;
  console.log("Reducer duplicate data :", data);

  switch (type) {
    case GET_BOTTLE: {
      return {
        listbottles: data,
      };
    }

    default:
      return state;
  }
}
export default bottleReducer;
