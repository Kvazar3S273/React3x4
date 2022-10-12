import get_usbflash from "../../../services/get_usbflash";
import { GET_USBFLASH } from "../../actionTypes";

export const GetUsbFlashes = () => async (dispatch) => {
  try {
    const resusbflash = await get_usbflash.getdatausbflash();
    console.log("Result usbflash list:", resusbflash.data);
    dispatch({ type: GET_USBFLASH, data: resusbflash.data });
  } catch (error) {
    console.log("Problem get usbflash", error);
  }
};

export const UpdateUsbFlashTable = (id, dataUsbFlash) => async () => {
  try {
    const resultdata = await get_usbflash.updateUsbFlashData(id, dataUsbFlash);
    console.log("Result update :", resultdata.data);
    return Promise.resolve(resultdata);
  } catch (error) {
    const errorres = error.response;
    console.log("Error from update:", error.response);
    return Promise.reject(errorres.data);
  }
};
