import http from "../http_common";

class BinderDataService {
  getdatabinder() {
    return http.get("api/binder");
  }

  updateBinderData(id, data) {
    return http.put(`api/binder/binderedit/${id}`, data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  }
}

export default new BinderDataService();
