import http from "../http_common";

class DiscprintDataService {
  getdatadiscprint() {
    return http.get("api/discprint");
  }

  updateDiscprintData(id, data) {
    return http.put(`api/discprint/discprintedit/${id}`, data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  }
}

export default new DiscprintDataService();
