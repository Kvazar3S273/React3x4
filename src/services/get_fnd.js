import http from "../http_common";

class FndDataService {
  getdatafnd() {
    return http.get("api/fnd");
  }

  updateFndData(id, data) {
    return http.put(`api/fnd/fndedit/${id}`, data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  }
}

export default new FndDataService();
