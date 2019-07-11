const mongoose = require('mongoose');

// why is bookName not required?
// where is the author?
const bookSchema = new mongoose.Schema({
  library: {
    type: mongoose.Types.ObjectId,
    ref: 'Library',
    required: true // required not require
  },
  bookName: {
    type: String,
    minlength: 1,
    maxlength: 40,
    require: false // required not require
  }
});

module.exports = mongoose.model('Book', bookSchema);
