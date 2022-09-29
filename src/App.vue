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
          <div class="col-2 bg-primary">
            <div class="mt-2">
              <Login class="mt-5" />
            </div>
          </div>
          <div class="col-8 min-vh-100">
            <router-view />
          </div>
          <div class="col-2 bg-warning"></div>
        </div>
      </div>
    </main>
  </body>
</template>

<script>
import { computed } from "vue";
import { AppState } from "./AppState";
import Navbar from "./components/Navbar.vue";
import Login from "./components/Login.vue";
import Login1 from "./components/Login.vue";

export default {
  setup() {
    return {
      appState: computed(() => AppState),
    };
  },
  components: { Navbar, Login, Login1 },
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
