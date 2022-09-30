import get_visitcard from "../../../services/get_visitcard";
import { GET_VISITCARD } from "../../actionTypes";

export const GetVisitcards = () => async (dispatch) => {
  try {
    const resvisitcard = await get_visitcard.getdatavisitcard();
    console.log("Result visitcard list:", resvisitcard.data);
    dispatch({ type: GET_VISITCARD, data: resvisitcard.data });
  } catch (error) {
    console.log("Problem get visitcard", error);
  }
};

export const UpdateVisitcardTable = (id, dataVisitcard) => async () => {
  try {
    const resultdata = await get_visitcard.updateVisitcardData(id, dataVisitcard);
    console.log("Result update :", resultdata.data);
    return Promise.resolve(resultdata);
  } catch (error) {
    const errorres = error.response;
    console.log("Error from update:", error.response);
    return Promise.reject(errorres.data);
  }
};
