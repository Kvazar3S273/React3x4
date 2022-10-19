import get_pvc from "../../../services/get_pvc";
import { GET_PVC } from "../../actionTypes";

export const GetPvcs = () => async (dispatch) => {
  try {
    const respvc = await get_pvc.getdatapvc();
    console.log("Result pvc list:", respvc.data);
    dispatch({ type: GET_PVC, data: respvc.data });
  } catch (error) {
    console.log("Problem get pvc", error);
  }
};

export const UpdatePvcTable = (id, dataPvc) => async () => {
  try {
    const resultdata = await get_pvc.updatePvcData(
      id,
      dataPvc
    );
    console.log("Result update :", resultdata.data);
    return Promise.resolve(resultdata);
  } catch (error) {
    const errorres = error.response;
    console.log("Error from update:", error.response);
    return Promise.reject(errorres.data);
  }
};

export const ChangePvcByPercent = (percentvalue) => async () => {
  try {
    const result = await get_pvc.changePricePvcByPercent(percentvalue);
    console.log("Percent value for pvc:", percentvalue);
    console.log("Result status:", result.status);
    return Promise.resolve(result.status);
  } catch (error) {
    const errorsdata = error.response;
    return Promise.reject(errorsdata.data);
  }
};
