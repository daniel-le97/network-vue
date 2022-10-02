<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark px-3">
    <router-link
    @click="refreshPage()"
      
      class="navbar-brand d-flex"
      :to="{ name: 'Home' }"
    >
      <div class="d-flex flex-column align-items-center">
        <img alt="logo" src="../assets/img/cw-logo.png" height="45" />
      </div>
    </router-link>
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarText"
      aria-controls="navbarText"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"> </span>
    </button>
    <search-form />
    <!-- <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav me-auto">
        <li>
          <router-link :to="{ name: 'About' }" class="btn text-success lighten-30 selectable text-uppercase">
            About
          </router-link>
        </li>
      </ul>
  
    </div> -->
  </nav>
</template>

<script>
import { useRoute, useRouter } from "vue-router";
import { AppState } from "../AppState.js";
import { router } from "../router.js";
import { postsService } from "../services/PostsService.js";
import Pop from "../utils/Pop.js";
import Login from "./Login.vue";
import SearchForm from "./SearchForm.vue";
export default {
  setup() {
    const router = useRouter()
    return {
     async refreshPage() {
        try {
          AppState.posts = []
          AppState.profiles = []
            await router.push({name:'Home',})
            await postsService.getPosts()
          } catch (error) {
            Pop.error(error)
          }
    
        
      },
    };
  },
  components: { Login, SearchForm },
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
