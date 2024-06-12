const express = require('express');
const router = express.Router();
const { getPlaces } = require('../controllers/weatherController');

router.get('/places', getPlaces);

module.exports = router;
