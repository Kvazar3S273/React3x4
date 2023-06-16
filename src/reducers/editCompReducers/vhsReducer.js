import { GET_VHS } from "../../constants/actionTypes";

const initialState = {
  listvhses: [],
};

function vhsReducer(state = initialState, action) {
  const { type, data } = action;
  console.log("Reducer vhs data :", data);

  switch (type) {
    case GET_VHS: {
      return {
        listvhses: data,
      };
    }

    default:
      return state;
  }
}
export default vhsReducer;
