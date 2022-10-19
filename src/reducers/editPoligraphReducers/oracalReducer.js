import { GET_ORACAL } from "../../constants/actionTypes";

const initialState = {
  listoracals: [],
};

function oracalReducer(state = initialState, action) {
  const { type, data } = action;
  console.log("Reducer oracal data :", data);

  switch (type) {
    case GET_ORACAL: {
      return {
        listoracals: data,
      };
    }

    default:
      return state;
  }
}
export default oracalReducer;
	