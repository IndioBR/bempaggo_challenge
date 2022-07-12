<template>
  <div id="default-method">
    <form @submit="submitPayment">
      <div class="input-checkout">
        <label for="input-name">Nome Completo</label>
        <input
          type="text"
          name="nome"
          id="input-name"
          v-model="this.inputName"
        />
      </div>
      <div class="input-checkout">
        <label for="input-cpf-cnpj">CPF / CNPJ</label>
        <input
          type="text"
          name="nome"
          id="input-cpf-cnpj"
          v-model="this.inputCpfCnpj"
        />
      </div>
      <input type="submit" />
    </form>
  </div>
</template>

<script>
export default {
  name: "DefaultMethod",
  data() {
    return {
      inputName: null,
      inputCpfCnpj: null,
      paid_modal: false,
    };
  },
  props: {
    orderData: Object,
  },
  methods: {
    async submitPayment(e) {
      e.preventDefault();
      const submitData = {
        full_name: this.inputName,
        identifier: this.inputCpfCnpj,
        date: new Date(),
        value: this.orderData.amount * this.orderData.frameworks.length * 100,
      };
      const dataJson = JSON.stringify(submitData);
      const req = await fetch("http://localhost:3000/payments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: dataJson,
      });

      const res = await req.json();
      console.log(res);

      this.paid_modal = true;
    },
  },
};
</script>

<style scoped></style>
