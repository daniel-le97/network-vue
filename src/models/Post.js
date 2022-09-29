export class Post {
  constructor(data) {
    this._id = data._id;
    this.body = data.body;
    this.imgUrl = data.imgUrl;
  }
}
