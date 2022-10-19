import http from "../http_common";

class BirkaDataService {
  getdatabirka() {
    return http.get("api/birka");
  }

  updateBirkaData(id, data) {
    return http.put(`api/birka/birkaedit/${id}`, data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  }

  changePriceBirkaByPercent(valuePercentData) {
    return http.put(`api/birka/birkaeditbypercent/${valuePercentData}`, valuePercentData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  }

}

export default new BirkaDataService();
