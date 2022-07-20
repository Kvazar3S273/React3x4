import get_fnd from "../../../services/get_fnd";
import { GET_FND } from "../../../constants/actionTypes";

export const GetFnds = () => async (dispatch) => {
  try {
    const resfnd = await get_fnd.getdatafnd();
    console.log("Result fnd list:", resfnd.data);
    dispatch({ type: GET_FND, data: resfnd.data });
  } catch (error) {
    console.log("Problem get fnd", error);
  }
};
