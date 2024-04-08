const mongoose = require('mongoose');
const User = require('./UserModel');
const Podcast = require('./PodcastModel');

const SubscriptionSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    podcast: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Podcast'
    }
}, { timestamps: true });

module.exports = mongoose.model('Subscription', SubscriptionSchema);