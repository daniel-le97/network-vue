export class Account {
  constructor(data) {
    this.id = data.id || data._id
    this.email = data.email;
    this.name = data.name;
    this.picture =
      data.picture ||
      "https://i.pinimg.com/550x/18/b9/ff/18b9ffb2a8a791d50213a9d595c4dd52.jpg";
    this.graduated = data.graduated || false
    this.bio = data.bio;
    this.github = data.github;
    this.linkedin = data.linkedin;
    this.resume = data.resume;
    this.coverImg = data.coverImg;
    this.class = data.class
    // TODO add additional properties if needed
  }
}
