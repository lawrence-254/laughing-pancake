const PlaybackHistory = require('../models/PlaybackHistoryModel');
const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('express-async-handler');

const addPlaybackHistory = asyncHandler(async (req, res, next) => {
    try {
        const { episodeId, playedDuration } = req.body;
        if (!episodeId || !playedDuration) {
            return next(new ErrorResponse('Please provide all fields', 400));
        }
        const newPlaybackHistory = await PlaybackHistory.create({
            episode: episodeId,
            user: req.user._id,
            playedDuration
        });
        res.status(201).json({ success: true, data: newPlaybackHistory });
    } catch (error) {
        next(error);
    }
}
);

const getAllPlaybackHistory = asyncHandler(async (req, res, next) => {
    try {
        const playbackHistory = await PlaybackHistory.find().populate('episode', 'title');
        res.status(200).json({ success: true, data: playbackHistory });
    } catch (error) {
        next(error);
    }
}
);

const getPlaybackHistory = asyncHandler(async (req, res, next) => {
    try {
        const playbackHistory = await PlaybackHistory.findById(req.params.id).populate('episode', 'title');
        if (!playbackHistory) {
            return next(new ErrorResponse('Playback history not found', 404));
        }
        res.status(200).json({ success: true, data: playbackHistory });
    } catch (error) {
        next(error);
    }
}
);

const updatePlaybackHistory = asyncHandler(async (req, res, next) => {
    try {
        const playbackHistory = await PlaybackHistory.findById(req.params.id);
        if (!playbackHistory) {
            return next(new ErrorResponse('Playback history not found', 404));
        }
        const { playedDuration } = req.body;
        playbackHistory.playedDuration = playedDuration || playbackHistory.playedDuration;

        await playbackHistory.save();
        res.status(200).json({ success: true, data: playbackHistory });
    } catch (error) {
        next(error);
    }
}
);

const deletePlaybackHistory = asyncHandler(async (req, res, next) => {
    try {
        const playbackHistory = await PlaybackHistory.findById(req.params.id);
        if (!playbackHistory) {
            return next(new ErrorResponse('Playback history not found', 404));
        }
        await playbackHistory.remove();
        res.status(200).json({ success: true, data: {} });
    } catch (error) {
        next(error);
    }
}
);


module.exports = {
    addPlaybackHistory,
    getAllPlaybackHistory,
    getPlaybackHistory,
    updatePlaybackHistory,
    deletePlaybackHistory
};