import get_discprint from "../../../services/get_discprint";
import { GET_DISCPRINT } from "../../actionTypes";

export const GetDiscprints = () => async (dispatch) => {
  try {
    const resdiscprint = await get_discprint.getdatadiscprint();
    console.log("Result discprint list:", resdiscprint.data);
    dispatch({ type: GET_DISCPRINT, data: resdiscprint.data });
  } catch (error) {
    console.log("Problem get discprint", error);
  }
};

export const UpdateDiscprintTable = (id, dataDiscprint) => async () => {
  try {
    const resultdata = await get_discprint.updateDiscprintData(id, dataDiscprint);
    console.log("Result update :", resultdata.data);
    return Promise.resolve(resultdata);
  } catch (error) {
    const errorres = error.response;
    console.log("Error from update:", error.response);
    return Promise.reject(errorres.data);
  }
};
