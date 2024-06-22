const express = require('express');
const router = express.Router();
// const { getPlaces } = require('../controllers/weatherController');
const { getPlaces, getWeatherData } = require('../controllers/weatherController');

router.get('/places', getPlaces);
router.get('/point', getWeatherData); 

module.exports = router;
