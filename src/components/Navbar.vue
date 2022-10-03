<template>
  <nav
    class="navbar navbar-expand-lg navbar-dark bg-dark px-3 myBar align-content-center align-items-center"
  >
    <router-link
      @click="refreshPage()"
      class="navbar-brand d-flex selectable rounded order-first ms-sm-5 btn hover"
      :to="{ name: 'Home' }"
    >
      <div class="d-flex flex-row align-items-center">
        <img
          alt="logo"
          src="../assets/img/undraw_Dog_re_is6r.png"
          height="45"
          class="rounded"
        />
        <span class="ms-5">the DogPack</span>
      </div>
    </router-link>

    <login />
    <search-form class="order-sm-last order-md-first" />
  </nav>
</template>

<script>
import { computed } from "@vue/reactivity";
import { useRoute, useRouter } from "vue-router";
import { AppState } from "../AppState.js";
import { router } from "../router.js";
import { postsService } from "../services/PostsService.js";
import Pop from "../utils/Pop.js";
import Login from "./Login.vue";
import SearchForm from "./SearchForm.vue";
import Login1 from "./Login.vue";
export default {
  setup() {
    const router = useRouter();
    return {
      user: computed(() => AppState.user),
      account: computed(() => AppState.account),
      async refreshPage() {
        try {
          AppState.posts = [];
          AppState.profiles = [];
          await router.push({ name: "Home" });
          await postsService.getPosts();
        } catch (error) {
          Pop.error(error);
        }
      },
      async login() {
        AuthService.loginWithPopup();
      },
      async logout() {
        AuthService.logout({ returnTo: window.location.origin });
      },
      async sendToProfile() {
        try {
          await router.push({
            name: "Profile",
            params: { id: this.account.id },
          });
        } catch (error) {
          console.error("[]", error);
          Pop.error(error);
        }
      },
    };
  },
  components: { Login, SearchForm, Login1 },
};
</script>

<style scoped>
@media screen And (max-width: 768px) {
  .myBar {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
}
.myBar {
  display: flex;
  justify-content: space-between;
}
a:hover {
  text-decoration: none;
}
.hover:hover {
  transform: scale(1.1);
}

.nav-link {
  text-transform: uppercase;
}

.navbar-nav .router-link-exact-active {
  border-bottom: 2px solid var(--bs-success);
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}
</style>
