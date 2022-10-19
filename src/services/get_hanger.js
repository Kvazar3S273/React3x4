import http from "../http_common";

class HangerDataService {
  getdatahanger() {
    return http.get("api/hanger");
  }

  updateHangerData(id, data) {
    return http.put(`api/hanger/hangeredit/${id}`, data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  }

  changePriceHangerByPercent(valuePercentData) {
    return http.put(`api/hanger/hangereditbypercent/${valuePercentData}`, valuePercentData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  }

}

export default new HangerDataService();
