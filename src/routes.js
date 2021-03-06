const express = require('express');

const ScreenshotController = require('./controllers/ScreenshotController');

const routes = express.Router();

routes.post('/print', ScreenshotController.print);

module.exports = routes;