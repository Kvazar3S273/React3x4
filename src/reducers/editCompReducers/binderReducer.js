import { GET_BINDER } from "../../constants/actionTypes";

const initialState = {
  listbinders: [],
};

function binderReducer(state = initialState, action) {
  const { type, data } = action;
  console.log("Reducer binder data :", data);

  switch (type) {
    case GET_BINDER: {
      return {
        listbinders: data,
      };
    }

    default:
      return state;
  }
}
export default binderReducer;
