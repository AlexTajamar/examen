<template>
  <div class="compras-container">
    <h1 class="title">🛍️ Compras del Perfil</h1>

    <div v-if="compras.length === 0" class="empty-state">
      <p>No se han encontrado compras recientes.</p>
    </div>

    <ul v-else class="purchase-list">
      <li v-for="(compra, index) in compras" :key="index" class="purchase-card">
        <div class="card-icon">🎲</div>
        <div class="card-content">
          <span class="label">Producto Adquirido</span>
          <span class="product-name">{{ compra.nombre || compra }}</span>
        </div>
        <div class="status-badge">Completado</div>
      </li>
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
      let url = Global.url + "api/Compra/ComprasUsuario";
      const token = localStorage.getItem("token");
      const config = {
        headers: {
          Authorization: "Bearer " + token,
        },
      };

      axios
        .get(url, config)
        .then((response) => {
          this.compras = response.data;
          this.vacio = this.compras.length === 0;
        })
        .catch((e) => console.error(e));
    },
  },
  mounted() {
    this.loadCompras();
  },
};
</script>

<style scoped>
/* 1. Contenedor Principal */
.compras-container {
  max-width: 600px;
  margin: 40px auto;
  padding: 20px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}

/* 2. Título */
.title {
  color: #2c3e50;
  text-align: center;
  margin-bottom: 30px;
  font-weight: 800;
  font-size: 2rem;
  border-bottom: 2px solid #eef2f7;
  padding-bottom: 15px;
}

/* 3. Reset de la lista (ul) */
.purchase-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

/* 4. Tarjeta Individual de Compra (li) */
.purchase-card {
  background-color: white;
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between; /* Separa el icono, texto y estado */
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05); /* Sombra suave */
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  border: 1px solid #f0f0f0;
}

.purchase-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
  border-color: #d1d9e6;
}

/* Icono a la izquierda */
.card-icon {
  background-color: #e0f2fe;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  margin-right: 20px;
}

/* Contenido Texto */
.card-content {
  flex-grow: 1; /* Ocupa el espacio disponible */
  display: flex;
  flex-direction: column;
}

.label {
  font-size: 0.85rem;
  color: #888;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 4px;
}

.product-name {
  font-size: 1.1rem;
  color: #333;
  font-weight: 600;
}

/* Badge de estado (derecha) */
.status-badge {
  background-color: #dcfce7;
  color: #166534;
  padding: 5px 12px;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: bold;
}

/* 5. Estado Vacío */
.empty-state {
  text-align: center;
  padding: 40px;
  background-color: #f9fafb;
  border-radius: 12px;
  color: #6b7280;
  border: 2px dashed #e5e7eb;
}
</style>
