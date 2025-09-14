import axios from "axios";
import { ScheduleEndpoints } from "src/models";
import { loadAbort } from "src/utilities";

export class ScheduleService {
  private static API_URL = `${import.meta.env.VITE_API_URL}/schedule`;

  static createSchedule(data: any) {
    const controller = loadAbort();
    return {
      call: axios.post(`${this.API_URL}/${ScheduleEndpoints.create}`, data),
      controller,
    };
  }
}
