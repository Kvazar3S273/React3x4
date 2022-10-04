import get_blackprint from "../../../services/get_blackprint";
import { GET_BLACKPRINT } from "../../actionTypes";

export const GetBlackPrints = () => async (dispatch) => {
  try {
    const resblackprint = await get_blackprint.getdatablackprint();
    console.log("Result blackprint list:", resblackprint.data);
    dispatch({ type: GET_BLACKPRINT, data: resblackprint.data });
  } catch (error) {
    console.log("Problem get blackprint", error);
  }
};

export const UpdateBlackPrintTable = (id, dataBlackPrint) => async () => {
  try {
    const resultdata = await get_blackprint.updateBlackPrintData(id, dataBlackPrint);
    console.log("Result update :", resultdata.data);
    return Promise.resolve(resultdata);
  } catch (error) {
    const errorres = error.response;
    console.log("Error from update:", error.response);
    return Promise.reject(errorres.data);
  }
};
