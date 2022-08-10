const { Router } = require('express');
const  Movie  = require('../models/Movie.js');

module.exports = Router() 
  .get('/', async (req, res, next) => {
    try {
      const movieList = await Movie.getAll();
      res.json(movieList);
    } catch (e) {
      next(e);
    }
  })


  .get('/:id', async (req, res, next) => {
    try {
      const movieDetails = await Movie.getById(req.params.id);
      res.json(movieDetails);
    } catch (e) {
      next(e);
    }
  });
