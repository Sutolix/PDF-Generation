const express = require('express');

const OngController = require('./controllers/OngController');
const AdminController = require('./controllers/AdminController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');
const AdminSessionController = require('./controllers/AdminSessionController');

const routes = express.Router();

routes.get('/sessions', SessionController.create);
routes.get('/admsessions', AdminSessionController.create);

module.exports = routes;