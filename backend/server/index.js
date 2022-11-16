const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const routes = require('./routes/index.js');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json({ type: 'application/*+json' }))

app.get('/', (req, res) => {
  res.send('success');
});

app.use(routes);

app.listen(8080, () => {
  console.log('Listening on port 8080');
});
