import get_calendar from "../../../services/get_calendar";
import { GET_CALENDAR } from "../../actionTypes";

export const GetCalendars = () => async (dispatch) => {
  try {
    const rescalendar = await get_calendar.getdatacalendar();
    console.log("Result calendar list:", rescalendar.data);
    dispatch({ type: GET_CALENDAR, data: rescalendar.data });
  } catch (error) {
    console.log("Problem get calendar", error);
  }
};

export const UpdateCalendarTable = (id, dataCalendar) => async () => {
  try {
    const resultdata = await get_calendar.updateCalendarData(
      id,
      dataCalendar
    );
    console.log("Result update :", resultdata.data);
    return Promise.resolve(resultdata);
  } catch (error) {
    const errorres = error.response;
    console.log("Error from update:", error.response);
    return Promise.reject(errorres.data);
  }
};

export const ChangeCalendarByPercent = (percentvalue) => async () => {
  try {
    const result = await get_calendar.changePriceCalendarByPercent(percentvalue);
    console.log("Percent value for calendar:", percentvalue);
    console.log("Result status:", result.status);
    return Promise.resolve(result.status);
  } catch (error) {
    const errorsdata = error.response;
    return Promise.reject(errorsdata.data);
  }
};
