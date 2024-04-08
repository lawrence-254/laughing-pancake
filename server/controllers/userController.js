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

//login

const login = asyncHandler(async (req, res, next) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return next(new ErrorResponse('Please provide email and password', 400));
        }

        const user = await User.findOne({ email });

        if (!user) {
            return next(new ErrorResponse('Invalid credentials', 401));
        }

        const isPasswordMatch = await bcrypt.compare(password, user.password);

        if (!isPasswordMatch) {
            return next(new ErrorResponse('Invalid credentials', 401));
        }

        const token = tokenGenerator(user._id);

        res.status(200).json({ success: true, token });
    }
    catch (error) {
        next(error);
    }
}
);

module.exports = { register, login };