import get_xerox from "../../../services/get_xerox";
import { GET_XEROX } from "../../actionTypes";

export const GetXeroxes = () => async (dispatch) => {
  try {
    const resxerox = await get_xerox.getdataxerox();
    console.log("Result xerox list:", resxerox.data);
    dispatch({ type: GET_XEROX, data: resxerox.data });
  } catch (error) {
    console.log("Problem get xerox", error);
  }
};

export const UpdateXeroxTable = (id, dataXerox) => async () => {
  try {
    const resultdata = await get_xerox.updateXeroxData(id, dataXerox);
    console.log("Result update :", resultdata.data);
    return Promise.resolve(resultdata);
  } catch (error) {
    const errorres = error.response;
    console.log("Error from update:", error.response);
    return Promise.reject(errorres.data);
  }
};
