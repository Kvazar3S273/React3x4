import { GET_BANER } from "../../constants/actionTypes";

const initialState = {
  listbaners: [],
};

function banerReducer(state = initialState, action) {
  const { type, data } = action;
  console.log("Reducer baner data :", data);

  switch (type) {
    case GET_BANER: {
      return {
        listbaners: data,
      };
    }

    default:
      return state;
  }
}
export default banerReducer;
	