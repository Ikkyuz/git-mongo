const express = require('express');
const app = express.Router();
const userController = require('../controllers/user.controller');

app.post('/', userController.createUser);
app.get('/', userController.getUsers);
app.get('/:id', userController.getUserById);
app.put('/:id', userController.updateUser);
app.delete('/:id', userController.deleteUser);

module.exports = app;