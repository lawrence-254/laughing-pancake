const express = require('express');
const router = express.Router();
const {getAllLikes, addLike, deleteLike} = require('../controllers/likeController');


router.get('/api/likes/episode/:episodeId', getAllLikes);
router.post('/api/likes/episode/:episodeId', addLike);
router.delete('/api/likes/:id', deleteLike);


module.exports = router;
