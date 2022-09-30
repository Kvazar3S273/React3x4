import http from "../http_common";

class VisitcardDataService {
  getdatavisitcard() {
    return http.get("api/visitcard");
  }

  updateVisitcardData(id, data) {
    return http.put(`api/visitcard/visitcardedit/${id}`, data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  }
}

export default new VisitcardDataService();
