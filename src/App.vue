<template>
  <body>
    <header class="container-fluid">
      <div class="row justify-content-end">
        <div class="col-12 p-0">
          <Navbar />
        </div>
      </div>
    </header>
    <main>
      <div class="container-fluid">
        <div class="row">
          <div class="col-2  d-none d-md-block p-0">
            <div class="bg-dark">
               <ProfileDetail :profile="account" v-if="account"/>
            </div>
          </div>
          <div class="col-md-8  p-0">
            <router-view />
          </div>
          <div class="col-2 p-0 d-none d-md-block">
            <div class="">

              <Lads v-for="l in lads" :lad="l"/>
            </div>
          </div>
        </div>
      </div>
    </main>
  </body>
</template>

<script>
import { computed, onMounted } from "vue";
import { AppState } from "./AppState";
import Navbar from "./components/Navbar.vue";
import Login from "./components/Login.vue";
import Login1 from "./components/Login.vue";
import Lads from "./components/Lads.vue";
import Pop from "./utils/Pop.js";
import { ladsService } from "./services/LadsService.js";
import { postsService } from "./services/PostsService.js";
import ProfileDetail from "./components/ProfileDetail.vue";

export default {
  setup() {
    async function getLads() {
      try {
        await ladsService.getLads()
      } catch (error) {
        Pop.error(error, "[GetLads]");
      }
    }
    // async function getLikes(){
    //   try {
    //       await postsService.getLikes()
    //     } catch (error) {
    //       Pop.error(error)
    //     }
    // }
    onMounted(() => {
      getLads();
      // getLikes()
    });
    return {
      appState: computed(() => AppState),
      lads: computed(() => AppState.lads),
      account: computed(() => AppState.account)
    };
  },
  components: { Navbar, Login, Login1, Lads, ProfileDetail },
};
</script>
<style lang="scss">
.height {
  min-height: 100vh;
}
@import "./assets/scss/main.scss";
</style>

<!-- <Navbar /> -->
