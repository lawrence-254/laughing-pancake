const Subscription = require('../models/SubscriptionModel');
const User = require('../models/UserModel');
const Podcast = require('../models/PodcastModel');
const asyncHandler = require('express-async-handler');

const subscribe = asyncHandler(async (req, res, next) => {
    try {
        const { podcastId } = req.body;
        if (!podcastId) {
            return next(new ErrorResponse('Please provide all fields', 400));
        }
        const podcast = await Podcast.findById(podcastId);
        if (!podcast) {
            return next(new ErrorResponse('Podcast not found', 404));
        }
        const subscription = await Subscription.create({
            user: req.user._id,
            podcast: podcastId
        });
        res.status(201).json({ success: true, data: subscription });
    } catch (error) {
        next(error);
    }
}
);

const getAllSubscriptions = asyncHandler(async (req, res, next) => {
    try {
        const subscriptions = await Subscription.find().populate('podcast', 'title');
        res.status(200).json({ success: true, data: subscriptions });
    } catch (error) {
        next(error);
    }
}
);

// Controller to delete a subscription
const deleteSubscription = asyncHandler(async (req, res, next) => {
    const { id } = req.params; // Assuming subscription id is passed in the request params

    try {
        // Find the subscription by id and delete it
        const deletedSubscription = await Subscription.findByIdAndDelete(id);

        // Check if subscription was not found
        if (!deletedSubscription) {
            return res.status(404).json({ message: 'Subscription not found' });
        }

        res.status(200).json({ message: 'Subscription deleted successfully' });
    } catch (error) {
        console.error(error);
        next(error); // Pass the error to the error handling middleware
    }
});

module.exports = { subscribe, getAllSubscriptions, deleteSubscription };
