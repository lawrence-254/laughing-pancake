const mongoose = require('mongoose');
const User = require('./UserModel');
const Episode = require('./EpisodeModel');

const LikeSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    episode: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Episode'
    }
}, { timestamps: true });

module.exports = mongoose.model('Like', LikeSchema);

