import http from "../http_common";

class UsbFlashDataService {
  getdatausbflash() {
    return http.get("api/usbflash");
  }

  updateUsbFlashData(id, data) {
    return http.put(`api/usbflash/usbflashedit/${id}`, data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  }
}

export default new UsbFlashDataService();
