<template>
  <div>
    <h1>Cubos de la marca : {{ this.$route.params.marca }}</h1>
    <ul class="container">
      <li v-for="cubo in cubosporMarca" :key="cubo.idCubo" class="card">
        <img :src="cubo.imagen" class="img-cubo" />
        <h3>{{ cubo.nombre }}</h3>
        <span class="precio">{{ cubo.precio }}€</span>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
import Global from "@/Global";
export default {
  name: "MarcaCubos",
  data() {
    return {
      cubosporMarca: [],
    };
  },
  methods: {
    loadMarcas() {
      let url = Global.url;
      let request = "/api/Cubos/CubosMarca/" + this.$route.params.marca;
      axios.get(url + request).then((response) => {
        this.cubosporMarca = response.data;
        console.log(response.data);
      });
    },
  },
  mounted() {
    this.loadMarcas();
  },
  watch: {
    "$route.params.marca"(newId, oldId) {
      if (newId !== oldId) {
        this.loadMarcas();
      }
    },
  },
};
</script>

<style></style>
