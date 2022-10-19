import { GET_BIRKA } from "../../constants/actionTypes";

const initialState = {
  listbirkas: [],
};

function birkaReducer(state = initialState, action) {
  const { type, data } = action;
  console.log("Reducer birka data :", data);

  switch (type) {
    case GET_BIRKA: {
      return {
        listbirkas: data,
      };
    }

    default:
      return state;
  }
}
export default birkaReducer;
	