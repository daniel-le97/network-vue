<template>
  <div class="container-fluid" >
    <div class="row flex-wrap">
      <PostCreator  :creator="p" v-for="p in profiles" class="m-2"/>
      <!-- <div class="col-12"  >
      </div> -->
    </div>
  </div>
</template>


<script>
import { computed } from '@vue/reactivity';
import { AppState } from '../AppState.js';
import { Account } from '../models/Account.js';
import PostCreator from './PostCreator.vue';
export default {
  props:{
    profile:{type: Account, required:true}
  },
    setup(props) {
        return {
          profiles: computed(()=> AppState.profiles)
        };
    },
    components: { PostCreator }
}
</script>


<style lang="scss" scoped>

</style>