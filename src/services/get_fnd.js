import http from "../http_common";

class FndDataService {
  getdatafnd() {
    return http.get("api/photo");
  }

  updateFndData(id, data) {
    return http.put(`api/photo/fndedit/${id}`, data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  }
}

export default new FndDataService();
