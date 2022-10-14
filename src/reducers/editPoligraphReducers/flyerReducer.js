import { GET_FLYER } from "../../constants/actionTypes";

const initialState = {
  listflyers: [],
};

function flyerReducer(state = initialState, action) {
  const { type, data } = action;
  console.log("Reducer flyer data :", data);

  switch (type) {
    case GET_FLYER: {
      return {
        listflyers: data,
      };
    }

    default:
      return state;
  }
}
export default flyerReducer;
