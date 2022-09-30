<template>
  <div>
    <PostsCard v-for="p in posts" :post="p" />
  </div>
</template>

<script>
import { computed } from "@vue/reactivity";
import { onMounted } from "vue";
import { AppState } from "../AppState.js";
import { postsService } from "../services/PostsService.js";
import Pop from "../utils/Pop.js";
import PostsCard from "../components/PostsCard.vue";

export default {
  setup() {
    async function getPosts() {
      try {
        await postsService.getPosts();
      } catch (error) {
        Pop.error(error, "[getPosts]");
      }
    }
    onMounted(() => {
      getPosts();
    });
    return {
      posts: computed(() => AppState.posts),
    };
  },
  components: { PostsCard },
};
</script>

<style scoped lang="scss">
.home {
  display: grid;
  height: 80vh;
  place-content: center;
  text-align: center;
  user-select: none;

  .home-card {
    width: 50vw;

    > img {
      height: 200px;
      max-width: 200px;
      width: 100%;
      object-fit: contain;
      object-position: center;
    }
  }
}
</style>
