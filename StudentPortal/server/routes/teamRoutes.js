const express = require('express');
const router = express.Router();
const teamController = require('../controllers/teamController');

router.post('/teams', teamController.createTeam);
router.get('/teams', teamController.getTeams);
router.post('/teams/join', teamController.joinTeam);

module.exports = router;


//to create
//http://localhost:5000/api/team/teams


