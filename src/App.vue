<template>
  <div>
    <the-navbar></the-navbar>
    <router-view></router-view>
  </div>
</template>
<script>
import TheNavbar from "./components/layout/TheNavbar.vue";
export default {
  name: "App",
  components: {
    TheNavbar,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");

* {
  box-sizing: border-box;
}

body {
  margin: 0;
}
</style>
