import get_laminate from "../../../services/get_laminate";
import { GET_LAMINATE } from "../../actionTypes";

export const GetLaminates = () => async (dispatch) => {
  try {
    const reslaminate = await get_laminate.getdatalaminate();
    console.log("Result laminate list:", reslaminate.data);
    dispatch({ type: GET_LAMINATE, data: reslaminate.data });
  } catch (error) {
    console.log("Problem get laminate", error);
  }
};

export const UpdateLaminateTable = (id, dataLaminate) => async () => {
  try {
    const resultdata = await get_laminate.updateLaminateData(id, dataLaminate);
    console.log("Result update :", resultdata.data);
    return Promise.resolve(resultdata);
  } catch (error) {
    const errorres = error.response;
    console.log("Error from update:", error.response);
    return Promise.reject(errorres.data);
  }
};
