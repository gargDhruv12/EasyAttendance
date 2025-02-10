const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/profile/:id', userController.getProfile);
router.put('/profile/:id', userController.updateProfile);

module.exports = router;


//see  user with their id
//////http://localhost:5000/api/user/profile/:id