const mongoose = require('mongoose');
const dotenv = require('dotenv');

// Debugging dotenv loading
const result = dotenv.config();
if (result.error) {
    console.error('Error loading .env file:', result.error);
    throw result.error;
}

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