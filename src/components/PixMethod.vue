<template>
  <div id="pix-method">
    <div class="pix-title">
      <h1>Pague com pix</h1>
    </div>
    <div class="pix-container">
      <p>
        Pague com PIX e aproveite até 15% OFF. Nessa modalidade, seu pedido é
        aprovado instantaneamente, o que torna a expedição do seu pedido ainda
        mais rápida.
      </p>
      <span>O que você precisa saber antes de pagar por PIX:</span>
      <ul>
        <li>É necessário possuir uma chave PIX cadastrada no seu Banco;</li>
        <li>
          Com o seu celular, basta escanear o QR Code ou copiar o código para
          efetivar a compra;
        </li>
        <li>
          O pagamento é processado e debitado do valor em sua conta corrente;
        </li>
        <li>
          Como padrão, o Banco Central limitou os pagamentos no período das 20h
          às 06h, a valores de até R$1.000. Mas você pode solicitar o aumento do
          limite deste período diretamente com o seu banco, pela Central de
          Atendimento ou APP. O prazo de liberação é de até 48h.
        </li>
      </ul>
    </div>
    <div class="show-qr">
      <button @click="this.payPix()">Mostrar Qr Code</button>
    </div>
    <div class="qr-code" v-show="showPix">
      <img :src="this.getQr()" alt="qr" @click="this.close()" />
    </div>
  </div>
</template>

<script>
export default {
  name: "PixMethod",
  data() {
    return {
      showPix: false,
    };
  },
  props: {
    orderData: Object,
  },
  emits: ["paidModal", "failModal"],
  methods: {
    fixValue(value) {
      return String(((value / 100) * 0.15).toFixed(2)).replace(".", ",");
    },
    getQr() {
      const str = `O valor pago é de R$ ${this.fixValue(this.orderData.value)}`;
      return `https://api.qrserver.com/v1/create-qr-code/?data=${str}&size=700x700`;
    },
    close() {
      this.showPix = false;
    },
    async payPix() {
      this.showPix = true;
      try {
        const submitData = {
          method: "pix",
          date: new Date(),
          order_id: this.orderData.id,
          value: this.orderData.value * 0.15,
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
};
</script>

<style scoped>
#pix-method {
  padding: 35px;
}

.pix-title {
  text-align: center;
  margin-bottom: 25px;
  font-size: 14px;
}

.pix-container {
  border-left: 1px solid rgba(40, 59, 226, 0.5);
  padding: 35px;
}

.pix-container p {
  margin-bottom: 25px;
  font-weight: bold;
}

.pix-container span {
  text-decoration: underline;
}

.pix-container li {
  list-style: none;
  padding-left: 25px;
  padding-right: 25px;
}

.show-qr {
  width: 97%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.show-qr button {
  all: unset;
  padding: 25px 50px;
  background-color: rgba(40, 59, 226, 0.5);
  border-radius: 15px;
  color: #ffffff;
  font-weight: bold;
  cursor: pointer;
}

.qr-code {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgb(51, 51, 51, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

img {
  cursor: pointer;
}
</style>
