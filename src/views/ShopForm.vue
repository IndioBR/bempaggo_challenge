<template>
  <div class="shop-container">
    <div>
      <ShopFormTitle />
      <form action="" @submit="submitOrder">
        <div class="formInfo">
          <p>Quais adesivos?</p>
          <div class="stickers-container">
            <div v-for="fwk in fwks" :key="fwk.id">
              <input
                type="checkbox"
                :name="fwk.type"
                :value="fwk"
                :id="fwk.id"
                v-model="this.fwksChosen"
              />
              <strong>{{ fwk.type }}</strong>
            </div>
          </div>
          <p>Quantos de cada?</p>
          <div class="amount">
            <button @click="removeSticker">-</button>
            <span>{{ amount }}</span>
            <button @click="addSticker">+</button>
          </div>
          <p>Observação:</p>
          <textarea
            type="text"
            placeholder="Alguma Sugestão? Dúvida?"
            class="comment-box"
            v-model="this.comment"
          />
        </div>
        <div class="submit-btn">
          <input type="submit" value="ENVIAR" />
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import ShopFormTitle from "../components/ShopFormTitle.vue";
export default {
  name: "ShopForm",
  emits: "orderMade",
  components: { ShopFormTitle },
  data() {
    return {
      amount: 0,
      fwks: [],
      comment: null,
      fwksChosen: [],
      total: 0,
    };
  },
  methods: {
    async getFwks() {
      const req = await fetch("http://localhost:3000/frameworks");

      const data = await req.json();

      this.fwks = data;
    },
    addSticker(e) {
      e.preventDefault();
      this.amount = this.amount + 1;
    },
    removeSticker(e) {
      e.preventDefault();
      if (this.amount === 0) return;

      this.amount = this.amount - 1;
    },
    getSum(price, qntd) {
      return price * qntd;
    },
    async submitOrder(e) {
      e.preventDefault();
      this.fwksChosen.forEach(
        (f) => (this.total += this.getSum(f.price, this.amount))
      );
      const data = {
        status: "Solicitado",
        amount: this.amount,
        comment: this.comment,
        value: this.total,
        frameworks: Array.from(this.fwksChosen),
      };
      const dataJson = JSON.stringify(data);

      const req = await fetch("http://localhost:3000/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: dataJson,
      });

      const res = await req.json();

      this.$router.push("/checkout/" + res.id);
    },
  },
  mounted() {
    this.getFwks();
  },
};
</script>

<style scoped>
.formInfo {
  padding: 25px;
}
p {
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 15px;
}

.stickers-container {
  height: 100px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: flex-start;
  justify-content: start;
  gap: 30px;
}

.stickers-container input {
  margin-right: 10px;
}

.amount {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 35px;
}

.amount button {
  all: unset;
  color: #ffffff;
  background-color: #2f3675;
  font-weight: bold;
  font-size: 28px;
  width: 40px;
  height: 40px;
  border-radius: 9px;
  text-align: center;
  box-shadow: 2px 3px rgba(47, 54, 117, 0.2);
  cursor: pointer;
}

.amount span {
  font-size: 26px;
  font-weight: normal;
  margin-left: 15px;
  margin-right: 15px;
}

.comment-box {
  width: 100%;
  height: 100px;
  padding: 15px 15px;
  background-color: #dde3e9;
  border: 1px solid #858caf;
  border-radius: 10px;
  resize: none;
}
</style>
