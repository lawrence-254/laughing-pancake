const express = require('express');
const router = express.Router();
const { register, login } = require('../controllers/userController');

router.post('/register', register);
router.post('/login', login);
// router.post('/logout',logout);

// router.get('/profile', profile);
// router.put('/profile', updateProfile);
// router.delete('/profile', deleteProfile);


module.exports = router;