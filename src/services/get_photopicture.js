import http from "../http_common";

class PhotopictureDataService {
  getdataphotopicture() {
    return http.get("api/photopicture");
  }

  updatePhotopictureData(id, data) {
    return http.put(`api/photopicture/photopictureedit/${id}`, data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  }
}

export default new PhotopictureDataService();
