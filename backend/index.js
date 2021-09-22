/* eslint-disable no-console */
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const { errorHandler } = require('./src/middlewares/errorMiddleware');
const { checkLocation } = require('./src/controllers/checkLocation');

require('dotenv').config();

const PORT = process.env.PORT || 3000;

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.post('/location', checkLocation);

app.get('/', (req, res) => res.send('Online'));
app.use(errorHandler);

app.listen(PORT, () => console.log(`\nOnline on port => ${PORT}`));
