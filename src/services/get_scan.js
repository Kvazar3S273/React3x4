import http from "../http_common";

class ScanDataService {
  getdatascan() {
    return http.get("api/scanning");
  }

  updateScanData(id, data) {
    return http.put(`api/scanning/scanningedit/${id}`, data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  }
}

export default new ScanDataService();
