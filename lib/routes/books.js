const { Router } = require('express');
const Book = require('../models/Book');

module.exports = Router()
  .post('/', (req, res, next) => {
    const { bookName } = req.body;
    Book
      .create({ bookName })
      .then(book => res.send(book))
      .catch(next);
  });
