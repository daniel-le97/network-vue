<template>
  <div class="container-fluid">
    <div class="row flex-wrap">
      <div class="col-md-2" >
        <PostCreator :creator="p"  v-for="p in profiles" />
      </div>
    </div>
  </div>
</template>


<script>
import { computed } from '@vue/reactivity';
import { AppState } from '../AppState.js';
import { Account } from '../models/Account.js';
import PostCreator from './PostCreator.vue';
export default {
  // props:{
  //   profile:{type: Account, required:true}
  // },
    setup() {
        return {
          profiles: computed(()=> AppState.profiles)
        };
    },
    components: { PostCreator }
}
</script>


<style lang="scss" scoped>

</style>