import { GET_DISCPRINT } from "../../constants/actionTypes";

const initialState = {
  listdiscprints: [],
};

function discprintReducer(state = initialState, action) {
  const { type, data } = action;
  console.log("Reducer discprint data :", data);

  switch (type) {
    case GET_DISCPRINT: {
      return {
        listdiscprints: data,
      };
    }

    default:
      return state;
  }
}
export default discprintReducer;
