import { createRouter, createWebHashHistory } from "vue-router";
import ShopForm from "../components/ShopForm.vue";
import CheckoutForm from "../components/CheckoutForm.vue";

const routes = [
  {
    path: "/",
    name: "ShopForm",
    component: ShopForm,
  },
  {
    path: "/checkout/:id",
    name: "Checkout",
    component: CheckoutForm,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
