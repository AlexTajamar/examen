<template>
  <div>
    <h1>Compras del Perfil</h1>
    {{ compras }}
    <ul>
      <li v-for="compra in compras" :key="compra">Nombre : {{ compra }}</li>
    </ul>
  </div>
</template>

<script>
import Global from "@/Global";
import axios from "axios";

export default {
  name: "CubosCompras",
  data() {
    return {
      compras: [],
      vacio: false,
    };
  },
  methods: {
    loadCompras() {
      console.log("Dentro");
      let url = Global.url + "api/Compra/ComprasUsuario";
      const token = localStorage.getItem("token");
      const config = {
        headers: {
          Authorization: "Bearer " + token,
        },
      };

      axios.get(url, config).then((response) => {
        console.log("Dentro de las Compras");
        this.compras = response.data;
        console.log(response.data);
      });
    },
    mounted() {
      this.loadCompras();
    },
  },
};
</script>

<style></style>
