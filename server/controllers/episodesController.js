const Episode = require('../models/EpisodesModels');
const Podcast = require('../models/PodcatsModel');
const ErrorResponse = require('../utils/errorResponse');

const addEpisode = async (req, res, next) => {
    try {
        const { title, description, mediaUrl, duration, podcastId } = req.body;
        if (!title || !description || !mediaUrl || !duration) {
            return next(new ErrorResponse('Please provide all fields', 400));
        }
        const podcast = await Podcast.findById(podcastId);
        if (!podcast) {
            return next(new ErrorResponse('Podcast not found', 404));
        }
        const newEpisode = await Episode.create({
            title,
            description,
            mediaUrl,
            duration,
            podcast: podcastId
        });
        podcast.episodes.push(newEpisode._id);
        await podcast.save();
        res.status(201).json({ success: true, data: newEpisode });
    } catch (error) {
        next(error);
    }
}

const getAllEpisodes = async (req, res, next) => {
    try {
        const episodes = await Episode.find().populate('podcast', 'title');
        res.status(200).json({ success: true, data: episodes });
    } catch (error) {
        next(error);
    }
}

const getEpisode = async (req, res, next) => {
    try {
        const episode = await Episode.findById(req.params.id).populate('podcast', 'title');
        if (!episode) {
            return next(new ErrorResponse('Episode not found', 404));
        }
        res.status(200).json({ success: true, data: episode });
    } catch (error) {
        next(error);
    }
}

const updateEpisode = async (req, res, next) => {
    try {
        const episode = await Episode.findById(req.params.id);
        if (!episode) {
            return next(new ErrorResponse('Episode not found', 404));
        }
        const { title, description, mediaUrl, duration } = req.body;
        episode.title = title || episode.title;
        episode.description = description || episode.description;
        episode.mediaUrl = mediaUrl || episode.mediaUrl;
        episode.duration = duration || episode.duration;
        await episode.save();
        res.status(200).json({ success: true, data: episode });
    } catch (error) {
        next(error);
    }
}

const deleteEpisode = async (req, res, next) => {
    try {
        const episode = await Episode.findById(req.params.id);
        if (!episode) {
            return next(new ErrorResponse('Episode not found', 404));
        }
        await episode.remove();
        res.status(200).json({ success: true, data: {} });
    } catch (error) {
        next(error);
    }
}


module.exports = { addEpisode, getAllEpisodes, getEpisode, updateEpisode, deleteEpisode };
