const asyncHandler = require('express-async-handler');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const tokenGenerator = require('../configs/tokenGenerator');
const User = require('../models/UserModel');
const ErrorResponse = require('../utils/errorResponse');


const register = asyncHandler(async (req, res, next) => {
    try {
        const { username, email, password, profilePicture } = req.body;

        if (!username || !email || !password) {
            return next(new ErrorResponse('Please provide all fields', 400));
        }

        const checkIfUserExists = await User.findOne({ email });

        if (checkIfUserExists) {
            return next(new ErrorResponse('User already exists', 400));
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await User.create(
            { username, email, password: hashedPassword, profilePicture }
        );

        res.status(201).json({ success: true, data: user });
    }
    catch (error) {
        next(error);
    }
}
);

module.exports = { register };