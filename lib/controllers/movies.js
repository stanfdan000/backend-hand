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
  });
