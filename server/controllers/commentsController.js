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

const getAllComments = asyncHandler(async (req, res, next) => {
    try {
        const comments = await Comments.find().populate('user', 'username');
        res.status(200).json({ success: true, data: comments });
    } catch (error) {
        next(error);
    }
}
);

const getComment = asyncHandler(async (req, res, next) => {
    try {
        const comment = await Comments.findById(req.params.id).populate('user', 'username');
        if (!comment) {
            return next(new ErrorResponse('Comment not found', 404));
        }
        res.status(200).json({ success: true, data: comment });
    } catch (error) {
        next(error);
    }
}
);

const updateComment = asyncHandler(async (req, res, next) => {
    try {
        const comment = await Comments.findById(req.params.id);
        if (!comment) {
            return next(new ErrorResponse('Comment not found', 404));
        }
        const { text } = req.body;
        comment.commentText = text || comment.commentText;

        await comment.save();
        res.status(200).json({ success: true, data: comment });
    } catch (error) {
        next(error);
    }
}
);

const deleteComment = asyncHandler(async (req, res, next) => {
    try {
        const comment = await Comments.findById(req.params.id);
        if (!comment) {
            return next(new ErrorResponse('Comment not found', 404));
        }
        await comment.remove();
        res.status(200).json({ success: true, data: {} });
    } catch (error) {
        next(error);
    }
}
);

module.exports = { addComment, getAllComments, getComment, updateComment, deleteComment };
