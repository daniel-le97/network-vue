import { AppState } from "../AppState.js";
import { Lad } from "../models/Lad.js";
import { logger } from "../utils/Logger.js";
import { api } from "./AxiosService.js";

class LadsService {
  async getLads() {
    const res = await api.get("/api/ads");
   
    logger.log(res.data);
    AppState.lads = res.data.map((l) => new Lad(l));
    // logger.log(AppState.lads);
  }
}
export const ladsService = new LadsService();
