const { Router } = require('express');
const  Car  = require('../models/Car.js');

module.exports = Router() 
  .get('/', async (req, res, next) => {
    try {
      const carList = await Car.getAll();
      res.json(carList);
    } catch (e) {
      next(e);
    }
  });
