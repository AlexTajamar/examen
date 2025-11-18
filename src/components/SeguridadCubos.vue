<template>
  <div>
    <h1>Login</h1>

    <form @submit.prevent="iniciarSesion">
      <div>
        <label>Usuario: </label>
        <input type="text" v-model="email" required />
      </div>

      <div>
        <label>Contraseña: </label>
        <input type="password" v-model="password" required />
      </div>
      <button type="submit">Entrar</button>
    </form>
    <p v-if="error" style="color: red">{{ error }}</p>
  </div>
</template>

<script>
import Global from "@/Global";
import axios from "axios";

export default {
  name: "LoginComponent",
  data() {
    return {
      usuario: "",
      email: "",
      password: "",
    };
  },
  methods: {
    loadToken() {
      this.usuario = {
        email: this.email,
        password: this.password,
      };
      let url = Global.url + "api/Manage/Login";
      axios.post(url, this.usuario).then((response) => {
        const token = response.data.response;
        localStorage.setItem("token", token);
        console.log("Token guardado:", token);

        this.$router.push("/perfil");
      });
    },

    iniciarSesion() {
      this.loadToken();
    },
  },

  mounted() {},
};
</script>

<style></style>
