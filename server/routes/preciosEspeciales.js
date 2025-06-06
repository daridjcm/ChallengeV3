const express = require('express');
const router = express.Router();
const PrecioEspecial = require('../models/PrecioEspecial');

// Crear nuevo precio especial
router.post('/', async (req, res) => {
    const { userId, productoId, precioEspecial, nombreUsuario } = req.body;
    
    try {
        const nuevoPrecio = new PrecioEspecial({
            userId,
            productoId,
            precioEspecial,
            nombreUsuario
        });
        
        const guardado = await nuevoPrecio.save();
        res.status(201).json(guardado);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Obtener precios especiales por usuario
router.get('/:userId', async (req, res) => {
    try {
        const precios = await PrecioEspecial.find({ userId: req.params.userId })
            .populate('productoId');
        res.json(precios);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;