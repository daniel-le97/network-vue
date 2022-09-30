<template>
  <div class="card elevation-3 mx-4 my-2">
    <div class="card-header d-flex align-items-center">
      <PostCreator :creator="post.creator" />
      <span class="ms-3">{{ post.creator.name }}</span>
    </div>
    <div class="card-body">
      <div class="w-100 h-25">
        <img :src="post.imgUrl" alt="" class="img-fluid rounded elevation-4" />
      </div>
      <div class="">{{ post.body }}</div>
    </div>
    <div class="card-footer d-flex justify-content-between">
      <span class="align-self-center">{{ post.createdAt }}</span>
      <i class="mdi mdi-heart fs-1 text-danger"
        ><span class="fs-4">{{ post.likes }}</span></i
      >
    </div>
  </div>
</template>

<script>
import { Post } from "../models/Post.js";
import PostCreator from "./PostCreator.vue";

export default {
  props: {
    post: {
      type: Post,
      required: true,
    },
  },
  setup() {
    return {};
  },
  components: { PostCreator },
};
</script>

<style lang="scss" scoped></style>
