import get_photoscan from "../../../services/get_photoscan";
import { GET_PHOTOSCAN } from "../../actionTypes";

export const GetPhotoscans = () => async (dispatch) => {
  try {
    const resphotoscan = await get_photoscan.getdataphotoscan();
    console.log("Result photoscan list:", resphotoscan.data);
    dispatch({ type: GET_PHOTOSCAN, data: resphotoscan.data });
  } catch (error) {
    console.log("Problem get photoscan", error);
  }
};

export const UpdatePhotoscanTable = (id, dataPhotoscan) => async () => {
  try {
    const resultdata = await get_photoscan.updatePhotoscanData(id, dataPhotoscan);
    console.log("Result update :", resultdata.data);
    return Promise.resolve(resultdata);
  } catch (error) {
    const errorres = error.response;
    console.log("Error from update:", error.response);
    return Promise.reject(errorres.data);
  }
};
