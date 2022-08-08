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
  })

  .get('/:id', async (req, res, next) => {
    try {
      const beersDetails = await Beer.getById(req.params.id);
      res.json(beersDetails);
    } catch (e) {
      next(e);
    }
  });



  
  
  




  














