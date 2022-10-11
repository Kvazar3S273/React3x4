import get_binder from "../../../services/get_binder";
import { GET_BINDER } from "../../actionTypes";

export const GetBinders = () => async (dispatch) => {
  try {
    const resbinder = await get_binder.getdatabinder();
    console.log("Result binder list:", resbinder.data);
    dispatch({ type: GET_BINDER, data: resbinder.data });
  } catch (error) {
    console.log("Problem get binder", error);
  }
};

export const UpdateBinderTable = (id, dataBinder) => async () => {
  try {
    const resultdata = await get_binder.updateBinderData(id, dataBinder);
    console.log("Result update :", resultdata.data);
    return Promise.resolve(resultdata);
  } catch (error) {
    const errorres = error.response;
    console.log("Error from update:", error.response);
    return Promise.reject(errorres.data);
  }
};
