const mongoose = require('mongoose');
const Podcast = require('./PodcatsModel');

const EpisodeSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    mediaUrl: {
        type: String,
        required: true
    },
    duration: {
        type: String,
        required: true
    },
    publishedAt: {
        type: Date,
        default: Date.now
    },
    podcast: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Podcast'
    }
}, { timestamps: true });

module.exports = mongoose.model('Episode', EpisodeSchema);