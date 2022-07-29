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

export const UpdateFndTable = (id, dataFnd) => async () => {
  try {
    const resultdata = await get_fnd.updateFndData(id, dataFnd);
    console.log("Result update :", resultdata.data);
    return Promise.resolve(resultdata);
  } catch (error) {
    const errorres = error.response;
    console.log("Error from update:", error.response);
    return Promise.reject(errorres.data);
  }
};
