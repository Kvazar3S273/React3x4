import http from "../http_common";

class CalendarDataService {
  getdatacalendar() {
    return http.get("api/calendar");
  }

  updateCalendarData(id, data) {
    return http.put(`api/calendar/calendaredit/${id}`, data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  }

  changePriceCalendarByPercent(valuePercentData) {
    return http.put(`api/calendar/calendareditbypercent/${valuePercentData}`, valuePercentData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  }

}

export default new CalendarDataService();
