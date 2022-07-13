<template>
  <div id="payment-method">
    <img
      src="../../public/img/boleto.png"
      alt="boleto"
      @click="this.$emit('methodBoleto')"
    />
    <img
      src="../../public/img/cartao.svg"
      alt="cartao"
      @click="this.$emit('methodCard')"
    />
    <img
      src="../../public/img/pix.svg"
      alt="pix"
      @click="this.$emit('methodPix')"
    />
  </div>
</template>

<script>
export default {
  name: "PaymentMethod",
  emits: ["methodBoleto", "methodCard", "methodPix"],
};
</script>

<style scoped>
#payment-method {
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  gap: 20px;
}

#payment-method img {
  width: 50px;
  height: 30px;
  cursor: pointer;
}
</style>
