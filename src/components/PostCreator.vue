<template>
  <div>
    <router-link :to="{ name: 'Profile', params: { id: creator.id } }">
      <img
        :src="!creator.picture ? 'https://i.pinimg.com/550x/18/b9/ff/18b9ffb2a8a791d50213a9d595c4dd52.jpg': creator.picture"
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
