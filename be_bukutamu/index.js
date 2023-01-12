const express = require('express');
const bodyParser = require('body-parser');
const authapi = require('./api/auth')
require('dotenv').config()
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api/auth', authapi)

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});