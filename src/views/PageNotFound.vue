<template>
  <div>
    <NotFound />
    <button @click="this.$router.push('/')">Retornar a tela principal</button>
  </div>
</template>

<script>
import NotFound from "../components/NotFound.vue";
export default {
  name: "PageNotFound",
  components: {
    NotFound,
  },
};
</script>

<style scoped>
div {
  width: 1280px;
  margin: 40px auto;
  background-color: #f2f2f2;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 15px;
  padding: 35px;
}

button {
  all: unset;
  padding: 25px 45px;
  cursor: pointer;
  background-color: rgba(40, 59, 226, 0.5);
  color: #ffffff;
  border-radius: 7px;
  font-weight: bold;
}
</style>
