<template>
  <div class="about text-center">
    <ProfileDetail :profile="account" />
  </div>
  <div>
    <AccountForm/>
  </div>
</template>

<script>
import { computed } from "vue";
import { AppState } from "../AppState";
import ProfileDetail from "../components/ProfileDetail.vue";
import AccountForm from "../components/AccountForm.vue";
export default {
  setup() {
    return {
      account: computed(() => AppState.account),
    };
  },
  components: { ProfileDetail, AccountForm },
};
</script>

<style scoped>
img {
  max-width: 100px;
}
</style>
