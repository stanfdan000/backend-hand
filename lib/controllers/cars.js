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
  })

  .get('/:id', async (req, res, next) => {
    try {
      const carDetails = await Car.getById(req.params.id);
      res.json(carDetails);
    } catch (e) {
      next(e);
    }
  })



  .post('/', async (req, res, next) => {
    try {
      const addcar = await Car.insert(req.body);
      
      res.json(addcar);
    } catch (e) {
      next(e);
    }
  });
