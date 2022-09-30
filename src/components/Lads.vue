<template>
  <div class="my-5">
    <img :src="lad.tall" alt="" class="img-fluid" />

  </div>
</template>

<script>
// import { computed } from "@vue/reactivity";
// import { onMounted } from "vue";
// import { AppState } from "../AppState.js";
// import { ladsService } from "../services/LadsService.js";
// import Pop from "../utils/Pop.js";
import { Lad } from "../models/Lad.js";

export default {
  props: {
    lad: { type: Lad, required: true },
  },
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
