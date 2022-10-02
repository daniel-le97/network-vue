<template>
  <div>
    <form @input.prevent="handleSubmit()" @submit.prevent="handleSubmit()">
      <div class="input-group">
        <input
          type="text"
          class="form-control"
          required="true"
          placeholder="find a post or person..."
          name="search"
          v-model="editable.term"
        />
        <label for="search" class="visually-hidden">Search</label>
        <button type="submit" @click="" class="btn btn-primary">
          <i class="mdi mdi-magnify"></i>
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { AppState } from "../AppState.js";
import { postsService } from "../services/PostsService.js";
import { profilesService } from "../services/ProfileService.js";
import { logger } from "../utils/Logger.js";
import Pop from "../utils/Pop.js";

export default {
  setup() {
    const editable = ref({});
    const router = useRouter();
    return {
      editable,
      async handleSubmit() {
        try {
           await router.push({name: 'Search'});
          await profilesService.getProfilesBySearchTerm(editable.value.term);
          await postsService.getPostsBySearchTerm(editable.value.term)
          
        
        } catch (error) {
          // logger.error("[searchForm]", error);
          // Pop.error(error);
        }
      },
    };
  },
};
</script>

<style lang="scss" scoped></style>
