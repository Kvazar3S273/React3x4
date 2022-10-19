import http from "../http_common";

class PvcDataService {
  getdatapvc() {
    return http.get("api/pvc");
  }

  updatePvcData(id, data) {
    return http.put(`api/pvc/pvcedit/${id}`, data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  }

  changePricePvcByPercent(valuePercentData) {
    return http.put(`api/pvc/pvceditbypercent/${valuePercentData}`, valuePercentData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  }

}

export default new PvcDataService();
