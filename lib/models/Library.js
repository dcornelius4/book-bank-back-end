const mongoose = require('mongoose');

const lirarySchema = new mongoose.Schema({
  placeName: {
    type: String,
    minlength: 1,
    maxlength: 40,
    require: true
  },
  address: {
    type: String,
    minlength: 6,
    maxlength: 100,
    require: true
  },
  description: {
    type: String,
    minlength: 1,
    maxlength: 220,
    require: true
  }
});

module.exports = mongoose.model('Library', lirarySchema);
