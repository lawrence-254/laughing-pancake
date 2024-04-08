#!/usr/bin/env node
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const dbConnection = require('./configs/dbConfig');



//======================================================================================================
//routes
const userRoutes = require('./routes/userRoutes');
// const podcastRoutes = require('./routes/podcastRoutes');
// const episodeRoutes = require('./routes/episodeRoutes');
// const commentRoutes = require('./routes/commentRoutes');
// const likeRoutes = require('./routes/likeRoutes');
// const subscriptionRoutes = require('./routes/subscriptionRoutes');
// const playbackRoutes = require('./routes/playbackRoutes');
//======================================================================================================
// Load environment variables
dotenv.config();
dbConnection()

const app = express();

app.use(express.json());
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true,
    methods: 'GET, POST, PUT, DELETE, OPTIONS',
}));

//====================================================================================================
app.get('/', (req, res) => {
    res.send('Hello World');
});

app.use('/api/user', userRoutes);
// app.use('/api/podcast', podcastRoutes);
// app.use('/api/episode', episodeRoutes);
// app.use('/api/comment', commentRoutes);
// app.use('/api/like', likeRoutes);
// app.use('/api/subscription', subscriptionRoutes);
// app.use('/api/playback', playbackRoutes);
//======================================================================================================

// Start the server
const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});