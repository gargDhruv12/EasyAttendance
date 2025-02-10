const db = require('../config/db');

const createTeam = async (req, res) => {
  const { name, description, created_by } = req.body;

  try {
    const [result] = await db.query(
      'INSERT INTO teams (name, description, created_by) VALUES (?, ?, ?)',
      [name, description, created_by]
    );
    res.status(201).json({ id: result.insertId, name, description });
  } catch (error) {
    res.status(500).json({ error: 'Failed to create team' });
  }
};

const getTeams = async (req, res) => {
  try {
    const [teams] = await db.query('SELECT * FROM teams');
    res.json(teams);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch teams' });
  }
};

const joinTeam = async (req, res) => {
  const { team_id, user_id } = req.body;

  try {
    await db.query('INSERT INTO team_members (team_id, user_id) VALUES (?, ?)', [team_id, user_id]);
    res.json({ message: 'Joined team successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to join team' });
  }
};

module.exports = { createTeam, getTeams, joinTeam };