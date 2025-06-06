require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

// Ruta para obtener productos y precios especiales
const Product = require("./routes/productos");
const SpecialPrice = require("./routes/preciosEspeciales");

// Middleware para procesar JSON y permitir CORS
app.use(express.json());
app.use(cors());

// Conectar a MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ Conectado a MongoDB"))
  .catch((error) => {
    console.error("❌ Error de conexión a MongoDB:", error);
    process.exit(1);
  });

// Rutas
app.use("/api/productos", Product);
app.use("/api/precios-especiales", SpecialPrice);

// Iniciar el servidor
app.listen(PORT, () =>
  console.log(`🚀 Servidor corriendo en el puerto ${PORT}`)
);
