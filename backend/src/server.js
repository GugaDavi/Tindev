const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const server = express();

const routes = require('./routes');

mongoose.connect(
  'mongodb+srv://gugadavi:33443101@cluster0-iosms.mongodb.net/tindev?retryWrites=true&w=majority',
  { useNewUrlParser: true }
);

server.use(cors());
server.use(express.json());
server.use(routes);

server.listen(3333);
