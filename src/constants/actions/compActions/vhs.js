import get_vhs from "../../../services/get_vhs";
import { GET_VHS } from "../../actionTypes";

export const GetVhses = () => async (dispatch) => {
  try {
    const resvhs = await get_vhs.getdatavhs();
    console.log("Result vhs list:", resvhs.data);
    dispatch({ type: GET_VHS, data: resvhs.data });
  } catch (error) {
    console.log("Problem get vhs", error);
  }
};

export const UpdateVhsTable = (id, dataVhs) => async () => {
  try {
    const resultdata = await get_vhs.updateVhsData(id, dataVhs);
    console.log("Result update :", resultdata.data);
    return Promise.resolve(resultdata);
  } catch (error) {
    const errorres = error.response;
    console.log("Error from update:", error.response);
    return Promise.reject(errorres.data);
  }
};
