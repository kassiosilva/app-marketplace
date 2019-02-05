const express = require('express')

const routes = express.Router()

const UserController = require('./app/controllers/UserController')

// Rota para a criação dos usuários
routes.post('/users', UserController.store)

module.exports = routes
