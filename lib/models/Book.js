const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  library: {
    type: mongoose.Types.ObjectId,
    ref: 'Library',
    require: true
  },
  bookName: {
    type: String,
    minlength: 1,
    maxlength: 40,
    require: false
  }
});

module.exports = mongoose.model('Book', bookSchema);
