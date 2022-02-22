import http from "../http_common";

class AuthService {
//   login(data) {
//     return http.post("api/public/login", data);
//   }
  register(data) {
    return http.post("api/account/register", data);
  }
}

export default new AuthService();
