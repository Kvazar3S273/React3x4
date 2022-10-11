import http from "../http_common";

class LaminateDataService {
  getdatalaminate() {
    return http.get("api/laminate");
  }

  updateLaminateData(id, data) {
    return http.put(`api/laminate/laminateedit/${id}`, data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  }
}

export default new LaminateDataService();
