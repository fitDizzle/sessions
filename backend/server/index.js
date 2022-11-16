const express = require('express');
const path = require('path');
const cors = require('cors');
const routes = require('./routes');

const app = express();
app.use(cors());

app.get('/', (req, res) => {
  res.send('success');
});

app.use(routes);

app.listen(8080, () => {
  console.log('Listening on port 8080');
});
