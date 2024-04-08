const express = require('express');
const router = express.Router();
const { getPodcast, getAllPodcasts, addPodcast, updatePodcast, deletePodcast } = require('../controllers/podcastController');


router.get('/api/podcasts', getAllPodcasts);
router.get('/api/podcast/:id', getPodcast);
router.post('/api/podcast', addPodcast);
router.put('/api/podcast/:id', updatePodcast);
router.delete('/api/podcast/:id', deletePodcast);


module.exports = router;
