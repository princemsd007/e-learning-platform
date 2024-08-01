// backend/config.js
require('dotenv').config();

module.exports = {
  mongoURI: process.env.MONGO_URI,
  pegaBaseURL: process.env.PEGA_BASE_URL,
  pegaAPIKey: process.env.PEGA_API_KEY
};
