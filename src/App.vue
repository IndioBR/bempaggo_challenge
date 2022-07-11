<template>
  <router-view />
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Roboto", sans-serif;
}

.shop-container {
  background: #ffffff;
  width: 600px;
  height: 800px;
  margin: 15px auto;
}

body {
  background-color: #8a2ae1;
  min-height: 100vh;
  width: 100%;
}
</style>
