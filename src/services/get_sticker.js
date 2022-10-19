import http from "../http_common";

class StickerDataService {
  getdatasticker() {
    return http.get("api/sticker");
  }

  updateStickerData(id, data) {
    return http.put(`api/sticker/stickeredit/${id}`, data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  }

  changePriceStickerByPercent(valuePercentData) {
    return http.put(`api/sticker/stickereditbypercent/${valuePercentData}`, valuePercentData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  }

}

export default new StickerDataService();
