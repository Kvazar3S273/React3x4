import { GET_XEROX } from "../../constants/actionTypes";

const initialState = {
  listxeroxes: [],
};

function xeroxReducer(state = initialState, action) {
  const { type, data } = action;
  console.log("Reducer xerox data :", data);

  switch (type) {
    case GET_XEROX: {
      return {
        listxeroxes: data,
      };
    }

    default:
      return state;
  }
}
export default xeroxReducer;
