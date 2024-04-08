#!/usr/bin/env node
const express = require('express');
// const bodyParser = require('body-parser');
const cors = require('cors');
// const passport = require('passport');
// const path = require('path');
const userRoutes = require('./routes/userRoutes');
const podcastRoutes = require('./routes/podcastRoutes');
const episodeRoutes = require('./routes/episodeRoutes');
const commentRoutes = require('./routes/commentRoutes');
const likeRoutes = require('./routes/likeRoutes');
const subscriptionRoutes = require('./routes/subscriptionRoutes');
const playbackRoutes = require('./routes/playbackRoutes');

const app = express();

app.use(cors());
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(passport.initialize());
// app.use(passport.session());

// require('./config/passport')(passport);

app.use('/api/user', userRoutes);
app.use('/api/podcast', podcastRoutes);
app.use('/api/episode', episodeRoutes);
app.use('/api/comment', commentRoutes);
app.use('/api/like', likeRoutes);
app.use('/api/subscription', subscriptionRoutes);
app.use('/api/playback', playbackRoutes);


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
}
);