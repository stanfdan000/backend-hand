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
  })

  .get('/:id', async (req, res, next) => {
    try {
      const branchDetails = await Branch.getById(req.params.id);
      res.json(branchDetails);
    } catch (e) {
      next(e);
    }
  })

  .post('/', async (req, res, next) => {
    try {
      const addbranch = await Branch.insert(req.body);
      
      res.json(addbranch);
    } catch (e) {
      next(e);
    }
  });
