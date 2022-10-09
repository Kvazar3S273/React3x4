import { GET_SCAN } from "../../constants/actionTypes";

const initialState = {
  listscans: [],
};

function scanReducer(state = initialState, action) {
  const { type, data } = action;
  console.log("Reducer scan data :", data);

  switch (type) {
    case GET_SCAN: {
      return {
        listscans: data,
      };
    }

    default:
      return state;
  }
}
export default scanReducer;
