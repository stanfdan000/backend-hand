const { Router } = require('express');
const   Branch  = require('../models/Branch.js');

module.exports = Router() 
  .get('/', async (req, res, next) => {
    try {
      const branchList = await Branch.getAll();
      res.json(branchList);
    } catch (e) {
      next(e);
    }
  });
