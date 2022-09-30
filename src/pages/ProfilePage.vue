<template>
  <div class="profile-page" v-if="profile">
    <!--  -->
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">

        </div>
      </div>
    </div>
    <!--  -->
  </div>
</template>


<script>
import Pop from '../utils/Pop.js'

export default {
  setup(){
     const route = useRoute()
     async function getProfilesById(){
      try {
          
        } catch (error) {
          console.error('[]',error)
          Pop.error(error)
        }
     }
    return {}
  }
}
</script>


<style lang="scss" scoped>

</style>