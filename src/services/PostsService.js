import { AppState } from "../AppState.js";
import { Like } from "../models/Like.js";
import { Post } from "../models/Post.js";
import { logger } from "../utils/Logger.js";
import { api, postServer } from "./AxiosService.js";

class PostsService {
  async getPosts(pageUrl = "") {
    const res = await postServer.get(pageUrl);
    // logger.log(res.data);
    console.log(res.data.posts);
    AppState.posts = res.data.posts.map((p) => new Post(p));
    AppState.nextPage = res.data.older;
    AppState.previousPage = res.data.newer;
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
    const res = await api.post(`/api/posts/${id}/like`, id);
    console.log(res.data);
    // AppState.posts.map(p => {
    //   if (p.id == id) {
    //     p.likes = res.data.likes.map(l => new Like(l))
    //   }
    // })

  
  }
}
export const postsService = new PostsService();
// let thisLikes = res.data.likes.map((l) => new Like(l));
// console.log(thisLikes);
// let post = new Post(res.data);

// let thesePost = AppState.posts.filter((p) => p.id !== id);
// AppState.posts = [new Post(res.data), ...thesePost];

// thisPost.likes = [...thisPost.likes, thisLikes];
// AppState.posts = AppState.posts
// // thisPost.likesIds = [...thisPost.likesIds, id];
// let thisPost = AppState.posts.find((p) => p.id == id);
// let num = AppState.posts.indexOf(thisPost);
// let num2 = num.parseInt()
// AppState.posts[num2] = new Post(res.data);
// console.log(AppState.post[num2]);

//   let newArray = AppState.posts.splice(num, 1);
//   console.log(newArray);
//  let okay = AppState.posts.push(num, post);
//  AppState.posts = okay
//   console.log(AppState.posts);
// console.log(thisPost, "post");
