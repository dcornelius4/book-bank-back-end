const { Router } = require('express');
const ensureAuth = require('../middleware/ensure-auth');
const Library = require('../models/Library');

module.exports = Router()
  .post('/', (req, res, next) => {
    const { placeName, address, description } = req.body;
    Library
      .create({ placeName, address, description })
      .then(library => res.send(library))
      .catch(next);
  })

  .get('/', (req, res, next) => {
    Library
      .find()
      .then(libraries => res.send(libraries))
      .catch(next);
  })

  .get('/:id', (req, res, next) => {
    Library
      .findById(req.params.id)
      .then(library => res.send(library))
      .catch(next);
  });
