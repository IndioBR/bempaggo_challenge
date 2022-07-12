<template>
  <div id="">
    <div class="input-checkout">
      <label for="">Nome Completo</label>
      <input type="text" name="" id="" v-model="full_name" value="" />
    </div>
    <div class="input-checkout">
      <label for="">Numero do Cartão</label>
      <input type="text" name="" id="" v-model="card_number" value="" />
    </div>
    <div class="input-checkout">
      <label for="">Valido até</label>
      <input type="text" name="" id="" v-model="valid" value="" />
    </div>
    <div class="input-checkout">
      <label for="">CVV</label>
      <input type="text" name="" id="" v-model="cvv_number" value="" />
    </div>
    <input type="submit" />
  </div>
</template>

<script>
export default {
  name: "CardMethod",
  data() {
    return {
      full_name: null,
      card_number: null,
      valid: null,
      cvv_number: null,
    };
  },
};
</script>
