import { Account } from "./Account.js";
import { Like } from "./Like.js";

export class Post {
  constructor(data) {
    this.id = data.id;
    this.body = data.body;

    this.imgUrl = data.imgUrl;
    this.likesLength = data.likes.length;
    this.likes = data.likes.map((l) => new Like(l));
    this.createdAt = new Date(data.createdAt).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "numeric",
    });
    this.creator = new Account(data.creator);
    this.likedAlready = data.likedAlready || false;
    this.likeIds = data.likeIds;
  }
}
