const mongoose = require('mongoose');
const User = require('./UserModel');
const Episode = require('./EpisodeModel');


const CommentSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    episode: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Episode'
    }
}, { timestamps: true });

module.exports = mongoose.model('Comment', CommentSchema);