const Podcast = require('../models/podcastModel');
const ErrorResponse = require('../utils/errorResponse');


const addPodcast = asyncHandler(async (req, res, next) => {
    try {
        const { title, description, coverImage, category } = req.body;

        if (!title || !description || !category) {
            return next(new ErrorResponse('Please provide all fields', 400));
        }

        const podcast = await Podcast.create(
            { title, description, coverImage, category, creator: req.user._id }
        );

        res.status(201).json({ success: true, data: podcast });
    }
    catch (error) {
        next(error);
    }
}
);

const getPodcasts = asyncHandler(async (req, res, next) => {
    try {
        const podcasts = await Podcast.find().populate('creator', 'username');
        res.status(200).json({ success: true, data: podcasts });
    }
    catch (error) {
        next(error);
    }
}
);

const getPodcast = asyncHandler(async (req, res, next) => {
    try {
        const podcast = await Podcast.findById(req.params.id).populate('creator', 'username');
        if (!podcast) {
            return next(new ErrorResponse('Podcast not found', 404));
        }
        res.status(200).json({ success: true, data: podcast });
    }
    catch (error) {
        next(error);
    }
}
);

const updatePodcast = asyncHandler(async (req, res, next) => {
    try {
        const podcast = await Podcast.findById(req.params.id);

        if (!podcast) {
            return next(new ErrorResponse('Podcast not found', 404));
        }

        if (podcast.creator.toString() !== req.user._id.toString()) {
            return next(new ErrorResponse('Not authorized to update podcast', 401));
        }

        const updatedPodcast = await Podcast.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });

        res.status(200).json({ success: true, data: updatedPodcast });
    }
    catch (error) {
        next(error);
    }
}
);

const deletePodcast = asyncHandler(async (req, res, next) => {
    try {
        const podcast = await Podcast.findById(req.params.id);

        if (!podcast) {
            return next(new ErrorResponse('Podcast not found', 404));
        }

        if (podcast.creator.toString() !== req.user._id.toString()) {
            return next(new ErrorResponse('Not authorized to delete podcast', 401));
        }

        await podcast.remove();

        res.status(200).json({ success: true, data: {} });
    }
    catch (error) {
        next(error);
    }
}
);

module.exports = { addPodcast, getPodcasts, getPodcast, updatePodcast, deletePodcast };