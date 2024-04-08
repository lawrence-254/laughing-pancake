#!/usr/bin/env node
const express = require('express');
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


const app = express();

app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true,
    methods: 'GET, POST, PUT, DELETE, OPTIONS',
}));
app.use(express.json());

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(passport.initialize());
// app.use(passport.session());

// require('./config/passport')(passport);
//======================================================================================================


//db

// Connect to the database
dbConnection()
    .then(() => {
        console.log('Database connection established. Starting server...');
        // Define your routes
        app.get('/', (req, res) => {
            res.send('Hello World');
        });
        //======================================================================================================

        app.use('/api/user', userRoutes);
        // app.use('/api/podcast', podcastRoutes);
        // app.use('/api/episode', episodeRoutes);
        // app.use('/api/comment', commentRoutes);
        // app.use('/api/like', likeRoutes);
        // app.use('/api/subscription', subscriptionRoutes);
        // app.use('/api/playback', playbackRoutes);
        //======================================================================================================

        // Start the server
        const PORT = process.env.PORT || 5000;
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch((error) => {
        console.error('Error connecting to the database:', error);
    });



//=======================================================================================================