'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get(['/', '/CS1'], (req, res) => {
  console.warn(req);
  console.warn('Inside App.get');
  res.send('Hello World - NodeJS - CS1....');
  console.log('After render');
});

app.listen(PORT, HOST, () => {
  console.log(`Running on http://${HOST}:${PORT} app.listen`);
});
