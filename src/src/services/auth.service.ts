import axios from "axios";
import { AuthEndpoints } from "src/models";
import { loadAbort } from "src/utilities";

export class AuthService {
  private static API_URL = `${import.meta.env.VITE_API_URL}/auth`;

  static register(data: any) {
    const controller = loadAbort();
    return {
      call: axios.post(`${this.API_URL}/${AuthEndpoints.register}`, data),
      controller,
    };
  }

  static login(email: string, password: string) {
    const controller = loadAbort();
    return {
      call: axios.post(`${this.API_URL}/${AuthEndpoints.login}`, {
        email,
        password,
      }),
      controller,
    };
  }
}
