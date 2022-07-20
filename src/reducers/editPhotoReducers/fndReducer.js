import { GET_FND } from "../../constants/actionTypes";

const initialState = {
  listfnds: [],
};

function fndReducer(state = initialState, action) {
  const { type, data } = action;
  console.log("Reducer fnd data :", data);

  switch (type) {
    case GET_FND: {
      return {
        listfnds: data,
      };
    }

    default:
      return state;
  }
}
export default fndReducer;
