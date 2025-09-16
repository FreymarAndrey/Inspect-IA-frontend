import axios from "axios";
import { AuthEndpoints } from "src/models";
import { loadAbort } from "src/utilities";

export class AuthService {
  private static API_URL = `https://app-bc7f91f1-a99f-4712-b2a3-481e0a1772ac.cleverapps.io/api/v1/auth`;

  static register(data: any) {
    const controller = loadAbort();
    return {
      call: axios.post(`${this.API_URL}/${AuthEndpoints.register}`, data),
      controller,
    };
  }

  static login(email: string, password: string) {
    const controller = loadAbort();
    console.log(import.meta.env);
    console.log(import.meta.env.VITE_API_URL);
    return {
      call: axios.post(`${this.API_URL}/${AuthEndpoints.login}`, {
        email,
        password,
      }),
      controller,
    };
  }
}
