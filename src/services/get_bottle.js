import http from "../http_common";

class BottleDataService {
  getdatabottle() {
    return http.get("api/bottle");
  }

  updateBottleData(id, data) {
    return http.put(`api/bottle/bottleedit/${id}`, data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  }
}

export default new BottleDataService();
