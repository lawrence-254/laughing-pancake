const Comments = require('../models/commentsModel');
const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('express-async-handler');

const addComment = asyncHandler(async (req, res, next) => {
    try {
        const { comment, episodeId } = req.body;
        if (!comment) {
            return next(new ErrorResponse('Please provide all fields', 400));
        }
        const newComment = await Comments.create({
            comment,
            episode: episodeId,
            user: req.user._id
        });
        res.status(201).json({ success: true, data: newComment });
    } catch (error) {
        next(error);
    }
}
);
