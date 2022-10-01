<template>
  <div
    class="cover-img"
    :style="{ backgroundImage: `url(${profile.coverImg})` }"
  >
    <div class="d-flex justify-content-center" v-if="profile.picture">
      <img
        :src="profile.picture"
        :alt="profile.name"
        class="img-fluid profile-img rounded-circle elevation-5"
      />
    </div>
    <div>
      <h1 class="text-shadow text-center">{{ profile.name }}</h1>
      <div class="text-shadow d-flex justify-content-center align-items-center gap-5">
      <a :href="profile.github" v-if="profile.github"><i class="mdi mdi-github fs-1 text-shadow"></i></a>
      <a :href="profile.linkedin" v-if="profile.linkedin"><i class="mdi mdi-linkedin fs-1 text-shadow"></i></a>
      <a href="https://boisecodeworks.com/" v-if="profile.graduated == true"><i class="mdi mdi-school fs-1 text-shadow"></i></a>
      <i class="mdi mdi-school fs-1" v-if="profile.resume" ></i>      
      </div>
    </div>
  </div>
  <div class="container-fluid">
    <div class="row">
      <div class="col-8">
        {{profile.bio}}
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from "@vue/reactivity";
import { Account } from "../models/Account.js";
import { AppState } from "../AppState";

export default {
  props: {
    profile: {
      type: Account,
      required: true,
    },
  },
  setup() {
    return {
      
    };
  },
};
</script>

<style lang="scss" scoped>
.cover-img {
  height: 70vh;
  padding: 3rem;
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
}
.profile-img {
  height: 30vh;
  width: 50vh;
}

.text-shadow{
  color: aliceblue;
  text-shadow: 1px 1px black, 0px 0px 5px salmon;
  font-weight: bold;
  letter-spacing: 0.08rem
  
  /* Second Color  in text-shadow is the blur */
}
</style>
