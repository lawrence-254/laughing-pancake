const express = require('express');
const router = express.Router();
const playbackController = require('../controllers/playbackController');


router.get('/api/history', playbackController.getAllPlaybacks);
router.get('/api/history/:id', playbackController.getPlayback);
router.post('/api/history/episode/episodeId', playbackController.addPlayback);
router.put('/api/history/:id', playbackController.updatePlayback);
router.delete('/api/history/:id', playbackController.deletePlayback);

