const mongoose = require('mongoose');

// Connect to the database
const dbConnection = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connected to the database');
    } catch (error) {
        console.log('Error connecting to the database', error);
    }
};

module.exports = dbConnection;