const express = require('express');
const app = express.Router();
const postController = require('../controllers/post.controller');

app.post('/', postController.createPost);
app.get('/', postController.getPosts);
app.get('/:id', postController.getPostById);
app.put('/:id', postController.updatePost);
app.delete('/:id', postController.deletePost);

module.exports = app;