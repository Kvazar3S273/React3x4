import http from "../http_common";

class FotoprintDataService {
  getdatafotoprint() {
    return http.get("api/fotoprint");
  }

  updateFotoprintData(id, data) {
    return http.put(`api/fotoprint/fotoprintedit/${id}`, data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  }
}

export default new FotoprintDataService();
