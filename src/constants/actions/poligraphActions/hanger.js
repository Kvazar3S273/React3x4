import get_hanger from "../../../services/get_hanger";
import { GET_HANGER } from "../../actionTypes";

export const GetHangers = () => async (dispatch) => {
  try {
    const reshanger = await get_hanger.getdatahanger();
    console.log("Result hanger list:", reshanger.data);
    dispatch({ type: GET_HANGER, data: reshanger.data });
  } catch (error) {
    console.log("Problem get hanger", error);
  }
};

export const UpdateHangerTable = (id, dataHanger) => async () => {
  try {
    const resultdata = await get_hanger.updateHangerData(
      id,
      dataHanger
    );
    console.log("Result update :", resultdata.data);
    return Promise.resolve(resultdata);
  } catch (error) {
    const errorres = error.response;
    console.log("Error from update:", error.response);
    return Promise.reject(errorres.data);
  }
};

export const ChangeHangerByPercent = (percentvalue) => async () => {
  try {
    const result = await get_hanger.changePriceHangerByPercent(percentvalue);
    console.log("Percent value for hanger:", percentvalue);
    console.log("Result status:", result.status);
    return Promise.resolve(result.status);
  } catch (error) {
    const errorsdata = error.response;
    return Promise.reject(errorsdata.data);
  }
};
