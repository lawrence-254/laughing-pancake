const express = require('express');
const router = express.Router();
const { getAllComments, addComment, updateComment, deleteComment } = require('../controllers/commentController');


router.get('/api/comments/episode/:episodeId', getAllComments);
router.post('/api/comments/episode/:episodeId', addComment);
router.put('/api/comments/:id', updateComment);
router.delete('/api/comments/:id', deleteComment);


module.exports = router;
