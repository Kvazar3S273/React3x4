import get_duplicate from "../../../services/get_duplicate";
import { GET_DUPLICATE } from "../../actionTypes";

export const GetDuplicates = () => async (dispatch) => {
  try {
    const resduplicate = await get_duplicate.getdataduplicate();
    console.log("Result duplicate list:", resduplicate.data);
    dispatch({ type: GET_DUPLICATE, data: resduplicate.data });
  } catch (error) {
    console.log("Problem get duplicate", error);
  }
};

export const UpdateDuplicateTable = (id, dataDuplicate) => async () => {
  try {
    const resultdata = await get_duplicate.updateDuplicateData(id, dataDuplicate);
    console.log("Result update :", resultdata.data);
    return Promise.resolve(resultdata);
  } catch (error) {
    const errorres = error.response;
    console.log("Error from update:", error.response);
    return Promise.reject(errorres.data);
  }
};
