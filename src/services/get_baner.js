import http from "../http_common";

class BanerDataService {
  getdatabaner() {
    return http.get("api/baner");
  }

  updateBanerData(id, data) {
    return http.put(`api/baner/baneredit/${id}`, data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  }

  changePriceBanerByPercent(valuePercentData) {
    return http.put(`api/baner/banereditbypercent/${valuePercentData}`, valuePercentData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  }

}

export default new BanerDataService();
