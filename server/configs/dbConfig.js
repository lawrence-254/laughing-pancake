// ./configs/dbConnection.js
const mongoose = require('mongoose');

const dbConnection = async () => {
    require('dotenv').config();
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('Connected to the database');
    } catch (error) {
        console.error('Error connecting to the database:', error.message);
        throw error;
    }
};

module.exports = dbConnection;