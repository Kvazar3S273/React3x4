import get_baner from "../../../services/get_baner";
import { GET_BANER } from "../../actionTypes";

export const GetBaners = () => async (dispatch) => {
  try {
    const resbaner = await get_baner.getdatabaner();
    console.log("Result baner list:", resbaner.data);
    dispatch({ type: GET_BANER, data: resbaner.data });
  } catch (error) {
    console.log("Problem get baner", error);
  }
};

export const UpdateBanerTable = (id, dataBaner) => async () => {
  try {
    const resultdata = await get_baner.updateBanerData(
      id,
      dataBaner
    );
    console.log("Result update :", resultdata.data);
    return Promise.resolve(resultdata);
  } catch (error) {
    const errorres = error.response;
    console.log("Error from update:", error.response);
    return Promise.reject(errorres.data);
  }
};

export const ChangeBanerByPercent = (percentvalue) => async () => {
  try {
    const result = await get_baner.changePriceBanerByPercent(percentvalue);
    console.log("Percent value for baner:", percentvalue);
    console.log("Result status:", result.status);
    return Promise.resolve(result.status);
  } catch (error) {
    const errorsdata = error.response;
    return Promise.reject(errorsdata.data);
  }
};
