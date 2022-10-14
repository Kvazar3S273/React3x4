import http from "../http_common";

class FlyerDataService {
  getdataflyer() {
    return http.get("api/flyer");
  }

  updateVisitcardData(id, data) {
    return http.put(`api/flyer/flyeredit/${id}`, data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  }

  changePriceFlyerByPercent(valuePercentData) {
    return http.put(`api/flyer/flyereditbypercent/${valuePercentData}`, valuePercentData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  }

}

export default new FlyerDataService();
