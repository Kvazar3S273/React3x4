import get_bottle from "../../../services/get_bottle";
import { GET_BOTTLE } from "../../actionTypes";

export const GetBottles = () => async (dispatch) => {
  try {
    const resbottle = await get_bottle.getdatabottle();
    console.log("Result bottle list:", resbottle.data);
    dispatch({ type: GET_BOTTLE, data: resbottle.data });
  } catch (error) {
    console.log("Problem get bottle", error);
  }
};

export const UpdateBottleTable = (id, dataBottle) => async () => {
  try {
    const resultdata = await get_bottle.updateBottleData(id, dataBottle);
    console.log("Result update :", resultdata.data);
    return Promise.resolve(resultdata);
  } catch (error) {
    const errorres = error.response;
    console.log("Error from update:", error.response);
    return Promise.reject(errorres.data);
  }
};
