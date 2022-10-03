<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark px-3 d-flex justify-content-between align-content-center align-items-center">
    <router-link
      @click="refreshPage()"
      class="navbar-brand d-flex selectable rounded order-first ms-sm-5"
      :to="{ name: 'Home' }"
    >
      <div class="d-flex flex-row align-items-center">
        <img alt="logo" src="../assets/img/undraw_Dog_re_is6r.png" height="45" class=" rounded"/>
        <span class="ms-5">the DogPack</span>
      </div>
    </router-link>
    
    <login />
    <search-form class="order-sm-last order-md-first"/>
  
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
a:hover {
  text-decoration: none;
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
          <!-- <div class="dropdown">
         <div
        class="dropdown-toggle selectable"
        data-bs-toggle="dropdown"
        aria-expanded="false"
        id="smallDrop"
      >
        <div v-if="account.picture || user.picture">
          <img
            :src="account.picture || user.picture"
            alt="account photo"
            height="40"
            class="rounded"
          />
          <span class="mx-3 text-success lighten-30">{{
            account.name || user.name
          }}</span>
        </div>
      </div>
      <div
        class="dropdown-menu p-0 list-group w-100"
        aria-labelledby="smallDrop"
      >
        <router-link :to="{ name: 'Account' }">
          <div class="list-group-item list-group-item-action hoverable">
            Manage Account
          </div>
        </router-link>
        <div
          class="list-group-item list-group-item-action hoverable"
          @click="sendToProfile()"
        >
          Profile
        </div>
        <div
          class="list-group-item list-group-item-action hoverable text-danger"
          @click="logout"
        >
          <i class="mdi mdi-logout"></i>
          logout
        </div>
      </div>
        </div> -->
