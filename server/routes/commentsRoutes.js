const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentController');


router.get('/api/comments/episode/:episodeId', commentController.getAllComments);
router.post('/api/comments/episode/:episodeId', commentController.addComment);
router.put('/api/comments/:id', commentController.updateComment);
router.delete('/api/comments/:id', commentController.deleteComment);


module.exports = router;
