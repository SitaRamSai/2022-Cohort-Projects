const express = require('express');
const router = express.Router();

const { getPosts, getPost, createPost, updatePost, deletePost} = require('../controllers/posts');

router.get('/posts', getPosts);
router.get('/post/:id', getPost);
router.post('/post', createPost);
router.put('/post/:id', updatePost);
router.delete('/post/:id', deletePost);

module.exports = router;