<template>
  <div class="card elevation-3 mx-4 my-2">
    <div class="card-header d-flex justify-content-between">
      <div class="d-flex align-items-center">
        <PostCreator :creator="post.creator" />
        <span class="ms-3">{{ post.creator.name }}</span>
      </div>
      <div class="dropdown" v-if="user.id == post.creator.id">
        <i
          class="mdi mdi-pencil-off"
         
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        ></i>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item">Edit</a></li>
          <li><a class="dropdown-item" @click="deletePost(post.id)">Delete</a></li>
        </ul>
      </div>
    </div>
    <div class="card-body">
      <div class="w-100 h-25">
        <img :src="post.imgUrl" alt="" class="img-fluid rounded elevation-4" />
      </div>
      <div class="">{{ post.body }}</div>
    </div>
    <div class="card-footer d-flex justify-content-between">
      <span class="align-self-center">{{ post.createdAt }}</span>
      <i class="mdi mdi-heart fs-1 text-danger position-relative"
      type="button"
       @click="likePost(post.id)"><span class="fs-4 text-white position-absolute center">{{ post.likesLength }}</span></i
      >
    </div>
  </div>
</template>

<script>
import { computed } from "@vue/reactivity";
import { AppState } from "../AppState.js";
import { Post } from "../models/Post.js";
import { postsService } from "../services/PostsService.js";
import Pop from "../utils/Pop.js";
import PostCreator from "./PostCreator.vue";

export default {
  props: {
    post: {
      type: Post,
      required: true,
    },
  },
  setup(props) {
    return {
       async deletePost(id){
        try {
            await postsService.deletePost(id)
          } catch (error) {
            Pop.error(error,'[deletePost]')
          }
       
        },
         async likePost(id){
          try {
              await postsService.likePost(id)
            } catch (error) {
              Pop.error(error,'[likePost]')
            }
         
          },
        user: computed(()=> AppState.account)
    };
  },
  components: { PostCreator },
};
</script>

<style lang="scss" scoped>
  .center{
    top: 12px;
    left: 13px;
  }
</style>
