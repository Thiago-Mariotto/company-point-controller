const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

require('dotenv').config();

const { errorHandler } = require('./middlewares');
const { checkLocation } = require('./controllers/checkLocation');

const router = require('./routes');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use(router);
app.post('/location', checkLocation);
app.get('/', (req, res) => res.send('Online aqui'));

app.use(errorHandler);

module.exports = app;
