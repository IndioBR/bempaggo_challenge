<template>
  <div id="order-resume">
    <p>Resumo</p>
    <div class="resume-container">
      <div class="items">
        <ul>
          <li v-for="frmw in data.frameworks" :key="frmw.id">
            <strong>{{ data.amount }}</strong
            >x {{ frmw.type }}
          </li>
        </ul>
      </div>
      <div class="order-value">
        <span>Valor:</span>
        <span>R$ {{ this.fixValue(this.data.value) }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "OrderResume",
  props: {
    data: Object,
  },
  methods: {
    fixValue(value) {
      return String((value / 100).toFixed(2)).replace(".", ",");
    },
  },
};
</script>

<style scoped>
#order-resume {
  display: flex;
  flex-direction: column;
  background-color: rgba(40, 59, 226, 0.5);
  color: #fff;
  height: 200px;
  padding: 25px;
  border-radius: 0px 0px 50% 50%;
}

ul {
  display: flex;
  flex-direction: column;
  font-weight: 300;
}

li {
  all: unset;
  font-size: 20px;
}

#order-resume p {
  text-align: center;
  font-size: 40px;
  font-weight: bold;
  margin-bottom: 20px;
}

.resume-container {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
}

.order-value {
  display: flex;
  flex-direction: column;
}

.order-value span {
  font-weight: 300;
  font-size: 20px;
}
</style>
