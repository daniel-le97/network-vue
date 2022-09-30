import { Account } from "./Account.js";

export class Post {
  constructor(data) {
    this.id = data.id;
    this.body = data.body;
    this.imgUrl = data.imgUrl;
    this.likes = data.likes.length;
    this.createdAt = new Date(data.createdAt).toLocaleDateString("en-US", {
      month: "short",
      year: "2-digit",
    });
    this.creator = new Account(data.creator);
  }
}
