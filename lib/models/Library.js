const mongoose = require('mongoose');

const librarySchema = new mongoose.Schema({
  placeName: {
    type: String,
    minlength: 1,
    maxlength: 40,
    require: true // required not require
  },
  address: {
    type: String,
    minlength: 6,
    maxlength: 100,
    require: true // required not require
  },
  description: {
    type: String,
    minlength: 1,
    maxlength: 220,
    require: true // required not require
  }
});

module.exports = mongoose.model('Library', librarySchema);
