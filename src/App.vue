<template>
  <body class="debug">
    <header class="container-fluid">
      <div class="row justify-content-end">
        <div class="col-12 p-0">
          <Navbar />
        </div>
      </div>
    </header>
    <main>
      <div class="container-fluid">
        <div class="row">
          <div class="col-2 bg-primary d-none d-md-block">
            <div class="mt-2">
              <Login />
            </div>
          </div>
          <div class="col-md-8  p-0">
            <router-view />
          </div>
          <div class="col-2 bg-warning d-none d-md-block">
            <Lads v-for="l in lads" :lad="l"/>
          </div>
        </div>
      </div>
    </main>
  </body>
</template>

<script>
import { computed, onMounted } from "vue";
import { AppState } from "./AppState";
import Navbar from "./components/Navbar.vue";
import Login from "./components/Login.vue";
import Login1 from "./components/Login.vue";
import Lads from "./components/Lads.vue";
import Pop from "./utils/Pop.js";
import { ladsService } from "./services/LadsService.js";

export default {
  setup() {
    async function getLads() {
      try {
        await ladsService.getLads()
      } catch (error) {
        Pop.error(error, "[GetLads]");
      }
    }
    onMounted(() => {
      getLads();
    });
    return {
      appState: computed(() => AppState),
      lads: computed(() => AppState.lads),
    };
  },
  components: { Navbar, Login, Login1, Lads },
};
</script>
<style lang="scss">
body.debug .container,
body.debug .container-fluid {
  outline: 2px double blue;
  outline-offset: -2px;
}

body.debug .row {
  outline: 2px dashed red;
  outline-offset: -2px;
}

body.debug [class*="col-"] {
  outline: 2px dotted forestgreen;
  outline-offset: -3px;
}
.height {
  min-height: 100vh;
}
@import "./assets/scss/main.scss";
</style>

<!-- <Navbar /> -->
