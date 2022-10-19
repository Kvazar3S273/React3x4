import { GET_PVC } from "../../constants/actionTypes";

const initialState = {
  listpvcs: [],
};

function pvcReducer(state = initialState, action) {
  const { type, data } = action;
  console.log("Reducer pvc data :", data);

  switch (type) {
    case GET_PVC: {
      return {
        listpvcs: data,
      };
    }

    default:
      return state;
  }
}
export default pvcReducer;
	