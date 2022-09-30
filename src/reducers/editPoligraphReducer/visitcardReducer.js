import { GET_VISITCARD } from "../../constants/actionTypes";

const initialState = {
  listvisitcards: [],
};

function visitcardReducer(state = initialState, action) {
  const { type, data } = action;
  console.log("Reducer visitcard data :", data);

  switch (type) {
    case GET_VISITCARD: {
      return {
        listvisitcards: data,
      };
    }

    default:
      return state;
  }
}
export default visitcardReducer;
