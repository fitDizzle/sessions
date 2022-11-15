const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
app.use(cors());

app.listen(8080, () => {
  console.log('Listening on port 8080');
});
