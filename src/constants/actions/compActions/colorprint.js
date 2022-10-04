import get_colorprint from "../../../services/get_colorprint";
import { GET_COLORPRINT } from "../../actionTypes";

export const GetColorPrints = () => async (dispatch) => {
  try {
    const rescolorprint = await get_colorprint.getdatacolorprint();
    console.log("Result colorprint list:", rescolorprint.data);
    dispatch({ type: GET_COLORPRINT, data: rescolorprint.data });
  } catch (error) {
    console.log("Problem get colorprint", error);
  }
};

export const UpdateColorPrintTable = (id, dataColorPrint) => async () => {
  try {
    const resultdata = await get_colorprint.updateColorPrintData(id, dataColorPrint);
    console.log("Result update :", resultdata.data);
    return Promise.resolve(resultdata);
  } catch (error) {
    const errorres = error.response;
    console.log("Error from update:", error.response);
    return Promise.reject(errorres.data);
  }
};
