import get_scan from "../../../services/get_scan";
import { GET_SCAN } from "../../actionTypes";

export const GetScans = () => async (dispatch) => {
  try {
    const resscan = await get_scan.getdatascan();
    console.log("Result scan list:", resscan.data);
    dispatch({ type: GET_SCAN, data: resscan.data });
  } catch (error) {
    console.log("Problem get scan", error);
  }
};

export const UpdateScanTable = (id, dataScan) => async () => {
  try {
    const resultdata = await get_scan.updateScanData(id, dataScan);
    console.log("Result update :", resultdata.data);
    return Promise.resolve(resultdata);
  } catch (error) {
    const errorres = error.response;
    console.log("Error from update:", error.response);
    return Promise.reject(errorres.data);
  }
};
