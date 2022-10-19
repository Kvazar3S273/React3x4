import get_sticker from "../../../services/get_sticker";
import { GET_STICKER } from "../../actionTypes";

export const GetStickers = () => async (dispatch) => {
  try {
    const ressticker = await get_sticker.getdatasticker();
    console.log("Result sticker list:", ressticker.data);
    dispatch({ type: GET_STICKER, data: ressticker.data });
  } catch (error) {
    console.log("Problem get sticker", error);
  }
};

export const UpdateStickerTable = (id, dataSticker) => async () => {
  try {
    const resultdata = await get_sticker.updateStickerData(
      id,
      dataSticker
    );
    console.log("Result update :", resultdata.data);
    return Promise.resolve(resultdata);
  } catch (error) {
    const errorres = error.response;
    console.log("Error from update:", error.response);
    return Promise.reject(errorres.data);
  }
};

export const ChangeStickerByPercent = (percentvalue) => async () => {
  try {
    const result = await get_sticker.changePriceStickerByPercent(percentvalue);
    console.log("Percent value for Sticker:", percentvalue);
    console.log("Result status:", result.status);
    return Promise.resolve(result.status);
  } catch (error) {
    const errorsdata = error.response;
    return Promise.reject(errorsdata.data);
  }
};
