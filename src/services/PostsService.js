import { watchEffect } from "vue";
import { AppState } from "../AppState.js";
import { Like } from "../models/Like.js";
import { Post } from "../models/Post.js";
import { logger } from "../utils/Logger.js";
import { saveState } from "../utils/Store.js";
import { api, postServer } from "./AxiosService.js";

class PostsService {
  async getPosts(pageUrl = "") {
    AppState.posts = [];
    const res = await postServer.get(pageUrl);
    // logger.log(res.data);
    // console.log(res.data.posts);
    AppState.postsTwo = res.data.posts.map((p) => new Post(p));
    AppState.posts = [...AppState.posts, ...AppState.postsTwo];
    AppState.nextPage = res.data.older;
    AppState.previousPage = res.data.newer;
    AppState.totalPages = res.data.totalPages;

    // console.log(AppState.posts);
    // this.getLikes();
    // console.log(AppState.nextPage);
    // console.log(AppState.previousPage);
    // logger.log(AppState.posts , 'getPost()');
  }
  async createPost(formData) {
    logger.log(formData);
    console.log(AppState.user);
    formData.creatorId = AppState.account.id;
    const res = await api.post("/api/posts", formData);
    console.log(res.data);
    AppState.posts = [new Post(res.data), ...AppState.posts];
  }
  async deletePost(id) {
    console.log(id);
    const res = await api.delete(`/api/posts/${id}`);
    const newPosts = AppState.posts.filter((p) => p.id !== id);

    AppState.posts = newPosts;
  }
  async likePost(id) {
    const res = await api.post(`/api/posts/${id}/like`);
    console.log(res.data);

    let thisPost = AppState.posts.findIndex((p) => p.id == id);
    // let like = new Post(res.data);
    // console.log(like);

    AppState.posts.splice(thisPost, 1, new Post(res.data));
    // this.getLikes();
    // AppState.posts.forEach((p) => {
    //   let thisId = AppState.account.id;
    //   p.likes.forEach((l) => {
    //     if (l.id == thisId) {
    //       p.likedAlready = true;
    //     }
    //   });
    //   console.log(AppState.posts);
    // });
    // this.getLikes();
  }
  // getLikes() {
  //   AppState.posts.forEach((p) => {
  //     let thisId = AppState.account.id;
  //     p.likes.forEach((l) => {
  //       if (l.id == thisId) {
  //         p.likedAlready = true;
  //       }
  //     });
  //     // console.log(AppState.posts);
  //   });
  // }
  async getPostsBySearchTerm(term, page = "") {
    const res = await postServer.get("", {
      params: {
        query: term,
        page,
      },
    });
    console.log(res);
    AppState.posts = [];
    AppState.posts = res.data.posts.map((p) => new Post(p));
    AppState.nextPage = res.data.older;
    AppState.previousPage = res.data.newer;
    AppState.totalPages = res.data.totalPages;
  }
  // async testFunction(term) {
  //   console.log(term);
  // }
  // // async editPost(id){
  // //   const res = await api.get(`/api/posts/${id}`);
  // //   AppState.activePost = new Post(res.data)
  // //   console.log(AppState.activePost)
  // this would still need a  handleSubmit to put

  // // }
}
export const postsService = new PostsService();
