import get_flyer from "../../../services/get_flyer";
import { GET_FLYER } from "../../actionTypes";

export const GetFlyers = () => async (dispatch) => {
  try {
    const resflyer = await get_flyer.getdataflyer();
    console.log("Result flyer list:", resflyer.data);
    dispatch({ type: GET_FLYER, data: resflyer.data });
  } catch (error) {
    console.log("Problem get flyer", error);
  }
};

export const UpdateFlyerTable = (id, dataFlyer) => async () => {
  try {
    const resultdata = await get_flyer.updateFlyerData(
      id,
      dataFlyer
    );
    console.log("Result update :", resultdata.data);
    return Promise.resolve(resultdata);
  } catch (error) {
    const errorres = error.response;
    console.log("Error from update:", error.response);
    return Promise.reject(errorres.data);
  }
};

export const ChangeFlyerByPercent = (percentvalue) => async () => {
  try {
    const result = await get_flyer.changePriceFlyerByPercent(percentvalue);
    console.log("Percent value for flyer:", percentvalue);
    console.log("Result status:", result.status);
    return Promise.resolve(result.status);
  } catch (error) {
    const errorsdata = error.response;
    return Promise.reject(errorsdata.data);
  }
};
