<template>
  <div class="card elevation-3 mx-4 my-2" v-if="post">
    <div class="card-header d-flex justify-content-between ">
  
      <div class="d-flex align-items-center">
        <PostCreator :creator="post.creator" class="wide " />
        <!-- <span class="ms-3">{{ post.creator.name }}</span> -->
      </div>
      <div class="dropdown" v-if="account.id == post.creator.id">
        <i
          class="mdi mdi-delete ms-5 "
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
      <div class=" mt-2 fw-bold">{{ post.body }}</div>
    </div>
    <img :src="post.imgUrl" @error="newImage" alt="" class="img-fluid rounded elevation-4" v-if="post.imgUrl" />
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
       newImage(e) {
        e.target.src = "/src/assets/img/28B33A1C-9752-47A3-BF8A-F523EFB2408D.png";
        
      },
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
      account: computed(() => AppState.account),
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
img{
  height: 25rem;
}

</style>
