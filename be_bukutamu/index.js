const express = require('express');
const bodyParser = require('body-parser');
const authapi = require('./api/auth')
const tamuapi = require('./api/tamu')
require('dotenv').config()
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api/auth', authapi)
app.use('/api/tamu', tamuapi)

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});