import http from "../http_common";

class PercentService {
  changeByPercent(data) {
    return http.put(`api/test/testedit/${data}`, data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  }
}

export default new PercentService();
