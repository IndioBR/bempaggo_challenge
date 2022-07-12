<template>
  <div id="default-method">
    <form @submit="submitPayment">
      <div class="checkout-asides">
        <div class="checkout-aside">
          <InputCheckout
            id="input-full-name"
            name="full_name"
            type="text"
            label="Nome Completo"
          />
          <InputCheckout
            id="input-cpf-cnpj"
            name="cpf-cnpj"
            type="number"
            label="CPF/CNPJ"
          />
          <InputCheckout
            id="input-email"
            name="email"
            type="email"
            label="Email"
          />
          <InputCheckout
            id="input-phone"
            name="phone"
            type="text"
            label="Telefone/Celular"
          />
        </div>
        <div class="checkout-aside">
          <InputCheckout id="input-cep" name="cep" type="text" label="CEP" />
          <InputCheckout
            id="input-address"
            name="address"
            type="text"
            label="Endereço"
          />
          <InputCheckout
            id="input-number"
            name="number"
            type="number"
            label="Nº"
          />
          <InputCheckout
            id="input-city"
            name="city"
            type="text"
            label="Cidade"
          />
        </div>
      </div>
      <div class="submit-btn">
        <input type="submit" value="ENVIAR" />
      </div>
    </form>
  </div>
</template>

<script>
import InputCheckout from "./InputCheckout.vue";
export default {
  name: "DefaultMethod",
  data() {
    return {
      inputName: null,
      inputCpfCnpj: null,
    };
  },
  props: {
    orderData: Object,
  },
  emits: ["paidModal", "failModal"],
  components: {
    InputCheckout,
  },
  methods: {
    async submitPayment(e) {
      e.preventDefault();
      try {
        const submitData = {
          date: new Date(),
          order_id: this.orderData.id,
          value: this.orderData.value,
          full_name: e.target[0].value,
          cpf_cnpj: e.target[1].value,
          email: e.target[2].value,
          phone: e.target[3].value,
          cep: e.target[4].value,
          address: e.target[5].value,
          number: e.target[6].value,
          city: e.target[7].value,
        };
        const dataJson = JSON.stringify(submitData);
        const req = await fetch("http://localhost:3000/payments", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: dataJson,
        });

        const res = await req.json();
        console.log(res);

        this.$emit("paidModal");
      } catch (error) {
        this.$emit("failModal");
      }
    },
  },
};
</script>

<style scoped>
#default-method {
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  width: 100%;
}

.checkout-asides {
  width: 900px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-content: center;
}
</style>
