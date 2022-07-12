<template>
  <div id="checkout-container">
    <OrderResume :data="order" />
    <PaymentMethod />
    <DefaultMethod
      :orderData="order"
      @paid-modal="paidModal"
      @fail-modal="failModal"
    />
    <PaidModal v-show="paid" />
    <FailModal v-show="fail" />
  </div>
</template>

<script>
import OrderResume from "../components/OrderResume.vue";
import DefaultMethod from "../components/DefaultMethod.vue";
import PaymentMethod from "../components/PaytmentMethod.vue";
import PaidModal from "../components/PaidModal.vue";
import FailModal from "../components/FailModal.vue";
export default {
  name: "CheckoutForm",
  components: {
    OrderResume,
    DefaultMethod,
    PaymentMethod,
    PaidModal,
    FailModal,
  },
  data() {
    return {
      method: null,
      order: {},
      paid: false,
      fail: false,
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
    paidModal() {
      this.paid = true;
      setTimeout(() => {
        this.paid = false;
      }, 5000);
    },
    failModal() {
      this.fail = true;
      setTimeout(() => {
        this.fail = false;
      }, 5000);
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
  height: 95%;
  margin: 45px auto;
  box-shadow: 2px 2px rgba(47, 54, 118, 0.4);
}
</style>
