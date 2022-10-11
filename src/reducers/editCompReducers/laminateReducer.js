import { GET_LAMINATE } from "../../constants/actionTypes";

const initialState = {
  listlaminates: [],
};

function laminateReducer(state = initialState, action) {
  const { type, data } = action;
  console.log("Reducer laminate data :", data);

  switch (type) {
    case GET_LAMINATE: {
      return {
        listlaminates: data,
      };
    }

    default:
      return state;
  }
}
export default laminateReducer;
