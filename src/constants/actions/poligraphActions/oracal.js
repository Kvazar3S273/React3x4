import get_oracal from "../../../services/get_oracal";
import { GET_ORACAL } from "../../actionTypes";

export const GetOracals = () => async (dispatch) => {
  try {
    const resoracal = await get_oracal.getdataoracal();
    console.log("Result oracal list:", resoracal.data);
    dispatch({ type: GET_ORACAL, data: resoracal.data });
  } catch (error) {
    console.log("Problem get oracal", error);
  }
};

export const UpdateOracalTable = (id, dataOracal) => async () => {
  try {
    const resultdata = await get_oracal.updateOracalData(
      id,
      dataOracal
    );
    console.log("Result update :", resultdata.data);
    return Promise.resolve(resultdata);
  } catch (error) {
    const errorres = error.response;
    console.log("Error from update:", error.response);
    return Promise.reject(errorres.data);
  }
};

export const ChangeOracalByPercent = (percentvalue) => async () => {
  try {
    const result = await get_oracal.changePriceOracalByPercent(percentvalue);
    console.log("Percent value for oracal:", percentvalue);
    console.log("Result status:", result.status);
    return Promise.resolve(result.status);
  } catch (error) {
    const errorsdata = error.response;
    return Promise.reject(errorsdata.data);
  }
};
