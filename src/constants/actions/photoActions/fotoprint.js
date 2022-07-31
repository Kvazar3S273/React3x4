import get_fotoprint from "../../../services/get_fotoprint";
import { GET_FOTOPRINT } from "../../../constants/actionTypes";

export const GetFotoprints = () => async (dispatch) => {
  try {
    const resfotoprint = await get_fotoprint.getdatafotoprint();
    console.log("Result fotoprint list:", resfotoprint.data);
    dispatch({ type: GET_FOTOPRINT, data: resfotoprint.data });
  } catch (error) {
    console.log("Problem get fotoprint", error);
  }
};

export const UpdateFotoprintTable = (id, dataFotoprint) => async () => {
  try {
    const resultdata = await get_fotoprint.updateFotoprintData(id, dataFotoprint);
    console.log("Result update :", resultdata.data);
    return Promise.resolve(resultdata);
  } catch (error) {
    const errorres = error.response;
    console.log("Error from update:", error.response);
    return Promise.reject(errorres.data);
  }
};
