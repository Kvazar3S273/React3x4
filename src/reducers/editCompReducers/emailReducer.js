import { GET_EMAIL } from "../../constants/actionTypes";

const initialState = {
  listemails: [],
};

function emailReducer(state = initialState, action) {
  const { type, data } = action;
  console.log("Reducer email data :", data);

  switch (type) {
    case GET_EMAIL: {
      return {
        listemails: data,
      };
    }

    default:
      return state;
  }
}
export default emailReducer;
