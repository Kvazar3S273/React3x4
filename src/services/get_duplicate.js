import http from "../http_common";

class DuplicateDataService {
  getdataduplicate() {
    return http.get("api/duplicate");
  }

  updateDuplicateData(id, data) {
    return http.put(`api/duplicate/duplicateedit/${id}`, data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  }
}

export default new DuplicateDataService();
