const express = require('express');
const router = express.Router();
const episodeController = require('../controllers/episodeController');


router.get('/api/episodes', episodeController.getAllEpisodes);
router.get('/api/episode/:id', episodeController.getEpisode);
router.post('/api/episode', episodeController.addEpisode);
router.put('/api/episode/:id', episodeController.updateEpisode);
router.delete('/api/episode/:id', episodeController.deleteEpisode);


module.exports = router;