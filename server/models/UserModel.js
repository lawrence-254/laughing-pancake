const mongoose = require('mongoose');
const Podcast = require('./PodcastModel');

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    profilePicture: {
        type: String,
        default: ""
    },
    subscribedPodcasts: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Podcast'
    }]
}, { timestamps: true });

module.exports = mongoose.model('User', UserSchema);