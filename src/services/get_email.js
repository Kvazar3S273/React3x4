import http from "../http_common";

class EmailDataService {
  getdataemail() {
    return http.get("api/email");
  }

  updateEmailData(id, data) {
    return http.put(`api/email/emailedit/${id}`, data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  }
}

export default new EmailDataService();
