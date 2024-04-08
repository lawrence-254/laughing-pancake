// ./configs/dbConnection.js
const mongoose = require('mongoose');

const dbConnection = async () => {
    try {
        console.log('MongoDB URI:', process.env.MONGODB_URI);
        const connection = await mongoose.connect(process.env.MONGODB_URI);
        console.log(`Connected to MongoDB ${connection.connection.host}`);
    } catch (error) {
        console.error('Error connecting to the database:', error.message);
        throw error;
    }
};

module.exports = dbConnection;