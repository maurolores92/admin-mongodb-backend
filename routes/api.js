const express = require('express');
const router = express.Router();
const Gastos = require('../models/gastos');
const Ingresos = require('../models/ingresos'); 

router.get('/gastos', async (req, res) => {
    try {
      const gastos = await Gastos.find(); 
      res.json(gastos);
    } catch (err) {
      res.status(500).json({ error: 'Error al obtener gastos' });
    }
  });

router.get('/ingresos', async (req, res) => {
  try {
    const ingresos = await Ingresos.find();
    res.json(ingresos);
  } catch (err) {
    console.error('Error al obtener ingresos:', err);
    res.status(500).json({ error: 'Error al obtener ingresos' });
  }
});
  
router.post('/gastos', async (req, res) => {
    try {
      const newGasto = new Gastos(req.body);
      const savedGasto = await newGasto.save();
      res.status(201).json(savedGasto);
    } catch (err) {
      res.status(500).json({ error: 'Error al agregar gasto' });
    }
  });

router.post('/ingresos', async (req, res) => {
  try {
    const newIngreso = new Ingresos(req.body);
    const savedIngreso = await newIngreso.save();
    res.status(201).json(savedIngreso); 
  } catch (err) {
    res.status(400).json({ error: 'Error al agregar el gasto' });
  }
});

  
  module.exports = router;