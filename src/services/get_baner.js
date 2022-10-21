import http from "../http_common";

class BanerDataService {
  getdatabaner() {
    return http.get("api/biner");
  }

  updateBanerData(id, data) {
    return http.put(`api/biner/bineredit/${id}`, data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  }

  changePriceBanerByPercent(valuePercentData) {
    return http.put(`api/biner/binereditbypercent/${valuePercentData}`, valuePercentData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  }

}

export default new BanerDataService();
