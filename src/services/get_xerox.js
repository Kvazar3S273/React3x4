import http from "../http_common";

class XeroxDataService {
  getdataxerox() {
    return http.get("api/xerox");
  }

  updateXeroxData(id, data) {
    return http.put(`api/xerox/xeroxedit/${id}`, data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  }
}

export default new XeroxDataService();
