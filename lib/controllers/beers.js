const { Router } = require('express');
const  Beer  = require('../models/Beer.js');

module.exports = Router() 
  .get('/', async (req, res, next) => {
    try {
      const beerList = await Beer.getAll();
      res.json(beerList);
    } catch (e) {
      next(e);
    }
  });
