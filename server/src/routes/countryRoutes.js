const {Router} = require('express');
const router = Router();
const { getCountries, checkBorderCountries } = require('../controllers/countryInfo');



router.get('/country', getCountries);
router.get('/checkBorderCountries/:code', checkBorderCountries);


module.exports = router;