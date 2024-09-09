const axios = require('axios');
const { Router } = require('express');
const router = Router();



const getCountries = async (req, res) => {
  try {
    const response = await axios.get('https://date.nager.at/api/v3/AvailableCountries');
    res.json(response.data);
  } catch (error) {
    res.status(500).send('Error fetching countries');
  }
};

const checkBorderCountries = async (req, res) => {
  const countryCode = req.params.code;

  // Validar el código del país
  if (!countryCode || typeof countryCode !== 'string') {
    return res.status(400).send('Invalid country code');
  }

  try {
    // Obtener información del país
    const countryInfoResponse = await axios.get(`https://date.nager.at/api/v3/CountryInfo/${countryCode}`);
  

    // Obtener datos de población
    const populationResponse = await axios.post('https://countriesnow.space/api/v0.1/countries/population', {
      iso2: countryCode // Enviar código ISO3 en lugar del nombre del país
    });

    // Obtener URL de la bandera
    const flagResponse = await axios.post('https://countriesnow.space/api/v0.1/countries/flag/images', {
      iso2: countryCode
    });

    // Responder con la información consolidada
    res.json({
      borders: countryInfoResponse.data.borders,
      population: populationResponse.data.data,
      flag: flagResponse.data.data.flag
    });
  } catch (error) {
    console.error('Error fetching country info:', error.message);
    res.status(500).send(`Error fetching country info: ${error.message}`);
  }
};



module.exports = {
    getCountries,
    checkBorderCountries,
};