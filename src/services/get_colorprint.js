import http from "../http_common";

class ColorPrintDataService {
  getdatacolorprint() {
    return http.get("api/colorprint");
  }

  updateColorPrintData(id, data) {
    return http.put(`api/colorprint/colorprintedit/${id}`, data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  }
}

export default new ColorPrintDataService();
