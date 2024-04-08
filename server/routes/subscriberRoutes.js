const express = require('express');
const router = express.Router();
const subscriberController = require('../controllers/subscriberController');


router.get('/api/subscribers', subscriberController.getAllSubscribers);
router.post('/api/subscriber/podcast/:podcastId', subscriberController.addSubscriber);
router.delete('/api/subscriber/podcast/:podcastId', subscriberController.deleteSubscriber);