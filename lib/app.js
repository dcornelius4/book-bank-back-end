const express = require('express');
const app = express();
const ensureAuth = require('../lib/middleware/ensure-auth');

app.use(require('cors')());

app.use(express.json());

app.use('/libraries', require('./routes/libraries'));
app.use('/books', require('./routes/books'));

app.use(require('./middleware/not-found'));
app.use(require('./middleware/error'));

module.exports = app;
