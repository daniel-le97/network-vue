<template>
  <div
    class="cover-img d-flex flex-column justify-content-center align-items-center"
    :style="{ backgroundImage: `url(${profile.coverImg})` }"
  >
    <div class="d-flex justify-content-center" v-if="profile.picture">
      <img
        :src="profile.picture"
        :alt="profile.name"
        class="img-fluid rounded-circle elevation-5 none"
      />
    </div>
    <div>
      <h1 class="text-shadow text-center">{{ profile.name }}</h1>
      <div
        class="text-shadow d-flex justify-content-center align-items-center gap-5"
      >
        <a :href="profile.github" v-if="profile.github"
          ><i class="mdi mdi-github fs-1 text-shadow"></i
        ></a>
        <a :href="profile.linkedin" v-if="profile.linkedin"
          ><i class="mdi mdi-linkedin fs-1 text-shadow"></i
        ></a>
        <a href="https://boisecodeworks.com/" v-if="profile.graduated == true"
          ><i class="mdi mdi-school fs-1 text-shadow"></i
        ></a>
        <a :href="profile.resume" v-if="profile.resume"
          ><i class="mdi mdi-note fs-1 text-shadow"></i
        ></a>
        <span>{{ profile.class }}</span>
      </div>
    </div>
    <div class="text-center text-shadow">
      <span>{{ profile.bio }}</span>
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
      account: computed(() => AppState.account),
    };
  },
};
</script>

<style lang="scss" scoped>
.cover-img {
  height: auto;
  min-height: 70vh;
  padding: 3rem;
  border: 1px solid rgb(242, 242, 242);
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
}
.profile-img {
  height: 30vh;
  width: 50vh;
}

.text-shadow {
  color: aliceblue;
  text-shadow: 2px 2px black, 0px 0px 1px rgb(243, 37, 14);
  font-weight: bold;
  letter-spacing: 0.08rem;

  /* Second Color  in text-shadow is the blur */
}
.none{
pointer-events: none;
}
</style>
