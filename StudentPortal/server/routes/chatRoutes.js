const express = require('express');
const router = express.Router();
const chatController = require('../controllers/chatController');

router.get('/chat/:teamId', chatController.getMessages);
router.post('/chat/:teamId', chatController.sendMessage);

module.exports = router;

// to send chat     with team id
////http://localhost:5000/api/chat/chat/:teamid
