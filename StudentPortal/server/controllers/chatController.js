const db = require('../config/db');

const getMessages = async (req, res) => {
  const { teamId } = req.params;

  try {
    const [messages] = await db.query(
      'SELECT chat_messages.*, users.email FROM chat_messages JOIN users ON chat_messages.user_id = users.id WHERE team_id = ?',
      [teamId]
    );
    res.json(messages);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch messages' });
  }
};

const sendMessage = async (req, res) => {
  const { teamId } = req.params;
  const { user_id, message } = req.body;
  console.log("Received data:", { teamId, user_id, message });
  try {
    const [result] = await db.query(
      'INSERT INTO chat_messages (team_id, user_id, message) VALUES (?, ?, ?)',
      [teamId, user_id, message]
    );
    res.status(201).json({ id: result.insertId, message });
  } catch (error) {
    res.status(500).json({ error: 'Failed to send message' });
  }
};

module.exports = { getMessages, sendMessage };