<template>
  <div class="col-12">
    <div class="row">
      <div class="col-12 p-0">
        <router-link
          :to="{ name: 'Profile', params: { id: creator.id } }"
          class="d-flex justify-content-start align-items-center bg-dark  p-1 rounded glow"
        >
          <img
            :src="
              !creator.picture
                ? 'https://i.pinimg.com/550x/18/b9/ff/18b9ffb2a8a791d50213a9d595c4dd52.jpg'
                : creator.picture
            "
            :title="creator.name"
            @error="newImage"
            class="img-fluid profile-img rounded-circle"
          />
          <span class="mx-5">{{ creator.name }}</span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { Account } from "../models/Account.js";

export default {
  props: {
    creator: { type: Account, required: true },
  },
  setup() {
    return {
      newImage(e) {
        e.target.src = "/src/assets/img/28B33A1C-9752-47A3-BF8A-F523EFB2408D.png";
        
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.profile-img {
  height: 50px;
  width: 50px;
  object-fit: cover;
}
.glow{
   box-shadow: 0 20px 20px -17px rgba(0,255,255,0.53);
}
.glow:hover{
    transform: scale(1.01);
    box-shadow: 0 30px 45px -15px rgba(0,111,255,0.6)
}
</style>
