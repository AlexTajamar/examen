<template>
  <nav class="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/" exact-active-class="active">
        Cubos
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <select class="form-select" style="width: auto" @change="navegarMarca">
          <option :value="null" selected disabled>Marcas</option>

          <option v-for="marca in marcas" :key="marca" :value="marca">
            {{ marca }}
          </option>
        </select>
      </div>
      <div class="collapse navbar-collapse" id="navbarNav">
        <router-link
          class="navbar-brand"
          to="/seguridad"
          exact-active-class="active"
        >
          Inicio Sesion
        </router-link>

        <router-link
          class="navbar-brand"
          to="/compras"
          exact-active-class="active"
        >
          Ver Comprar
        </router-link>

        <router-link
          class="navbar-brand"
          to="/insertcompras"
          exact-active-class="active"
        >
          Realizar Compras
        </router-link>
      </div>

      <button @click="logOut()">Log Out</button>
    </div>
  </nav>
</template>

<script>
import axios from "axios";
import Global from "@/Global";
export default {
  name: "MenuCubos",
  data() {
    return {
      modelos: [],
      marcas: [],
    };
  },
  methods: {
    loadMarcas() {
      let url = Global.url;
      let request = "/api/Cubos/Marcas";
      axios.get(url + request).then((response) => {
        this.marcas = response.data;
      });
    },
    navegarMarca(event) {
      const marca = event.target.value;
      if (marca) {
        this.$router.push("/marca/" + marca);
      } else {
        console.log("No coge el param");
      }
    },
    logOut() {
      localStorage.setItem("token", null);
      this.$router.push("/seguridad");
    },
  },
  mounted() {
    this.loadMarcas();
  },
};
</script>

<style scoped></style>
