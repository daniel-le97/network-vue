<template>
  <div class="post-card">
    <div class="card elevation-3 mx-4 my-2">
      <div class="w-100 h-25">
        <img
          :src="post.imgUrl"
          alt=""
          class="img-fluid rounded elevation-4"
        />
      </div>
      <div class="card-body">
        <div class="border-bottom border-dark border-3">
          <h5>Title</h5>
        </div>
        <div class="d-flex justify-content-end text-shadow mt-2">
          <h6>PlaceHolder Text</h6>
        </div>
        <div>
          <small>{{ post.body }}</small>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Post } from "../models/Post.js";

export default {
  props: {
    post: {
      type: Post,
      required: true,
    },
  },
  setup(props) {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
