import get_photopicture from "../../../services/get_photopicture";
import { GET_PHOTOPICTURE } from "../../actionTypes";

export const GetPhotopictures = () => async (dispatch) => {
  try {
    const resphotopicture = await get_photopicture.getdataphotopicture();
    console.log("Result photopicture list:", resphotopicture.data);
    dispatch({ type: GET_PHOTOPICTURE, data: resphotopicture.data });
  } catch (error) {
    console.log("Problem get photopicture", error);
  }
};

export const UpdatePhotopictureTable = (id, dataPhotopicture) => async () => {
  try {
    const resultdata = await get_photopicture.updatePhotopictureData(id, dataPhotopicture);
    console.log("Result update :", resultdata.data);
    return Promise.resolve(resultdata);
  } catch (error) {
    const errorres = error.response;
    console.log("Error from update:", error.response);
    return Promise.reject(errorres.data);
  }
};
