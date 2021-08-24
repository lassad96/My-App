import express from 'express';
import { getPosts, getPost, createPost, updatePost, likePost, deletePost } from '../controllers/posts.js';
const router =express.Router();

/* we re gonna create new folder called controllers where we will put all functions from routes
and post on controllers*/

//test
router.get('/',getPosts);
router.post('/',createPost);
router.get('/:id', getPost);
router.patch('/:id', updatePost);
router.delete('/:id', deletePost);
router.patch('/:id/likePost', likePost);
export default router;