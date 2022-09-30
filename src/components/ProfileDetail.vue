<template>
  <div
    class="cover-img"
    :style="{ backgroundImage: `url(${profile.coverImg})` }"
  >
    <img :src="profile.picture" :alt="profile.name" class="img-fluid"/>
    <h1>{{ profile.name }}</h1>
  </div>
</template>

<script>

import { Account } from "../models/Account.js";

export default {
  props: {
    profile: {
      type: Account,
      required: true,
    },
  },
  setup() {
   
    return {};
  },
};
</script>

<style lang="scss" scoped>
.cover-img {
  height: 50vh;
  padding: 3rem;
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
}
</style>
