const express = require('express');
const router = express.Router();
const { register } = require('../controllers/userController');

router.post('/register', register);
// router.post('/login', userController.login);
// router.post('/logout', userController.logout);

// router.get('/profile', userController.profile);
// router.put('/profile', userController.updateProfile);
// router.delete('/profile', userController.deleteProfile);


module.exports = router;