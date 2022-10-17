import { GET_CALENDAR } from "../../constants/actionTypes";

const initialState = {
  listcalendars: [],
};

function calendarReducer(state = initialState, action) {
  const { type, data } = action;
  console.log("Reducer calendar data :", data);

  switch (type) {
    case GET_CALENDAR: {
      return {
        listcalendars: data,
      };
    }

    default:
      return state;
  }
}
export default calendarReducer;
	