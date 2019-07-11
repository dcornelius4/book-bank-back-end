const { Router } = require('express');
const Book = require('../models/Book');
const ensureAuth = require('../middleware/ensure-auth');

module.exports = Router()
  .post('/', ensureAuth(), (req, res, next) => {
    const { bookName } = req.body;
    // your book has a required library
    // you need to create your book with a library
    // your book schema doesn't have an author
    Book
      .create({ bookName, author: req.user.sub })
      .then(book => res.send(book))
      .catch(next);
  })

  .get('/', ensureAuth(), (req, res, next) => {
    // you can't get all books in a library?
    Book
      .find()
      .then(books => res.send(books))
      .catch(next);
  });
