import { GET_DUPLICATE } from "../../constants/actionTypes";

const initialState = {
  listduplicates: [],
};

function duplicateReducer(state = initialState, action) {
  const { type, data } = action;
  console.log("Reducer duplicate data :", data);

  switch (type) {
    case GET_DUPLICATE: {
      return {
        listduplicates: data,
      };
    }

    default:
      return state;
  }
}
export default duplicateReducer;
