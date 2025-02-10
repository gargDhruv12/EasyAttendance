const db = require('../config/db');

const getProfile = async (req, res) => {
  const { id } = req.params;

  try {
    const [users] = await db.query('SELECT * FROM users WHERE id = ?', [id]);
    if (users.length === 0) return res.status(404).json({ error: 'User not found' });

    const user = users[0];
    res.json({ id: user.id, email: user.email, name: user.name, graduation_year: user.graduation_year });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch profile' });
  }
};

const updateProfile = async (req, res) => {
  const { id } = req.params;
  const { name, graduation_year } = req.body;

  try {
    await db.query('UPDATE users SET name = ?, graduation_year = ? WHERE id = ?', [name, graduation_year, id]);
    res.json({ message: 'Profile updated successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to update profile' });
  }
};

module.exports = { getProfile, updateProfile };