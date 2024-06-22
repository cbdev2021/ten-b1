const { findPlaces, getWeatherPoint } = require('../services/weatherService'); // Importa ambas funciones desde weatherService

async function getPlaces(req, res) {
  const { text } = req.query;
  try {
    const places = await findPlaces(text);
    res.json(places);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching places' });
  }
}

async function getWeatherData(req, res) { // Cambia el nombre de la función
  const { lat, lon } = req.query;
  try {
    const weatherData = await getWeatherPoint(lat, lon); // Usa la función importada correctamente
    res.json(weatherData);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching weather data' });
  }
}

module.exports = {
  getPlaces,
  getWeatherData, // Exporta la función con el nuevo nombre
};


// const { findPlaces } = require('../services/weatherService');

// async function getPlaces(req, res) {
//   const { text } = req.query;
//   try {
//     const places = await findPlaces(text);
//     res.json(places);
//   } catch (error) {
//     res.status(500).json({ error: 'Error fetching places' });
//   }
// }

// module.exports = {
//   getPlaces
// };
