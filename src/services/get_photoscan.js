import http from "../http_common";

class PhotoscanDataService {
  getdataphotoscan() {
    return http.get("api/photoscan");
  }

  updatePhotoscanData(id, data) {
    return http.put(`api/photoscan/photoscanedit/${id}`, data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  }
}

export default new PhotoscanDataService();
