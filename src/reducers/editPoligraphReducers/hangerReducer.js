import { GET_HANGER } from "../../constants/actionTypes";

const initialState = {
  listhangers: [],
};

function hangerReducer(state = initialState, action) {
  const { type, data } = action;
  console.log("Reducer hanger data :", data);

  switch (type) {
    case GET_HANGER: {
      return {
        listhangers: data,
      };
    }

    default:
      return state;
  }
}
export default hangerReducer;
	