<template>
  <div class="input-checkout-required">
    <label :for="this.id">{{ this.label }}</label>
    <input
      :type="this.type"
      :name="this.name"
      :id="this.id"
      v-model="this.inputValue"
      required
    />
  </div>
</template>

<script>
export default {
  name: "InputCheckoutRequired",
  data() {
    return {
      inputValue: null,
    };
  },
  props: {
    id: String,
    name: String,
    type: String,
    label: String,
  },
};
</script>

<style scoped>
.input-checkout-required {
  display: flex;
  flex-direction: column;
  margin-top: 20px;
}

label {
  font-size: 12px;
  color: rgba(0, 0, 0, 0.7);
}

input {
  all: unset;
  padding: 3px 5px;
  width: 250px;
  border-bottom: 0.5px solid #555;
}
</style>
