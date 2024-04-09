const express = require('express');
const router = express.Router();
const { getAllEpisodes, getEpisode, addEpisode, updateEpisode, deleteEpisode } = require('../controllers/episodeController');



router.get('/api/episodes', getAllEpisodes);
router.get('/api/episode/:id', getEpisode);
router.post('/api/episode', addEpisode);
router.put('/api/episode/:id', updateEpisode);
router.delete('/api/episode/:id', deleteEpisode);


module.exports = router;