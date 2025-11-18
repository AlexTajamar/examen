<template>
  <div>
    <h1>Home Cubos</h1>
    <ul class="container">
      <li v-for="cubo in cubos" :key="cubo.idCubo" class="card">
        <img :src="cubo.imagen" class="img-cubo" />
        <h3>{{ cubo.nombre }}</h3>
        <span class="precio">{{ cubo.precio }}€</span>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
import Global from "./../Global";

export default {
  name: "HomeCubos",
  data() {
    return {
      cubos: [],
    };
  },
  methods: {
    loadCubos() {
      let url = Global.url;
      let request = "api/Cubos";
      axios.get(url + request).then((response) => {
        this.cubos = response.data;
      });
    },
  },
  mounted() {
    this.loadCubos();
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  list-style: none;
  padding: 0;
}

.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #e0e0e0;
  padding: 20px;
  border-radius: 10px;
  width: 220px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.img-cubo {
  width: 150px;
  height: 150px;
  object-fit: contain;
  margin-bottom: 10px;
}

.precio {
  font-weight: bold;
  color: #2c3e50;
  font-size: 1.2em;
}
</style>
