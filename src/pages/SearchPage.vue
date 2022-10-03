<template>
  <div class="text-center">

    <span class="fw-bold" v-if="profiles">Profiles</span>
  </div>
  <ProfilesCard class="wide "/>
  <!-- <div class="container" v-if="profile.account">
    <div class="row flex-wrap">
      <router-link :to="{ name: 'Profile', params: { id: profile.account.id } }" 
      v-for="p in profiles.account" :key="p.id" :profile.account="p">
        <div class="card elevation-3 mx-4 my-2" >
          <div class="d-flex justify-content-center">
            <img
              src="https://d2ph5fj80uercy.cloudfront.net/04/cat3676.jpg"
              alt=""
              class="img-fluid rounded  elevation-4"
            />
          </div>
        </div>

      </router-link>
      
    </div>
  </div> -->
  <div class="text-center">
    <span class="fw-bold">Posts</span>
  </div>

  <PostsCard v-for="p in posts" :post="p" />
</template>

<script>
import ProfilesCard from "../components/ProfilesCard.vue";
import PostsCard from "../components/PostsCard.vue";
import { computed } from "@vue/reactivity";
import { AppState } from "../AppState.js";
export default {
  setup() {
    return {
      user: computed(() => AppState.user),
      posts: computed(() => AppState.posts),
      profiles:computed(() => AppState.profiles)
    };
  },
  components: { ProfilesCard, PostsCard },
};
</script>

<style lang="scss" scoped>
.wide {
  width: 25rem;
}

</style>
