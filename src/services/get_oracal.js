import http from "../http_common";

class OracalDataService {
  getdataoracal() {
    return http.get("api/oracal");
  }

  updateOracalData(id, data) {
    return http.put(`api/oracal/oracaledit/${id}`, data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  }

  changePriceOracalByPercent(valuePercentData) {
    return http.put(`api/oracal/oracaleditbypercent/${valuePercentData}`, valuePercentData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  }

}

export default new OracalDataService();
