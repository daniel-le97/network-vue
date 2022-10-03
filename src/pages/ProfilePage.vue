<template>
  <div class="profile-page" v-if="profile">
    <!--  -->

    <div class="container-fluid">
      <div class="row">
        <div class="col-12 p-0">
          <ProfileDetail :profile="profile" v-if="profile" />
        </div>
      </div>
      <div class="row">
        <div class="col-12 d-flex justify-content-center gap-5">
          <button
            class="btn btn-info"
            @click="changePost(previousPage)"
            :disabled="!previousPage"
          >
            Newer Post
          </button>
          <button
            class="btn btn-success"
            @click="changePost(nextPage)"
            :disabled="!nextPage"
          >
            Older Post
          </button>
        </div>
      </div>
    </div>
    <PostsCard v-for="p in posts" :key="p.id" :post="p" />
    <!--  -->
  </div>
  <div v-else>
    <img
      src="https://cdn.dribbble.com/users/882457/screenshots/7945812/media/6cd78297ad33b66fe9cf6c7408e1d252.gif"
      class="img-fluid"
      alt=""
    />
  </div>
</template>

<script>
import { onMounted } from "vue";
import { useRoute } from "vue-router";
import { profilesService } from "../services/ProfileService.js";
import Pop from "../utils/Pop.js";
import ProfileDetail from "../components/ProfileDetail.vue";
import { computed } from "@vue/reactivity";
import { AppState } from "../AppState";
import PostsCard from "../components/PostsCard.vue";
import { postsService } from "../services/PostsService.js";

export default {
  setup() {
    const route = useRoute();
    async function getProfileById() {
      try {
        await profilesService.getProfileById(route.params.id);
        document.documentElement.scrollTop = 0;
      } catch (error) {
        Pop.error(error, "[GettingProfile]");
      }
    }
    async function getPostsByProfileId() {
      try {
        await profilesService.getPostsByProfileId(route.params.id);
      } catch (error) {
        Pop.error(error, "[GettingPostsByProfileId]");
      }
    }
    onMounted(() => {
      getProfileById();
      getPostsByProfileId();
    });
    return {
      profile: computed(() => AppState.activeProfile),
      posts: computed(() => AppState.posts),
      previousPage: computed(() => AppState.previousPage),
      nextPage: computed(() => AppState.nextPage),
      async changePost(pageUrl) {
        try {
          await postsService.getPosts(pageUrl);
        } catch (error) {
          console.error("[]", error);
          Pop.error(error);
        }
      },
    };
  },
  components: { ProfileDetail, PostsCard },
};
</script>

<style lang="scss" scoped>
.btn {
  box-shadow: 0 20px 20px -17px rgb(8, 193, 193);
}
.btn:hover {
  transform: scale(1.1);
  box-shadow: 0 30px 45px -15px rgba(0, 110, 255, 0.985);
}
</style>
