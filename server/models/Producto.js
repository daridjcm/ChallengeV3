const mongoose = require('mongoose');

const ProductoSchema = new mongoose.Schema({
    nombre: String,
    precio: Number,
    descripcion: String,
});

module.exports = mongoose.model('Producto', ProductoSchema);