<template>
  <div class="profile-container">
    <div v-if="!perfil" class="loading">Cargando perfil...</div>

    <div v-else class="profile-card">
      <div class="avatar-placeholder">
        <span>P</span>
      </div>
      <h1>Perfil de Usuario</h1>

      <div class="profile-data">
        Email: {{ perfil.email }}
        <br />
        Nombre: {{ perfil.nombre }}
      </div>
    </div>
  </div>
</template>

<script>
import Global from "@/Global";
import axios from "axios";

export default {
  name: "PerfilesComponent",
  data() {
    return {
      perfil: {},
    };
  },
  methods: {
    loadPerfil() {
      let url = Global.url + "api/Manage/PerfilUsuario";
      const token = localStorage.getItem("token");

      const config = {
        headers: {
          Authorization: "Bearer " + token,
        },
      };

      axios
        .get(url, config)
        .then((response) => {
          this.perfil = response.data;
        })
        .catch((error) => {
          console.error("Error cargando perfil", error);
        });
    },
  },
  mounted() {
    this.loadPerfil();
  },
};
</script>

<style scoped>
.profile-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
  background-color: #f4f6f8;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}

.profile-card {
  background-color: white;
  padding: 2.5rem;
  border-radius: 16px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05);
  width: 100%;
  max-width: 400px;
  text-align: center;
  transition: transform 0.3s ease;
}

.profile-card:hover {
  transform: translateY(-5px);
}

.avatar-placeholder {
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem auto;
  color: white;
  font-size: 2rem;
  font-weight: bold;
  box-shadow: 0 4px 10px rgba(118, 75, 162, 0.3);
}

h1 {
  color: #2c3e50;
  font-size: 1.5rem;
  margin-bottom: 1rem;
  font-weight: 700;
}

.profile-data {
  color: #555;
  font-size: 1rem;
  background-color: #f9f9f9;
  padding: 1rem;
  border-radius: 8px;
  border: 1px solid #eee;
  word-break: break-word;
}

/* 5. Estado de Carga */
.loading {
  color: #666;
  font-size: 1.2rem;
  animation: pulse 1.5s infinite;
}

@keyframes pulse {
  0% {
    opacity: 0.5;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0.5;
  }
}
</style>
