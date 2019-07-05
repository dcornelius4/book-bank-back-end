const { Router } = require('express');
const Book = require('../models/Book');
const ensureAuth = require('../middleware/ensure-auth');

module.exports = Router()
  .post('/', ensureAuth(), (req, res, next) => {
    const { bookName } = req.body;
    Book
      .create({ bookName, author: req.user.sub })
      .then(book => res.send(book))
      .catch(next);
  })

  .get('/', ensureAuth(), (req, res, next) => {
    Book
      .find()
      .then(books => res.send(books))
      .catch(next);
  });
