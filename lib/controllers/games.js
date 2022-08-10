const { Router } = require('express');
const  Game  = require('../models/Game.js');

module.exports = Router() 
  .get('/', async (req, res, next) => {
    try {
      const gameList = await Game.getAll();
      res.json(gameList);
    } catch (e) {
      next(e);
    }
  })


  .get('/:id', async (req, res, next) => {
    try {
      const gameDetails = await Game.getById(req.params.id);
      res.json(gameDetails);
    } catch (e) {
      next(e);
    }
  });

