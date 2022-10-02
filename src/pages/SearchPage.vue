<template>
 <ProfilesCard/>
 
 <PostsCard v-for="p in posts" :post="p"/>
</template>


<script>
import ProfilesCard from '../components/ProfilesCard.vue';
import PostsCard from '../components/PostsCard.vue';
import { computed } from '@vue/reactivity';
import { AppState } from '../AppState.js';
export default {
    setup() {
        return {
          user: computed(() => AppState.user),
          posts: computed(() => AppState.posts)

        };
    },
    components: { ProfilesCard, PostsCard }
}
</script>


<style lang="scss" scoped>

</style>