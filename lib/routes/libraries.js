const { Router } = require('express');
const ensureAuth = require('../middleware/ensure-auth');
const Library = require('../models/Library');

module.exports = Router()
  .post('/', (req, res, next) => {
    const { placeName, address, description } = req.body;
    Library
      .create({ placeName, address, author: req.user.sub, description })
      .then(library => res.send(library))
      .catch(next);
  });
