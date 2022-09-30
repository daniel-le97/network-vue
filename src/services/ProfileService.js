import { AppState } from "../AppState.js";
import { Account } from "../models/Account.js";
import { Post } from "../models/Post.js";
import { logger } from "../utils/Logger.js";
import { api } from "./AxiosService.js";

class ProfilesService {
  async getProfileById(id) {
    const res = await api.get(`/api/profiles/${id}`);
    AppState.activeProfile = new Account(res.data);
    logger.log(AppState.activeProfile);
  }
  async getPostsByProfileId(id) {
    const res = await api.get(`/api/profiles/${id}/posts`);
    AppState.posts = res.data.posts.map((p) => new Post(p));
    logger.log(AppState.posts);
    // logger.log(AppState.posts);
  }
}
export const profilesService = new ProfilesService();
