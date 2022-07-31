import http from "../http_common";

class FotoprintDataService {
  getdatafotoprint() {
    return http.get("api/photo");
  }

  updateFotoprintData(id, data) {
    return http.put(`api/photo/fotoprintedit/${id}`, data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  }
}

export default new FotoprintDataService();
