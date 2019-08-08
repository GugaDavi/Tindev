const { Router } = require('express');

const DevController = require('./controllers/DevController');
const LikeController = require('./controllers/LikeController');
const DesLikeController = require('./controllers/DesLikeController');

const routes = Router();

routes.get('/devs', DevController.index);
routes.post('/devs', DevController.store);
routes.post('/devs/:devId/likes', LikeController.store);
routes.post('/devs/:devId/deslikes', DesLikeController.store);

module.exports = routes;
