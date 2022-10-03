<template>
  <div class="d-flex justify-content-center gap-5 mt-3 sticky">
    <button
      class="btn btn-info"
      @click="changePage(previousPage)"
      :disabled="!previousPage"
    >
      Older
    </button>
    <button
      class="btn btn-success"
      @click="changePage(nextPage)"
      :disabled="!nextPage"
    >
      NEXT
    </button>
  </div>
  <div>
    <PostForm v-if="user" />
  </div>
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
import PostForm from "../components/PostForm.vue";
import ProfilesCard from "../components/ProfilesCard.vue";

export default {
  setup() {
    async function getPosts() {
      try {
        await postsService.getPosts();
        // postsService.getLikes();
      } catch (error) {
        Pop.error(error, "[getPosts]");
      }
    }
    //  function handleScroll(){
    //       if (
    //         window.scrollY + window.innerHeight >=
    //         document.body.scrollHeight - 50
    //       ) {
    //           this.getPosts();
    //         window.screenTop;
    //       }
    //     }
    onMounted(() => {
      getPosts();
      // handleScroll()
    });
    return {
      user: computed(() => AppState.user),
      posts: computed(() => AppState.posts),
      nextPage: computed(() => AppState.nextPage),
      previousPage: computed(() => AppState.previousPage),
      profiles: computed(() => AppState.profiles),
      // handleScroll() {
      //   if (
      //     window.scrollY + window.innerHeight >=
      //     document.body.scrollHeight - 50
      //   ) {
      //     this.getPosts();
      //     window.screenTop;
      //   }
      // },

      async changePage(pageUrl) {
        try {
          await postsService.getPosts(pageUrl);
        } catch (error) {
          console.error("[]", error);
          Pop.error(error);
        }
      },
    };
  },
  components: { PostsCard, PostForm, ProfilesCard },
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
.btn:hover {
  transform: scale(1.03);
}
</style>
