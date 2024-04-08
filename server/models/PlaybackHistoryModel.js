const mongoose = require('mongoose');
const User = require('./UserModel');
const Episode = require('./EpisodeModel');

const PlaybackHistorySchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    episode: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Episode'
    },
    playedAt: {
        type: Date,
        default: Date.now
    },
    playbackDuration: String
}, { timestamps: true });

module.exports = mongoose.model('PlaybackHistory', PlaybackHistorySchema);