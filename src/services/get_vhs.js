import http from "../http_common";

class VhsDataService {
  getdatavhs() {
    return http.get("api/vhs");
  }

  updateVhsData(id, data) {
    return http.put(`api/vhs/vhsedit/${id}`, data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  }
}

export default new VhsDataService();
