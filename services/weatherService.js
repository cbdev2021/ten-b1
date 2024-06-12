const fetch = require('node-fetch');
const { apiKey } = require('../config/config');

const METEOSOURCE_API_URL = 'https://www.meteosource.com/api/v1/free';

async function findPlaces(text) {
  try {
    const response = await fetch(`${METEOSOURCE_API_URL}/find_places?text=${text}&key=${apiKey}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data from API:', error);
    throw error;
  }
}

module.exports = {
  findPlaces
};
