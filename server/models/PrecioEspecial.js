const mongoose = require('mongoose');

const PrecioEspecialSchema = new mongoose.Schema({
    userId: { type: String, required: true },
    productoId: { type: mongoose.Schema.Types.ObjectId, ref: 'Producto', required: true },
    precioEspecial: { type: Number, required: true },
    nombreUsuario: String
});

module.exports = mongoose.model('PrecioEspecialCorrea25', PrecioEspecialSchema, 'preciosEspecialesCorrea25');