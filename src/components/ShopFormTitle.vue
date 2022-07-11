<template>
  <div id="title-container">
    <p>
      Formulário<br />
      para compra de<br />
      <strong>Pacotes de Adesivos</strong>
    </p>
    <img src="/img/box.svg" alt="box" />
  </div>
</template>

<script>
export default {
  name: "ShopFormTitle",
};
</script>

<style scoped>
#title-container {
  display: flex;
  flex-direction: row;
  background: #2f3676;
  border-radius: 0px 0px 50% 45%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  height: 200px;
  color: #ffffff;
  margin-bottom: 30px;
}

p {
  font-size: 26px;
}

img {
  width: 150px;
  height: 150px;
}
</style>
