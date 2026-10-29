const express = require('express');
const app = express();
const router = require('./router/postRouter');
 app.use(express.json());
 app.use('/api/post', router);


 module.exports = app;