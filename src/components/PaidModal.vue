<template>
  <div class="success-modal">
    <img src="/img/right.svg" alt="right" />
    <span>Pagamento realizado com Sucesso</span>
  </div>
</template>

<script>
export default {
  name: "PaidModal",
};
</script>

<style scoped>
.success-modal {
  width: 250px;
  height: 60px;
  background-color: rgb(255, 255, 255);
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 15px;
  padding: 5px 7px;
  box-shadow: 1px 1px #37d632;
  border-radius: 7px;
  position: fixed;
  bottom: 30px;
  right: 20px;
}

.success-modal img {
  width: 20px;
}

.success-modal span {
  font-size: 12px;
}
</style>
