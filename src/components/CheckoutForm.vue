<template>
  <div id="checkout-container">
    <OrderResume :data="order" />
    <PaymentMethod />
    <DefaultMethod :orderData="order" />
  </div>
</template>

<script>
import OrderResume from "./OrderResume.vue";
import DefaultMethod from "./DefaultMethod.vue";
import PaymentMethod from "./PaytmentMethod.vue";
export default {
  name: "CheckoutForm",
  components: { OrderResume, DefaultMethod, PaymentMethod },
  data() {
    return {
      method: null,
      order: {},
    };
  },
  methods: {
    async getOrder() {
      const req = await fetch(
        "http://localhost:3000/orders/" + this.$route.params.id
      );

      const data = await req.json();

      this.order = data;
    },
  },
  created() {
    this.getOrder();
  },
};
</script>

<style scoped>
#checkout-container {
  background-color: #ffffff;
  width: 900px;
  height: 90vh;
  margin: 35px auto;
  box-shadow: 2px 2px rgba(47, 54, 118, 0.4);
  border-radius: 15px;
}
</style>
