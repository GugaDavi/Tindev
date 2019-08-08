const express = require('express');
const mongoose = require('mongoose');

const server = express();

const routes = require('./routes');

server.use(express.json());
server.use(routes);

server.listen(3333);
