import { AppState } from "../AppState.js";
import { Account } from "../models/Account.js";
import { Post } from "../models/Post.js";
import { logger } from "../utils/Logger.js";
import { api } from "./AxiosService.js";
import { postsService } from "./PostsService.js";

class ProfilesService {
  async getProfileById(id) {
    const res = await api.get(`/api/profiles/${id}`);
    AppState.activeProfile = new Account(res.data);
    // logger.log(AppState.activeProfile);
  }
  async getPostsByProfileId(id) {
    const res = await api.get(`/api/profiles/${id}/posts`);
    // console.log(res.data);
    AppState.nextPage = res.data.older;
    AppState.previousPage = res.data.newer;
    AppState.posts = res.data.posts.map((p) => new Post(p));

    // logger.log(AppState.posts);
    // logger.log(AppState.posts);
  }
  async getProfilesBySearchTerm(term) {
    const res = await api.get("/api/profiles", {
      params: {
        query: term,
      },
    });
    // console.log(res.data);
    AppState.profiles = res.data.map((p) => new Account(p));
    // console.log(AppState.profiles);
  }
}
export const profilesService = new ProfilesService();
