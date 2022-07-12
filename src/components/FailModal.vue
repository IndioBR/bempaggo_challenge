<template>
  <div class="fail-modal">
    <img src="/img/wrong.svg" alt="wrong" />
    <span>Pagamento não Realizado</span>
  </div>
</template>

<script>
export default {
  name: "FailModal",
};
</script>

<style scoped>
.fail-modal {
  width: 250px;
  height: 60px;
  background-color: rgb(255, 255, 255);
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 15px;
  padding: 5px 7px;
  box-shadow: 1px 1px #d63232;
  border-radius: 7px;
  position: fixed;
  bottom: 30px;
  right: 20px;
}

.fail-modal img {
  width: 20px;
}

.fail-modal span {
  font-size: 12px;
}
</style>
