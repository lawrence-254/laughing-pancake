const express = require('express');
const router = express.Router();
const likeController = require('../controllers/likeController');


router.get('/api/likes/episode/:episodeId', likeController.getAllLikes);
router.post('/api/likes/episode/:episodeId', likeController.addLike);
router.put('/api/likes/:id', likeController.updateLike);
router.delete('/api/likes/:id', likeController.deleteLike);


module.exports = router;
