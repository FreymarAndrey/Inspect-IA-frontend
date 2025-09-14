export class CustomStorage {
  static get token() {
    return localStorage.getItem("x-auth-token") || "";
  }

  static set token(token: string) {
    localStorage.setItem("x-auth-token", token);
  }

  static removeToken() {
    localStorage.removeItem("x-auth-token");
  }

  static cleanTokens() {
    localStorage.clear();
  }
}
