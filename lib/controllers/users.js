const { Router } = require('express');
const User = require('../models/User.js');
const UserService = require('../services/UserService.js');

module.exports = Router()
  .get('/', async (req, res, next) => {
    try {
      const users = await User.getAll();
      res.json(users);
    } catch (error) {
      next(error);
    }
  })

  .get('/:id', async (req, res, next) => {
    try {
      const user = await User.getById(req.params.id);
      res.json(user);
    } catch (error) {
      next(error);
    }
  })

  .post('/', async (req, res, next) => {
    try {
      const newUser = await UserService.create(req.body);
      res.json(newUser);
    } catch (error) {
      next(error);
    }
  });
