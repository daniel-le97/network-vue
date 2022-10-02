<template>
  <div class="card elevation-3 mx-4 my-2" v-if="post">
    <div class="card-header d-flex justify-content-between">
      <div class="d-flex align-items-center">
        <PostCreator :creator="post.creator" />
        <span class="ms-3">{{ post.creator.name }}</span>
      </div>
      <div class="dropdown" >
        <i
          class="mdi mdi-pencil-off"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        ></i>
        <ul class="dropdown-menu">
         
          <li>
            <a class="dropdown-item" @click="deletePost(post.id)">Delete</a>
          </li>
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
      <div class="d-flex align-items-center">
        <span class="fs-4">{{ post.likesLength }} </span>
        <button
          class="btn btn-small p-0 border-0"
          type="button"
          :disabled="!user.isAuthenticated"
          @click="likePost(post.id)"
        >
          <i
            class="fs-3 text-danger mdi mdi-heart"
            v-if="post.likedAlready == true"
          ></i>
          <i v-else class="mdi mdi-heart fs-3 text-primary"></i>
        </button>
      </div>
    </div>
  </div>
  
</template>

<script>
import { computed } from "@vue/reactivity";
import { AppState } from "../AppState.js";
import { Post } from "../models/Post.js";
import { AuthService } from "../services/AuthService.js";
import { postsService } from "../services/PostsService.js";
import Pop from "../utils/Pop.js";
import PostCreator from "./PostCreator.vue";
import { ref, watchEffect } from "vue";
import PostForm from "./PostForm.vue";


export default {
  props: {
    post: {
      type: Post,
      required: true,
    },
  },
  setup(props) {
    // const editable = ref({})
    //  watchEffect(() => {
    //   editable.value = { ...AppState.activePost };
    // });
    return {
      // editable,
      //  async editPost(id){
      //   try {
      //       await postsService.editPost(id)
      //     } catch (error) {
      //       console.error('[]',error)
      //       Pop.error(error)
      //     }
        
        
       
      //   },
      async deletePost(id) {
        try {
          await postsService.deletePost(id);
        } catch (error) {
          Pop.error(error, "[deletePost]");
        }
      },
      async likePost(id) {
        try {
          await postsService.likePost(id);
        } catch (error) {
          Pop.error(error, "[likePost]");
        }
      },
      user: computed(() => AppState.user),
      posts: computed(() => AppState.posts),
      account: () => AppState.account,
    };
  },
  components: { PostCreator, PostForm },
};
</script>

<style lang="scss" scoped>
.center {
  top: 12px;
  left: 13px;
}
</style>
