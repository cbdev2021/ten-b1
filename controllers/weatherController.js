const { findPlaces } = require('../services/weatherService');

async function getPlaces(req, res) {
  const { text } = req.query;
  try {
    const places = await findPlaces(text);
    res.json(places);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching places' });
  }
}

module.exports = {
  getPlaces
};
