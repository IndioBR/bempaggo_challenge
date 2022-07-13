<template>
  <div id="card-method">
    <div class="card-data-container">
      <div class="inputs-container">
        <InputCheckoutReq
          type="text"
          name="owner-name"
          id="input-owner-name"
          label="Nome do Titular do Cartão:"
        />
        <InputCheckoutReq
          type="text"
          name="owner-cpf"
          id="input-owner-cpf"
          label="CPF do Titular"
        />
        <InputCheckoutReq
          type="date"
          name="date"
          id="input-date"
          label="Data de Nascimento"
        />
        <InputCheckoutReq
          type="text"
          name="card-number"
          id="input-card-number"
          label="Número do Cartão:"
        />
        <InputCheckoutReq
          type="text"
          name="expire"
          id="input-expire"
          label="Validade:"
        />
        <InputCheckoutReq type="text" name="cvv" id="input-cvv" label="CVV:" />
      </div>
      <div class="select-div">
        <select>
          <option value="1">
            À vista R$ {{ fixValue(this.orderData.value) }}
          </option>
          <option v-for="(opt, i) in options" :key="i" :value="opt">
            {{ this.getPaymentOptions(opt, this.orderData.value) }}
          </option>
        </select>
      </div>
    </div>
    <div class="submit-btn">
      <input type="submit" value="ENVIAR" />
    </div>
  </div>
</template>

<script>
import InputCheckoutReq from "./InputCheckoutRequired.vue";

export default {
  name: "CardMethod",
  data() {
    return {
      options: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    };
  },
  emits: ["paidModal", "failModal"],
  methods: {
    fixValue(value) {
      return String((value / 100).toFixed(2)).replace(".", ",");
    },
    getPaymentOptions(opt, v) {
      const format = (v / opt).toFixed(2);
      return `Em ${opt}x - R$ ${this.fixValue(format)}`;
    },
    async submitCardPayment(e) {
      e.preventDefault();
      try {
        const submitData = {
          method: "card",
          date: new Date(),
          order_id: this.orderData.id,
          value: this.orderData.value,
          full_name: e.target[0].value,
          cpf_cnpj: e.target[1].value,
          birthday: e.target[2].value,
          times: e.target[6].value,
        };

        const dataJson = JSON.stringify(submitData);

        await fetch("http://localhost:3000/payments", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: dataJson,
        });

        const paidOrder = {
          status: "Pago",
        };

        const paidJson = JSON.stringify(paidOrder);

        await fetch(`http://localhost:3000/orders/${this.orderData.id}`, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: paidJson,
        });

        this.$emit("paidModal");
      } catch (error) {
        this.$emit("failModal");
      }
    },
  },
  props: {
    orderData: Object,
  },
  components: {
    InputCheckoutReq,
  },
};
</script>

<style scoped>
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
#card-method {
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
}

.inputs-container {
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  gap: 25px;
  padding: 30px;
}

.select-div {
  width: 97%;
  padding: 30px;
}

select {
  all: unset;
  width: 100%;
  height: 40px;
  padding: 5px 7px;
  align-items: center;
  border-bottom: 1px solid #333333;
  background-image: linear-gradient(45deg, transparent 50%, gray 50%),
    linear-gradient(135deg, gray 50%, transparent 50%),
    linear-gradient(to right, #ccc, #ccc);
  background-position: calc(100% - 20px) calc(1em + 2px),
    calc(100% - 15px) calc(1em + 2px), calc(100% - 2.5em) 0.5em;
  background-size: 5px 5px, 5px 5px, 1px 1.5em;
  background-repeat: no-repeat;
}

select:focus {
  background-image: linear-gradient(45deg, green 50%, transparent 50%),
    linear-gradient(135deg, transparent 50%, green 50%),
    linear-gradient(to right, #ccc, #ccc);
  background-position: calc(100% - 15px) 1em, calc(100% - 20px) 1em,
    calc(100% - 2.5em) 0.5em;
  background-size: 5px 5px, 5px 5px, 1px 1.5em;
  background-repeat: no-repeat;
  border-color: green;
  outline: 0;
}
</style>
