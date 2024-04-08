const mongoose = require('mongoose');

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