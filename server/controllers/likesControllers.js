const Likes = require('../models/likesModel');
const ErrorResponse = require('../utils/errorResponse');
const Episode = require('../models/EpisodesModels');
const asyncHandler = require('express-async-handler');

// Controller to get all likes
const getAllLikes = asyncHandler(async (req, res) => {
    try {
        // Fetch all likes from the database
        const likes = await Like.find();
        res.status(200).json({ success: true, data: likes });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});

// Controller to add a like
const addLike = asyncHandler(async (req, res) => {
    try {
        // Get the episode id from the request body
        const { episodeId } = req.body;

        // Check if the episode exists
        const episode = await Episode.findById(episodeId);
        if (!episode) {
            return res.status(404).json({ message: 'Episode not found' });
        }

        // Create a new like
        const newLike = await Like.create({
            episode: episodeId,
            user: req.user._id
        });

        res.status(201).json({ success: true, data: newLike });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});

// Controller to delete a like
const deleteLike = asyncHandler(async (req, res) => {
    try {
        // Get the like id from the request parameters
        const { id } = req.params;

        // Check if the like exists
        const like = await Like.findById(id);
        if (!like) {
            return res.status(404).json({ message: 'Like not found' });
        }

        // Check if the user is the owner of the like
        if (like.user.toString() !== req.user._id.toString()) {
            return res.status(401).json({ message: 'Not authorized to delete this like' });
        }

        // Delete the like
        await like.remove();

        res.status(200).json({ success: true, data: {} });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = { getAllLikes, addLike, deleteLike };
