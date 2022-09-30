<template>
  <div>
    <router-link :to="{ name: 'Profile', params: { id: creator.id } }">
      <img
        :src="creator.picture"
        :alt="creator.name"
        :title="creator.name"
        class="img-fluid profile-img rounded-circle"
      />
    </router-link>

  </div>
</template>

<script>
import { Account } from "../models/Account.js";

export default {
  props: {
    creator: { type: Account, required: true },
  },
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.profile-img {
  height: 50px;
  width: 50px;
  object-fit: cover;
}
</style>
