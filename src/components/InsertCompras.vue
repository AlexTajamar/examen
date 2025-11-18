<template>
  <div class="create-container">
    <div class="form-card">
      <h1>📝 Crear Nuevo Registro</h1>

      <form @submit.prevent="insertCompra">
        <div class="form-group">
          <label for="cubo">ID Cubo</label>
          <input
            id="cubo"
            type="number"
            v-model="compra.idCubo"
            class="form-input"
            placeholder="ID del producto"
          />
        </div>
        <div class="form-group">
          <label for="cubo">ID Cubo</label>
          <input
            id="cubo"
            type="number"
            v-model="compra.idPedido"
            class="form-input"
            placeholder="ID del producto"
          />
        </div>

        <div class="form-group">
          <label for="user">ID Usuario</label>
          <input
            id="user"
            type="number"
            v-model="compra.idUsuario"
            class="form-input"
            placeholder="ID del usuario"
          />
        </div>

        <div class="form-group">
          <label for="date">Fecha</label>
          <input
            id="date"
            type="date"
            v-model="compra.fechaComentario"
            class="form-input"
          />
        </div>

        <button type="submit" class="submit-btn">Crear Registro</button>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Global from "@/Global";

export default {
  name: "CreateDepartamentos",
  data() {
    return {
      compra: {
        idCubo: 0,
        idPedido: 0,
        idUsuario: 0,
        fechaComentario: "",
      },
    };
  },
  methods: {
    insertCompra() {
      let url = Global.url + "/api/Compra/InsertarPedido/" + this.compra.idCubo;
      const token = localStorage.getItem("token");
      const config = {
        headers: {
          Authorization: "Bearer " + token,
        },
      };
      axios
        .post(url, this.compra, config)
        .then((response) => {
          console.log(response);
          this.$router.push("/compras");
        })
        .catch((error) => {
          console.error("Error al crear:", error);
        });
    },
  },
};
</script>

<style scoped>
.create-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 90vh;
  background-color: #f0f2f5;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  padding: 20px;
}

.form-card {
  background-color: white;
  padding: 2.5rem;
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 500px;
}

h1 {
  text-align: center;
  color: #333;
  margin-bottom: 1.5rem;
  font-size: 1.8rem;
}

.form-group {
  margin-bottom: 1.2rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  color: #555;
  font-weight: 600;
  font-size: 0.9rem;
}

.form-input {
  width: 100%;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
  box-sizing: border-box;
}

.form-input:focus {
  border-color: #4a90e2;
  box-shadow: 0 0 0 3px rgba(74, 144, 226, 0.1);
  outline: none;
}

.textarea {
  resize: vertical;
  min-height: 80px;
}

.submit-btn {
  width: 100%;
  padding: 14px;
  background-color: #2ecc71;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.1s ease;
  margin-top: 1rem;
}

.submit-btn:hover {
  background-color: #27ae60;
}

.submit-btn:active {
  transform: scale(0.98);
}
</style>
