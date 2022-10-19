import get_birka from "../../../services/get_birka";
import { GET_BIRKA } from "../../actionTypes";

export const GetBirkas = () => async (dispatch) => {
  try {
    const resbirka = await get_birka.getdatabirka();
    console.log("Result birka list:", resbirka.data);
    dispatch({ type: GET_BIRKA, data: resbirka.data });
  } catch (error) {
    console.log("Problem get birka", error);
  }
};

export const UpdateBirkaTable = (id, dataBirka) => async () => {
  try {
    const resultdata = await get_birka.updateBirkaData(
      id,
      dataBirka
    );
    console.log("Result update :", resultdata.data);
    return Promise.resolve(resultdata);
  } catch (error) {
    const errorres = error.response;
    console.log("Error from update:", error.response);
    return Promise.reject(errorres.data);
  }
};

export const ChangeBirkaByPercent = (percentvalue) => async () => {
  try {
    const result = await get_birka.changePriceBirkaByPercent(percentvalue);
    console.log("Percent value for birka:", percentvalue);
    console.log("Result status:", result.status);
    return Promise.resolve(result.status);
  } catch (error) {
    const errorsdata = error.response;
    return Promise.reject(errorsdata.data);
  }
};
