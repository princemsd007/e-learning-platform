// backend/controllers/userController.js
const User = require('../models/User');
const axios = require('axios');
const config = require('../config');

exports.registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Save user to MongoDB
    const user = new User({ name, email, password });
    await user.save();

    // Register user with Pega
    const pegaResponse = await axios.post(`${config.pegaBaseURL}/register`, {
      name,
      email
    }, {
      headers: { 'Authorization': `Bearer ${config.pegaAPIKey}` }
    });

    res.status(201).json({ user, pega: pegaResponse.data });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
