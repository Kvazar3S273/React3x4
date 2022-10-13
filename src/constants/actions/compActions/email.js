import get_email from "../../../services/get_email";
import { GET_EMAIL } from "../../actionTypes";

export const GetEmails = () => async (dispatch) => {
  try {
    const resemail = await get_email.getdataemail();
    console.log("Result email list:", resemail.data);
    dispatch({ type: GET_EMAIL, data: resemail.data });
  } catch (error) {
    console.log("Problem get email", error);
  }
};

export const UpdateEmailTable = (id, dataEmail) => async () => {
  try {
    const resultdata = await get_email.updateEmailData(id, dataEmail);
    console.log("Result update :", resultdata.data);
    return Promise.resolve(resultdata);
  } catch (error) {
    const errorres = error.response;
    console.log("Error from update:", error.response);
    return Promise.reject(errorres.data);
  }
};
