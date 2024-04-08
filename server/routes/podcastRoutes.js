const express = require('express');
const router = express.Router();
const podcastController = require('../controllers/podcastController');


router.get('/api/podcasts', podcastController.getAllPodcasts);
router.get('/api/podcast/:id', podcastController.getPodcast);
router.post('/api/podcast', podcastController.addPodcast);
router.put('/api/podcast/:id', podcastController.updatePodcast);
router.delete('/api/podcast/:id', podcastController.deletePodcast);


module.exports = router;
