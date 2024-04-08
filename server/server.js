#!/usr/bin/env node
const express = require('express');
// const bodyParser = require('body-parser');
const cors = require('cors');
// const passport = require('passport');
// const path = require('path');
const userRoutes = require('./routes/userRoutes');

const app = express();

app.use(cors());
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(passport.initialize());
// app.use(passport.session());

// require('./config/passport')(passport);

app.use('/api/user', userRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
}
);