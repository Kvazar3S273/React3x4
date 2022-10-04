import http from "../http_common";

class BlackPrintDataService {
  getdatablackprint() {
    return http.get("api/blackprint");
  }

  updateBlackPrintData(id, data) {
    return http.put(`api/blackprint/blackprintedit/${id}`, data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  }
}

export default new BlackPrintDataService();
