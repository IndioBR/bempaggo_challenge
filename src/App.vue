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
.submit-btn {
  width: 100%;
  height: 90px;
  margin-top: 50px;
  display: flex;
  align-items: center;
  justify-content: end;
  background-color: #dde3e9;
  padding: 25px 30px;
}

.submit-btn input {
  all: unset;
  font-family: "Roboto", sans-serif;
  padding: 7px 40px;
  color: #ffffff;
  font-weight: bold;
  background-color: #2f3676;
  border-radius: 7px;
  cursor: pointer;
  transition: 0.5s;
}

.submit-btn input:hover {
  background-color: transparent;
  color: #222;
  border: 1px solid #2f3676;
}
</style>
